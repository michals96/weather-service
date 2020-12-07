package com.example.demo.entities;

public class Weather {
    private final String city;
    private final String weatherState;
    private final Double temperature;

    public Weather(String city, String weatherState, Double temperature){
        this.city = city;
        this.weatherState = weatherState;
        this.temperature = temperature;
    }

    public String getCity() {
        return city;
    }

    public String getWeatherState() {
        return weatherState;
    }

    public Double getTemperature() {
        return temperature;
    }
}
