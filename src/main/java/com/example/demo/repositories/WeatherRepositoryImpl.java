package com.example.demo.repositories;

import lombok.SneakyThrows;
import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Repository
@Component("weatherRepositoryImpl")
public class WeatherRepositoryImpl implements WeatherRepository{

    @SneakyThrows
    @Override
    public JSONObject getWeatherByCityJSON(){
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("http://api.openweathermap.org/data/2.5/weather?q=London&appid=2d2070966a17db1018f8d45ec626ee9e")).build();

        HttpClient client = HttpClient.newHttpClient();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        String jsonString = response.body();
        
        return new JSONObject(jsonString);
    }
}
