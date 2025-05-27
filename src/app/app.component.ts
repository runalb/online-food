import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OnlineFood';

  constructor(private router: Router) {}
 

  toggleCart() {
    if (this.router.url === '/cart') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/cart']);
    }
  }
}
