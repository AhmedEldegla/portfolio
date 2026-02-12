import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../../core/services/projects.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="container section">
      <h2>Projects</h2>
      <div class="cards">
        <article class="card" *ngFor="let project of projectsService.getProjects()">
          <h3>{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
          <ul class="tags">
            <li *ngFor="let tag of project.stack">{{ tag }}</li>
          </ul>
          <div class="card-actions">
            <a [href]="project.githubUrl" target="_blank" rel="noreferrer">GitHub</a>
            <a *ngIf="project.liveUrl" [href]="project.liveUrl" target="_blank" rel="noreferrer">Live</a>
          </div>
        </article>
      </div>
    </section>
  `,
})
export class ProjectsPageComponent {
  readonly projectsService = inject(ProjectsService);
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update('Projects | Ahmed Eldegla', 'Selected projects and case studies.', 'projects');
  }
}
