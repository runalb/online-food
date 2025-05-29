import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="color-picker">
      <label for="primaryColor" class="color-picker-label">
        <span class="material-icons">palette</span>
        <input 
          type="color" 
          id="primaryColor" 
          [(ngModel)]="selectedColor" 
          (change)="updatePrimaryColor()"
        >
      </label>
    </div>
  `,
  styles: [`
    .color-picker {
      display: flex;
      align-items: center;
    }

    .color-picker-label {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .material-icons {
      font-size: 24px;
      color: var(--on-primary);
      margin-right: 8px;
    }

    input[type="color"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    input[type="color"]:focus + .material-icons {
      outline: 2px solid  var(--on-primary);
      border-radius: 4px;
    }
  `]
})
export class ColorPickerComponent {
  selectedColor: string = '#c62828';

  constructor(private themeService: ThemeService) {
    // Load saved color from localStorage
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      this.selectedColor = savedColor;
      this.updatePrimaryColor();
    }
  }

  updatePrimaryColor() {
    document.documentElement.style.setProperty('--primary-color', this.selectedColor);
    localStorage.setItem('primaryColor', this.selectedColor);
  }
} 