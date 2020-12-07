package com.example.demo.services;

import com.example.demo.repositories.WeatherRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("weatherService")
public class WeatherServiceImpl implements WeatherService{

    private final WeatherRepository weatherRepository;

    @Autowired
    WeatherServiceImpl(WeatherRepository weatherRepository){
        this.weatherRepository = weatherRepository;
    }

    @Override
    public List<String> getWeatherByCityAttributes(String cityName) {

        JSONObject weatherByCityJSON = weatherRepository.getWeatherByCityJSON();

        List<String> weatherAttr = List.of(weatherByCityJSON.toString());

        return weatherAttr;
    }
}
