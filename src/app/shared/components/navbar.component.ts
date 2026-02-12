import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="nav-wrap">
      <nav class="container nav" aria-label="Main navigation">
        <a routerLink="/" class="brand">Ahmed <span>Eldegla</span></a>
        <ul class="links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
          <li><a routerLink="/skills" routerLinkActive="active">Skills</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
        <button class="theme-btn" (click)="theme.toggleTheme()" type="button" aria-label="Toggle color theme">
          {{ theme.theme() === 'dark' ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </nav>
    </header>
  `,
})
export class NavbarComponent {
  readonly theme = inject(ThemeService);
}
