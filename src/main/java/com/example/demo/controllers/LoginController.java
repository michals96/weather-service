package com.example.demo.controllers;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.demo.entities.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@RequiredArgsConstructor
@RestController
public class LoginController
{
    private final AuthenticationManager authenticationManager;

    @Value("${jwt.secret}")
    String secret;

    @Value("${jwt.expirationTime}")
    long expirationTime;

    @RequestMapping("/login.html")
    public String login() {
        return "login.html";
    }

    @PostMapping("/loginTmp")
    public void loginTmp(@RequestBody UserDTO user, HttpServletResponse response){
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(user.getLogin(), user.getPassword());
        Authentication authenticate = authenticationManager.authenticate(token);

        if(authenticate.isAuthenticated()){

            UserDetails principal = (UserDetails) authenticate.getPrincipal(); // 1
            String jwtToken = JWT.create() // 2
                    .withSubject(principal.getUsername()) // 3
                    .withExpiresAt(new Date(System.currentTimeMillis() + expirationTime)) // 4
                    .sign(Algorithm.HMAC256(secret)); // 5

            response.addHeader("Authorization", "Bearer " + jwtToken);
        }
        else{
            response.setStatus(HttpServletResponse.SC_BAD_GATEWAY);
        }
    }
}
