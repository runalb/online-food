import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-toggle" (click)="toggleTheme()">
      <i class="material-icons">{{ (isDarkMode$ | async) ? 'light_mode' : 'dark_mode' }}</i>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s;
    }
    
    .theme-toggle:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .dark-theme .theme-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .material-icons {
      font-size: 24px;
    }
  `]
})
export class ThemeToggleComponent {
  isDarkMode$;

  constructor(private themeService: ThemeService) {
    this.isDarkMode$ = this.themeService.isDarkMode$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
} 