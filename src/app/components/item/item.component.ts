import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem } from '../../services/menu.service';
import { NgFor, NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { CartService, CartItem } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatButtonModule, NgFor, NgClass, TitleCasePipe, NgIf],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() items: MenuItem[] = [];
  cartItems: CartItem[] = [];
  private cartSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  addToCart(item: MenuItem) {
    this.cartService.addItem(item);
  }

  isInCart(item: MenuItem): boolean {
    return this.cartItems.some(cartItem => cartItem.id === item.id && cartItem.quantity > 0);
  }

  getItemQuantity(item: MenuItem): number {
    const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  }

  incrementQuantity(item: MenuItem) {
    this.cartService.addItem(item);
  }

  decrementQuantity(item: MenuItem) {
    const cartItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      this.cartService.updateQuantity(cartItem.id, cartItem.quantity - 1);
    }
  }
}
