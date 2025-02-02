import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col gap-2"
    >
      <div class="mx-auto relative">
        <span
          class="absolute top-0 right-[-20rem] text-sm text-gray-500"
          [class]="
            (product().stock ?? 0) > 0 ? 'text-green-500' : 'text-red-500'
          "
        >
          @if ((product().stock ?? 0) > 0) {
          {{ product().stock }} left } @else { Out of Stock }
        </span>
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-sm ">{{ '$' + product().price }}</span>
          <app-primary-button
            label="Add to Cart"
            class="mt-3"
            (btnClicked)="cartService.addToCart(product())"
          />
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartService = inject(CartService);
}
