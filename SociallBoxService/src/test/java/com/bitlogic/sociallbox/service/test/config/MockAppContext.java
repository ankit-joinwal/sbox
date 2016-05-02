package com.bitlogic.sociallbox.service.test.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {
        "com.bitlogic.sociallbox.service.test.config"
})
public class MockAppContext extends WebMvcConfigurerAdapter{

	
}
