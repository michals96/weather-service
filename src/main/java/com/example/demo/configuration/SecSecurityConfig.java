package com.example.demo.configuration;

import com.example.demo.filters.CustomFilter;
import com.example.demo.filters.JwtAuthorizationFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecSecurityConfig extends WebSecurityConfigurerAdapter {

    private final MyAuthenticationSuccessHandler myAuthenticationSuccessHandler;
    private final String secret;

    public SecSecurityConfig(MyAuthenticationSuccessHandler myAuthenticationSuccessHandler, @Value("${jwt.secret}") String secret){
        this.myAuthenticationSuccessHandler = myAuthenticationSuccessHandler;
        this.secret = secret;
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user1").password(passwordEncoder().encode("user1")).roles("USER")
                .and()
                .withUser("user2").password(passwordEncoder().encode("user2")).roles("USER")
                .and()
                .withUser("admin").password(passwordEncoder().encode("admin")).roles("ADMIN");
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/forecast/**").hasRole("ADMIN")
                .antMatchers("/login*").permitAll()
                .antMatchers("/weather/**").permitAll()
                .anyRequest().authenticated()
                .and()
                //.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 1
                //.and()
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), super.userDetailsService(), secret))
                .formLogin()
                .loginPage("/login.html");

        http.addFilterBefore(
                new CustomFilter(), BasicAuthenticationFilter.class);
    }

    /*@Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 1
                .and()
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), super.userDetailsService(), secret)) // 2
                .exceptionHandling()
                .and()
                .formLogin()
                .loginPage("/login.html");;
    }*/

}
