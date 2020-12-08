package com.example.demo.repositories;

import org.json.JSONObject;

public interface WeatherRepository {
    JSONObject getWeatherByCityJSON(String cityName);
    JSONObject getForecastByCityJSON(String cityName, Integer days);
}
