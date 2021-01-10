package com.example.demo.controllers;

import com.example.demo.entities.Weather;
import com.example.demo.services.WeatherService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService){
        this.weatherService = weatherService;
    }

    @GetMapping(value = "/weather/{city}")
    public Weather weather(@PathVariable String city){

        return weatherService.getWeatherByCity(city);
    }

    @GetMapping(value = "/forecast/{city}/{days}")
    public List<Weather> forecast(@PathVariable String city, @PathVariable Integer days){

        return weatherService.getForecastByCity(city, days);
    }
}

/*
    - naprawa tego filtra żeby ten principal działał
    - dodać admina
    - nowy endpoint, on ma mieć filtr na dostęp admina else 403/401
 */