import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @if (loading()) {
      <div class="col-span-2 flex justify-center items-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        ></div>
      </div>
      } @else { @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      } }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  loading = signal(true);

  async ngOnInit() {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/category/electronics'
      );
      const data = await response.json();
      this.products.set(data);
    } finally {
      this.loading.set(false);
    }
  }

  products = signal<Product[]>([]);
}
