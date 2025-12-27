# Product CRUD Application

A full-stack web application demonstrating basic CRUD (Create, Read, Update, Delete) operations for product management. Built with Angular frontend and Spring Boot backend with SQLite database.

## Overview

This project provides a simple interface to manage products with the following attributes:
- **ID** - Unique identifier
- **Name** - Product name
- **Description** - Product description
- **Quantity** - Available quantity
- **Price** - Product price

## Tech Stack

### Frontend
- **Angular** - Modern web framework for building the user interface
- Located in `/angular` directory

### Backend
- **Spring Boot** - Java-based REST API framework
- **SQLite** - Lightweight embedded database
- Located in `/rest-service` directory

## Project Structure

```
root/
├── angular/          # Frontend application
├── rest-service/     # Backend application
└── README.md
```

## Features

### Frontend Routes

The application consists of 5 main routes:

| Route | Description |
|-------|-------------|
| `/` | Default route (redirects to `/find-all-products`) |
| `/create-product` | Create a new product |
| `/delete-product` | Delete an existing product |
| `/find-all-products` | View all products |
| `/find-product-by-id` | Find a specific product by ID |
| `/update-product` | Update an existing product |

### Backend API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/create` | POST | Create a new product |
| `/findAll` | GET | Retrieve all products |
| `/find/{id}` | GET | Retrieve a product by ID |
| `/update/{id}` | POST | Update a product by ID |
| `/delete/{id}` | DELETE | Delete a product by ID |

## Getting Started

### Prerequisites

- **Node.js** and **npm** (for Angular)
- **Java JDK 17+** (for Spring Boot)
- **Maven** or **Gradle** (for dependency management)

### Frontend Setup

1. Navigate to the Angular directory:
   ```bash
   cd angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Backend Setup

1. Navigate to the Spring Boot directory:
   ```bash
   cd rest-service
   ```

2. Open the project in your IDE:
   - **VS Code**: Open the `rest-service` folder in VS Code
     - Install the "Extension Pack for Java" if you haven't already
     - VS Code will automatically detect it's a Spring Boot project
   - **IntelliJ IDEA**: Open the `rest-service` folder
   - **Eclipse**: Import as an existing Maven/Gradle project

3. Run the application:
   - **VS Code**: Press `F5` or click "Run" on the main application class
   - **IntelliJ/Eclipse**: Right-click the main application class and select "Run"
   - **Command line** (optional):
     ```bash
     # Using Maven
     ./mvnw spring-boot:run
     
     # Using Gradle
     ./gradlew bootRun
     ```

4. The API will be available at `http://localhost:8080`

## Usage

1. Start both the backend and frontend servers
2. Navigate to `http://localhost:4200` in your browser
3. Use the navigation to access different CRUD operations:
   - View all products on the landing page
   - Create new products
   - Search for products by ID
   - Update existing products
   - Delete products

## Database

The application uses **SQLite** as its database, which creates a local file-based database. No additional database setup is required - the database file will be created automatically when the application runs for the first time.

## API Testing

You can test the API endpoints directly using tools like:
- **Postman**
- **curl**
- **Thunder Client** (VS Code extension)

Example curl commands:

```bash
# Get all products
curl http://localhost:8080/findAll

# Get product by ID
curl http://localhost:8080/find/1

# Create a product
curl -X POST http://localhost:8080/create \
  -H "Content-Type: application/json" \
  -d '{"name":"Sample Product","description":"A sample product","quantity":10,"price":29.99}'

# Update a product
curl -X POST http://localhost:8080/update/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Product","description":"Updated description","quantity":15,"price":39.99}'

# Delete a product
curl -X DELETE http://localhost:8080/delete/1
```
