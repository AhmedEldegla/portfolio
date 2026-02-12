import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  standalone: true,
  template: `
    <section class="container section">
      <h2>About</h2>
      <p>
        I design backend systems with clean architecture principles, performance-minded SQL, and
        observability in production.
      </p>
    </section>
  `,
})
export class AboutPageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update('About | Ahmed Eldegla', 'Background and development philosophy.', 'about');
  }
}
