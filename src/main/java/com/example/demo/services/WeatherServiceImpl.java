package com.example.demo.services;

import com.example.demo.entities.Weather;
import com.example.demo.repositories.WeatherRepository;
import lombok.SneakyThrows;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("weatherService")
public class WeatherServiceImpl implements WeatherService{

    private final WeatherRepository weatherRepository;

    @Autowired
    WeatherServiceImpl(WeatherRepository weatherRepository){
        this.weatherRepository = weatherRepository;
    }

    @SneakyThrows
    @Override
    public List<String> getWeatherByCityAttributes(String cityName) {

        JSONObject weatherByCityJSON = weatherRepository.getWeatherByCityJSON(cityName);

        String temperature = weatherByCityJSON.getJSONObject("main").getString("temp");

        String weatherState = weatherByCityJSON.getJSONArray("weather").getJSONObject(0).getString("description");

        List<String> weatherAttr = List.of(cityName, temperature, weatherState);

        return weatherAttr;
    }

    @SneakyThrows
    @Override
    public List<Weather> getForecastByCityAttributes(String cityName, Integer days){

        JSONObject forecastByCityJSON = weatherRepository.getForecastByCityJSON(cityName, days);

        List<Weather> forecastList = new ArrayList<Weather>();

        for(Integer i = 0; i<days; ++i){
            String temperature = forecastByCityJSON.getJSONArray("list").getJSONObject(i).getJSONObject("main").getString("temp");
            String weatherState = forecastByCityJSON.getJSONArray("list").getJSONObject(i).getJSONArray("weather").getJSONObject(0).getString("description");

            forecastList.add(new Weather(cityName, weatherState, Double.valueOf(temperature)));
        }

        return forecastList;
    }
}
