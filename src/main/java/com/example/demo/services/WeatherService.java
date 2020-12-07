package com.example.demo.services;

import java.util.List;

public interface WeatherService {
    List<String> getWeatherByCityAttributes(String cityName);
}
