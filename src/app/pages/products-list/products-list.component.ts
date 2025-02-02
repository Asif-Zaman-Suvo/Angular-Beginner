import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Wireless Headphones',
      image:
        'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800',
      price: 99.99,
      stock: 25,
    },
    {
      id: 2,
      title: 'Gaming Laptop',
      image:
        'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800',
      price: 1299.99,
      stock: 10,
    },
    {
      id: 3,
      title: 'Smartphone',
      image:
        'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800',
      price: 699.99,
      stock: 0,
    },
    {
      id: 4,
      title: 'Mechanical Keyboard',
      image:
        'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800',
      price: 149.99,
      stock: 50,
    },
    {
      id: 5,
      title: '4K Monitor',
      image:
        'https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800',
      price: 399.99,
      stock: 15,
    },
  ]);
}
