package com.andreas.rest_service.controller;

import org.springframework.web.bind.annotation.RestController;

import com.andreas.rest_service.dto.request.CreateProductRequest;
import com.andreas.rest_service.dto.request.UpdateProductRequest;
import com.andreas.rest_service.dto.response.ProductResponse;
import com.andreas.rest_service.dto.response.MessageResponse;
import com.andreas.rest_service.service.ProductService;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/create")
    public ResponseEntity<ProductResponse> createProduct(@Valid @RequestBody CreateProductRequest request) {
        ProductResponse product = productService.createProduct(request);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<ProductResponse>> findAllProduct() {
        List<ProductResponse> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<ProductResponse> findProduct(@PathVariable Long id) {
        ProductResponse product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<ProductResponse> updateProduct(@PathVariable Long id,
            @Valid @RequestBody UpdateProductRequest request) {
        ProductResponse entity = productService.updateProductById(id, request);
        return ResponseEntity.ok(entity);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MessageResponse> deleteProduct(@PathVariable Long id) {
        productService.deleteProductById(id);
        return ResponseEntity.ok(new MessageResponse("Product deleted successfully", 200));
    }

}
