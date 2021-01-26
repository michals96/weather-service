package com.example.demo.filters;

import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@Order(1)
public class CustomFilter extends GenericFilterBean {

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        logger.info("Logging Request: " + req.getMethod() + " URI: " + req.getRequestURI());

        chain.doFilter(request, response);

        logger.info("Logging Response : " + res.getContentType());

        if (SecurityContextHolder.getContext().getAuthentication() != null &&
                SecurityContextHolder.getContext().getAuthentication().isAuthenticated() &&
                !(SecurityContextHolder.getContext().getAuthentication() instanceof AnonymousAuthenticationToken)){

            System.out.println("USER IS LOGGED IN!");

            UserDetails principal = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            
            logger.info("USER: " + principal.getUsername());
            logger.info("SERVER:" + request.getServerName());
            logger.info("ROLES:" + principal.getAuthorities());

        }
    }
}
