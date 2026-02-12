import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePageComponent),
    title: 'Home | Ahmed Eldegla',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.page').then((m) => m.AboutPageComponent),
    title: 'About | Ahmed Eldegla',
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.page').then((m) => m.ProjectsPageComponent),
    title: 'Projects | Ahmed Eldegla',
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills.page').then((m) => m.SkillsPageComponent),
    title: 'Skills | Ahmed Eldegla',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.page').then((m) => m.ContactPageComponent),
    title: 'Contact | Ahmed Eldegla',
  },
  { path: '**', redirectTo: '' },
];
