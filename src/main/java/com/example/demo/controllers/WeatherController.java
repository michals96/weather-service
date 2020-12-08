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

        List<String> weatherByCityAttributes = weatherService.getWeatherByCityAttributes(city);

        return new Weather(weatherByCityAttributes.get(0), weatherByCityAttributes.get(2), Double.valueOf(weatherByCityAttributes.get(1)) );
    }

    @GetMapping(value = "/forecast/{city}/{days}")
    public List<Weather> forecast(@PathVariable String city, @PathVariable Integer days){

        return weatherService.getForecastByCityAttributes(city, days);
    }
}
