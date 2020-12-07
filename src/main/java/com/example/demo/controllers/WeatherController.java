package com.example.demo.controllers;

import com.example.demo.entities.Weather;
import com.example.demo.services.WeatherService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService){
        this.weatherService = weatherService;
    }

    @GetMapping("/weather")
    public Weather weather(){
        System.out.println(weatherService.getWeatherByCityAttributes("LDN"));
        return new Weather("This", "Hello", 10.0);
    }
}
