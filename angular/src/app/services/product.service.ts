import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { type ProductFormData } from '../components/product-form/product-form';

export interface Product extends ProductFormData {
  id: number;
}

export interface DeleteAAPIResponse {
  message: string;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  createProduct(data: ProductFormData): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/create`, data);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/findAll`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/find/${id}`);
  }

  updateProduct(id: number, data: ProductFormData): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/update/${id}`, data);
  }

  deleteProduct(id: number): Observable<DeleteAAPIResponse> {
    return this.http.delete<DeleteAAPIResponse>(`${this.apiUrl}/delete/${id}`);
  }
}
