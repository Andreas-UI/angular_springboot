import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ProductFormData {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.html',
})
export class ProductFormComponent {
  @Output() submitted = new EventEmitter<ProductFormData>();

  form: FormGroup;
  submitLoading = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      quantity: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(0.00)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitLoading = true;
      this.submitted.emit(this.form.value);
      
      setTimeout(() => {
        this.form.reset();
        this.submitLoading = false;
      }, 500);
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
}
