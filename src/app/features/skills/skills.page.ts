import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="container section">
      <h2>Skills</h2>
      <ul class="tags">
        <li *ngFor="let skill of skills">{{ skill }}</li>
      </ul>
    </section>
  `,
})
export class SkillsPageComponent {
  readonly skills = ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Docker', 'Angular', 'Git'];
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update('Skills | Ahmed Eldegla', 'Backend, frontend and DevOps skillset.', 'skills');
  }
}
