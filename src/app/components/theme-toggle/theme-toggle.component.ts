import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-toggle" (click)="toggleTheme()">
      <span class="material-icons">{{ (isDarkMode$ | async) ? 'light_mode' : 'dark_mode' }}</span>
    </div>
  `,
  styles: [`
    .theme-toggle {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      border-radius: 50%;
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