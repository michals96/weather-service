package com.example.demo.services;

import com.example.demo.entities.Weather;

import java.util.List;

public interface WeatherService {
    List<String> getWeatherByCityAttributes(String cityName);
    List<Weather> getForecastByCityAttributes(String cityName, Integer days);
}
