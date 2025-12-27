import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeleteAAPIResponse, ProductService } from '../../services/product.service';
import { catchError, finalize, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [PageHeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './delete-product.html',
})
export class DeleteProductComponent {
  form: FormGroup;
  submitLoading = false;
  success$: Observable<string | null> = of(null);
  error$: Observable<string | null> = of(null);

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.form = this.fb.group({
      product_id: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const id = this.form.get('product_id')?.value;
      this.submitLoading = true;
      
      this.error$ = of(null);
      this.success$ = of(null);
      
      this.success$ = this.productService.deleteProduct(id).pipe(
        map((response:DeleteAAPIResponse) => response.message),
        catchError((err) => {
          console.error('Error deleting product:', err);
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

  get id() {
    return this.form.get('product_id');
  }
}
