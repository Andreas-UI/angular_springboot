import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.html'
})
export class ProductsTableComponent {
  @Input() products: Product[] = [];
}
