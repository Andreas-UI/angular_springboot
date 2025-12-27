import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product.service';
import { catchError, finalize, Observable, of } from 'rxjs';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [PageHeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './update-product.html',
})
export class UpdateProductComponent {
  form: FormGroup;
  submitLoading = false;
  error$: Observable<string | null> = of(null);

  product$: Observable<Product | null> = of(null);

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.form = this.fb.group({
      product_id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      quantity: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0.0)]],
    });
  }

  onSubmit(): void {
    const { product_id, ...payload } = this.form.value;
    if (this.form.valid) {
      this.error$ = of(null);
      this.product$ = this.productService.updateProduct(product_id, payload).pipe(
        catchError((err) => {
          console.error('Error fetching product:', err);
          this.error$ = of('Product not found');
          return of(null);
        }),
        finalize(() => {
          this.submitLoading = false;
          this.form.reset();
        })
      );
    }
  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get quantity() {
    return this.form.get('quantity');
  }

  get price() {
    return this.form.get('price');
  }

  get id() {
    return this.form.get('product_id');
  }
}
