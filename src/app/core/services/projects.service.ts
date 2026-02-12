import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      title: 'Clinic Management API',
      summary: 'High-performance .NET API for appointments, doctors, and patient workflows.',
      stack: ['.NET', 'SQL Server', 'Docker', 'Clean Architecture'],
      githubUrl: 'https://github.com/AhmedEldegla',
      featured: true,
    },
    {
      title: 'Portfolio v2',
      summary: 'Angular migration with route-level SEO, modern theme system, and accessibility-first UI.',
      stack: ['Angular', 'TypeScript', 'SCSS'],
      githubUrl: 'https://github.com/AhmedEldegla/portfolio',
      liveUrl: 'https://ahmedeldegla.github.io/portfolio/',
      featured: true,
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
