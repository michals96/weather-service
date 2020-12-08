package com.example.demo.services;

import com.example.demo.entities.Weather;

import java.util.List;

public interface WeatherService {
    Weather getWeatherByCity(String cityName);
    List<Weather> getForecastByCity(String cityName, Integer days);
}
