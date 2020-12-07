package com.example.demo.controllers;

import com.example.demo.entities.Weather;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    @GetMapping("/weather")
    public Weather weather(){
        return new Weather("This", "Hello", 10.0);
    }
}
