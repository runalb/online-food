import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem, MenuService } from '../../services/menu.service';
import { RouterOutlet, Router } from '@angular/router';
import { ItemComponent } from "../item/item.component";
import { BannerComponent } from "../banner/banner.component";
import { NgFor, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface CategoryInfo {
  name: string;
  count: number;
  icon: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule, ItemComponent, BannerComponent, NgFor, NgClass, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  selectedCategory: string = '';
  menuItems: MenuItem[] = [];
  filteredItems: MenuItem[] = [];
  categories: CategoryInfo[] = [];
  isSidebarOpen: boolean = false;

  private categoryIcons: { [key: string]: string } = {
    'Burgers': '🍔',
    'Drinks': '🥤',
    'Sides': '🍟',
    'Desserts': '🍦'
  };

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    // Get all menu items
    const menu = this.menuService.getMenu();
    this.menuItems = Object.values(menu).flat();
    this.filteredItems = [...this.menuItems];
    
    // Initialize categories
    this.initializeCategories();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  private initializeCategories() {
    // Add "All Items" category
    this.categories = [{
      name: '',
      count: this.menuItems.length,
      icon: '🏠'
    }];

    // Get unique categories and their counts
    const categoryCounts = this.menuItems.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });

    // Add other categories
    Object.entries(categoryCounts).forEach(([category, count]) => {
      this.categories.push({
        name: category,
        count: count,
        icon: this.categoryIcons[category] || '🍽️'
      });
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.router.navigate(['/'], { 
      queryParams: { category: category || '' }
    });
    
    // Filter items based on category
    if (category === '') {
      this.filteredItems = [...this.menuItems];
    } else {
      this.filteredItems = this.menuItems.filter(item => item.category === category);
    }

    // Close sidebar on mobile after selection
    if (window.innerWidth <= 768) {
      this.isSidebarOpen = false;
    }
  }
}
