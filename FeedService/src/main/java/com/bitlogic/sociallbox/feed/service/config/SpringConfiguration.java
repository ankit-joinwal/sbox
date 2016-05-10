package com.bitlogic.sociallbox.feed.service.config;

import io.getstream.client.StreamClient;
import io.getstream.client.apache.StreamClientImpl;
import io.getstream.client.config.ClientConfiguration;

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
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.bitlogic.Constants;
import com.bitlogic.sociallbox.data.model.StreamsAPIConfig;
import com.bitlogic.sociallbox.feed.service.utils.LoggingService;
import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableWebMvc
@ComponentScan("com.bitlogic.sociallbox.feed.service")
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
	
	@Bean(name="streamsAPIConfig")
	public StreamsAPIConfig getStreamsAPIConfig(){
		String LOG_PREFIX = "getStreamsAPIConfig";
		StreamsAPIConfig apiConfig = new StreamsAPIConfig();
		String apiKey = environment.getRequiredProperty(Constants.STREAMS_API_KEY_PROP);
		String privateKey = environment.getRequiredProperty(Constants.STREAMS_PRIVATE_KEY_PROP);
		LOGGER.info("###           Streams Config       ###");
		logInfo(LOG_PREFIX, "STREAMS_API_KEY_PROP : {} "+apiKey);
		logInfo(LOG_PREFIX, "STREAMS_PRIVATE_KEY_PROP : {}", privateKey);
		LOGGER.info("###########################################");
		apiConfig.setApiKey(apiKey);
		apiConfig.setPrivateKey(privateKey);
		logInfo(LOG_PREFIX, "Successfully loaded streams api config");
		return apiConfig;
	}
	
	/*@Bean(name="streamClient")
	public StreamClient getStreamClient(){
		String LOG_PREFIX = "getStreamClient";
		StreamsAPIConfig apiConfig = new StreamsAPIConfig();
		String apiKey = environment.getRequiredProperty(Constants.STREAMS_API_KEY_PROP);
		String privateKey = environment.getRequiredProperty(Constants.STREAMS_PRIVATE_KEY_PROP);
		LOGGER.info("###           Streams Config       ###");
		logInfo(LOG_PREFIX, "STREAMS_API_KEY_PROP : {} "+apiKey);
		logInfo(LOG_PREFIX, "STREAMS_PRIVATE_KEY_PROP : {}", privateKey);
		LOGGER.info("###########################################");
		apiConfig.setApiKey(apiKey);
		apiConfig.setPrivateKey(privateKey);
		logInfo(LOG_PREFIX, "Successfully loaded streams api config");
		
		ClientConfiguration streamConfig = new ClientConfiguration();
    	StreamClient streamClient = new StreamClientImpl(streamConfig, apiConfig.getApiKey(), apiConfig.getPrivateKey());
    	return streamClient;
	}*/
	
	@Bean(name="objectMapper")
	public ObjectMapper getObjectMapper(){
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper;
	}
	
}
