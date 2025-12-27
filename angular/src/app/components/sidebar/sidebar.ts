import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  menuItems = [
    { label: 'Create Product', route: '/create-product' },
    { label: 'Find All Products', route: '/find-all-products' },
    { label: 'Find Product by ID', route: '/find-product-by-id' },
    { label: 'Update Product', route: '/update-product' },
    { label: 'Delete Product', route: '/delete-product' }
  ];
}
