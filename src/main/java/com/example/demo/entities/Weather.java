package com.example.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Weather {
    private final String city;
    private final String weatherState;
    private final Double temperature;
}
