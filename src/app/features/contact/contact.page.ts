import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template: `
    <section class="container section">
      <h2>Contact</h2>
      <p>Use this form (validated client-side). For production, use a serverless endpoint (Netlify/Vercel) with env secrets.</p>
      <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <label>
          Name
          <input formControlName="name" />
        </label>
        <label>
          Email
          <input type="email" formControlName="email" />
        </label>
        <label>
          Message
          <textarea formControlName="message" rows="5"></textarea>
        </label>
        <button class="btn" type="submit" [disabled]="form.invalid">Send</button>
      </form>
      <p *ngIf="sent" class="success">Thanks! I will reply soon.</p>
    </section>
  `,
})
export class ContactPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly seo = inject(SeoService);
  sent = false;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor() {
    this.seo.update('Contact | Ahmed Eldegla', 'Get in touch for backend engineering opportunities.', 'contact');
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent = true;
    this.form.reset();
  }
}
