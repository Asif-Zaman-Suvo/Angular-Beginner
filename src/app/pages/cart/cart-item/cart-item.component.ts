import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div
      class="bg-white p-4 rounded-xl shadow-md border flex gap-4 items-center border-slate-200"
    >
      <img
        [src]="item().image"
        [alt]="item().title"
        class="w-[50px] h-[50px] rounded-md object-contain"
      />
      <div class="flex flex-col gap-2">
        <span class="text-sm font-bold">{{ item().title }}</span>
        <span class="text-sm">{{ '$' + item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(item().id)"
      />
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
