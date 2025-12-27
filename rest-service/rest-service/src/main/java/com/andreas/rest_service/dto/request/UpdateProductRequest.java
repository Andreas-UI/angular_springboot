package com.andreas.rest_service.dto.request;

public record UpdateProductRequest(
        String name,
        String description,
        int quantity,
        Double price) {

}
