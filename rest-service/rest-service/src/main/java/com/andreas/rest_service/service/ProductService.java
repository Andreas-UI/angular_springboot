package com.andreas.rest_service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.andreas.rest_service.dto.request.CreateProductRequest;
import com.andreas.rest_service.dto.request.UpdateProductRequest;
import com.andreas.rest_service.dto.response.ProductResponse;
import com.andreas.rest_service.model.Product;
import com.andreas.rest_service.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Create a new product
    public ProductResponse createProduct(CreateProductRequest request) {
        Product product = new Product(
                request.name(),
                request.description(),
                request.quantity(),
                request.price());
        Product savedProduct = productRepository.save(product);
        return toResponse(savedProduct);
    }

    // Get all products
    public List<ProductResponse> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream().map(this::toResponse).toList();
    }

    // Get product by ID
    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        return toResponse(product);
    }

    // Update product by ID
    public ProductResponse updateProductById(Long id, UpdateProductRequest request) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setName(request.name());
        product.setDescription(request.description());
        product.setQuantity(request.quantity());
        product.setPrice(request.price());

        Product updatedProduct = productRepository.save(product);
        return toResponse(updatedProduct);
    }

    // Delete product by ID
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }

    // Helper method to convert Product to ProductResponse
    private ProductResponse toResponse(Product product) {
        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getQuantity(),
                product.getPrice());
    }
}
