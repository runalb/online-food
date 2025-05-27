import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem, MenuService } from '../../services/menu.service';
import { RouterOutlet, Router } from '@angular/router';
import { ItemComponent } from "../item/item.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule , ItemComponent, BannerComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  selectedCategory: string = '';
  menuItems: MenuItem[] = [];
  filteredItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit() {
    // Get all menu items
    const menu = this.menuService.getMenu();
    this.menuItems = Object.values(menu).flat();
    this.filteredItems = [...this.menuItems];
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
  }
}
