import { Routes } from '@angular/router';
import { CreateProductComponent } from './pages/create-product/create-product';
import { FindAllProductsComponent } from './pages/find-all-products/find-all-products';
import { FindProductByIdComponent } from './pages/find-product-by-id/find-product-by-id';
import { UpdateProductComponent } from './pages/update-product/update-product';
import { DeleteProductComponent } from './pages/delete-product/delete-product';

export const routes: Routes = [
  { path: 'create-product', component: CreateProductComponent },
  { path: 'find-all-products', component: FindAllProductsComponent },
  { path: 'find-product-by-id', component: FindProductByIdComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: '', redirectTo: '/find-all-products', pathMatch: 'full' }
];
