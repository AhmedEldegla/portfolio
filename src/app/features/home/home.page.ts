import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container hero section">
      <p class="eyebrow">Available for opportunities</p>
      <h1>Ahmed Eldegla</h1>
      <p class="lead">.NET backend developer crafting secure APIs and scalable systems.</p>
      <div class="hero-actions">
        <a class="btn" routerLink="/projects">View Projects</a>
        <a class="btn btn-secondary" routerLink="/contact">Contact Me</a>
      </div>
    </section>
  `,
})
export class HomePageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(
      'Ahmed Eldegla | Backend Developer',
      'Premium Angular portfolio for Ahmed Eldegla, .NET backend developer.',
    );
  }
}
