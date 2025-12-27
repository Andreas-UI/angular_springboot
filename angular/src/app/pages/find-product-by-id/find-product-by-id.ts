import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.service';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-find-product-by-id',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './find-product-by-id.html',
})
export class FindProductByIdComponent {
  form: FormGroup;
  product$: Observable<Product | null> = of(null);
  submitLoading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.form = this.fb.group({
      product_id: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const id = this.form.get('product_id')?.value;
      this.submitLoading = true;
      this.error = null;
      
      this.product$ = this.productService.getProductById(id).pipe(
        catchError(err => {
          console.error('Error fetching product:', err);
          this.error = 'Product not found';
          return of(null);
        }),
        finalize(() => {
          this.submitLoading = false;
        })
      );
    }
  }

  get id() {
    return this.form.get('product_id');
  }
}