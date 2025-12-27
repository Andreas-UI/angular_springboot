package com.andreas.rest_service.dto.request;

public record CreateProductRequest(
        String name,
        String description,
        int quantity,
        Double price) {

}
