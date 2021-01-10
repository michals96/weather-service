package com.example.demo;

import com.example.demo.filters.CustomFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class WeatherServiceApplication extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.addFilterBefore(
				new CustomFilter(), BasicAuthenticationFilter.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(WeatherServiceApplication.class, args);
	}
}


