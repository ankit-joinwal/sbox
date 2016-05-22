package com.bitlogic.sociallbox.mail.service.config;

import java.io.IOException;
import java.util.Properties;

import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.exception.VelocityException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.core.env.Environment;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.crypto.codec.Base64;
import org.springframework.ui.velocity.VelocityEngineFactoryBean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.mail.service.util.LoggingService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableWebMvc
@ComponentScan("com.bitlogic.sociallbox.mail.service")
@PropertySource(value = { "file:${catalina.home}/conf/application.properties" })
public class SpringConfiguration  extends LoggingService{
	private static final Logger LOGGER = LoggerFactory.getLogger(SpringConfiguration.class);
	
	
	@Override
	public Logger getLogger() {
		return LOGGER;
	}
	
	@Autowired
	private Environment environment;
	
	@Bean
	public ReloadableResourceBundleMessageSource messageSource() {
	  ReloadableResourceBundleMessageSource messageBundle = new ReloadableResourceBundleMessageSource();
	  messageBundle.setBasename("classpath:messages/messages");
	  messageBundle.setDefaultEncoding("UTF-8");
	  return messageBundle;
	}
	
	@Bean(name="restTemplate")
	public RestTemplate getRestTemplate(){
		RestTemplate restTemplate = new RestTemplate();
		restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
        restTemplate.getMessageConverters().add(new StringHttpMessageConverter());
        restTemplate.getMessageConverters().add(new ByteArrayHttpMessageConverter());
        return restTemplate;
	}
	
	@Bean(name="mailSender")
	public JavaMailSender getMailSender(){
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		String host = environment.getRequiredProperty(Constants.SB_MAIL_SERVICE_HOST_PROP);
		String port = environment.getRequiredProperty(Constants.SB_MAIL_SERVICE_PORT_PROP);
		String userName = environment.getRequiredProperty(Constants.SB_MAIL_SERVICE_USERNAME_PROP);
		String encryptedPassword = environment.getRequiredProperty(Constants.SB_MAIL_SERVICE_PASSWORD_PROP);
		//String password = new String(Base64.decode(encryptedPassword.getBytes()));
		mailSender.setHost(host);
		mailSender.setPort(Integer.parseInt(port));
		mailSender.setProtocol("smtp");
		mailSender.setUsername(userName);
		mailSender.setPassword(encryptedPassword);
		
		Properties properties = new Properties();
		properties.put("mail.debug", Boolean.FALSE);
		properties.put("mail.smtp.auth", Boolean.TRUE);
		properties.put("mail.smtp.starttls.enable", Boolean.TRUE);
		properties.put("mail.mime.charset", "UTF-8");
		properties.put("mail.transport.protocol", "smtp");
		
		mailSender.setJavaMailProperties(properties);
		
		return mailSender;
	}
	
	@Bean(name="velocityEngine")
	public VelocityEngine velocityEngine() throws VelocityException, IOException{
		VelocityEngineFactoryBean factory = new VelocityEngineFactoryBean();
		Properties props = new Properties();
		props.put("resource.loader", "class");
		props.put("class.resource.loader.class", 
				  "org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader");
		factory.setVelocityProperties(props);
		
		return factory.createVelocityEngine();
	}
	
	@Bean(name="objectMapper")
	public ObjectMapper getObjectMapper(){
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper;
	}
	
}
