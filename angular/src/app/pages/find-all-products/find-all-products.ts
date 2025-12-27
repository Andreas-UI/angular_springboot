import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header';
import { ProductsTableComponent, type Product } from '../../components/products-table/products-table';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-all-products',
  standalone: true,
  imports: [PageHeaderComponent, ProductsTableComponent, CommonModule],
  templateUrl: './find-all-products.html',
})
export class FindAllProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private productService: ProductService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.loading = true;
    this.error = null;
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.ngZone.run(() => {
          this.products = data;
          this.loading = false;
          this.cdr.markForCheck();
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          console.error('Error fetching products:', err);
          this.error = 'Failed to load products';
          this.loading = false;
          this.cdr.markForCheck();
        });
      }
    });
  }
}
