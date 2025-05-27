import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem } from '../../services/menu.service';
import { NgFor, NgIf, NgClass, TitleCasePipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatButtonModule, NgFor, NgClass, TitleCasePipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() items: MenuItem[] = [];

  constructor(private cartService: CartService) {}

  addToCart(item: MenuItem) {
    this.cartService.addItem(item);
  }
}
