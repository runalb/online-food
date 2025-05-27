import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  { 
    path: '', 
    component: MenuComponent,
    data: { selectedCategory: '' }
  },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }
];
