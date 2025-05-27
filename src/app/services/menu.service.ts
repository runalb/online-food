import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  options?: string[];
  foodType: 'veg' | 'non-veg' | 'egg';
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: { [category: string]: MenuItem[] } = {
    Burgers: [
      {
        id: 1,
        name: 'Big Mac',
        description: 'Two beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
        price: 5.99,
        image: 'assets/food-img.jpg',
        category: 'Burgers',
        options: ['No Pickles', 'Extra Cheese', 'No Onions'],
        foodType: 'non-veg'
      },
      {
        id: 2,
        name: 'Quarter Pounder',
        description: 'Quarter pound beef patty, cheese, onions, pickles, ketchup, mustard.',
        price: 6.49,
        image: 'assets/food-img.jpg',
        category: 'Burgers',
        options: ['No Cheese', 'Extra Onions', 'No Ketchup'],
        foodType: 'non-veg'
      }
    ],
    Drinks: [
      {
        id: 3,
        name: 'Coca-Cola',
        description: 'Classic Coke.',
        price: 1.99,
        image: 'assets/food-img.jpg',
        category: 'Drinks',
        options: ['Small', 'Medium', 'Large'],
        foodType: 'veg'
      },
      {
        id: 4,
        name: 'Sprite',
        description: 'Lemon-lime soda.',
        image: 'assets/food-img.jpg',
        price: 1.99,
        category: 'Drinks',
        options: ['Small', 'Medium', 'Large'],
        foodType: 'egg'
      }
    ],
    Sides: [
      {
        id: 5,
        name: 'Fries',
        description: 'World famous fries.',
        image: 'assets/food-img.jpg',
        price: 2.49,
        category: 'Sides',
        options: ['Small', 'Medium', 'Large'],
        foodType: 'veg'
      }
    ],
    Desserts: [
      {
        id: 6,
        name: 'Apple Pie',
        description: 'Warm apple pie.',
        price: 1.49,
        image: 'assets/food-img.jpg',
        category: 'Desserts',
        options: [],
        foodType: 'veg'
      }
    ]
  };

  getMenu() {
    return this.menu;
  }
}
