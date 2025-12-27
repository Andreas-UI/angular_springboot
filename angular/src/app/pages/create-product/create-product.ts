import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header';
import { ProductFormComponent, type ProductFormData } from '../../components/product-form/product-form';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [PageHeaderComponent, ProductFormComponent],
  templateUrl: './create-product.html',
})
export class CreateProductComponent {
  constructor(private productService: ProductService) {}

  onProductSubmit(data: ProductFormData): void {
    this.productService.createProduct(data).subscribe({
      next: (response) => {
        console.log('Product created successfully:', response);
        alert('Product created successfully!');
      },
      error: (error) => {
        console.error('Error creating product:', error);
        alert('Error creating product. Check console.');
      }
    });
  }
}
