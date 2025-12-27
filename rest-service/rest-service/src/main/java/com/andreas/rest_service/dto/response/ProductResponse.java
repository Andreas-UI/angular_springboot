package com.andreas.rest_service.dto.response;

public record ProductResponse(
        Long id,
        String name,
        String description,
        int quantity,
        Double price) {

}
