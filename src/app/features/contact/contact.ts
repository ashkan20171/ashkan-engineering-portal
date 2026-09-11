import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContactService } from '../../core/services/contact.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly seo = inject(SeoService);

  readonly contactForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(/^09[0-9]{9}$/)]],
    email: ['', [Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(15)]]
  });

  readonly isSubmitting = signal<boolean>(false);
  readonly submissionStatus = signal<'idle' | 'success' | 'error'>('idle');
  readonly statusMessage = signal<string>('');

  ngOnInit(): void {
    this.seo.setTags({
      title: 'تماس با ما و دریافت مشاوره',
      description: 'راه‌های ارتباطی با شرکت فنی مهندسی اشکان، آدرس دفتر مرکزی، شماره تماس و فرم استعلام آنلاین پروژه.',
      keywords: 'تماس با شرکت مهندسی اشکان, استعلام قیمت ساخت, مشاوره سازه'
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    this.submissionStatus.set('idle');
    this.statusMessage.set('');

    this.contactService.sendMessage(this.contactForm.getRawValue()).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.submissionStatus.set('success');
        this.statusMessage.set(response?.message || 'پیام شما با موفقیت ارسال شد.');
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting.set(false);
        this.submissionStatus.set('error');
        this.statusMessage.set('خطایی در برقراری ارتباط رخ داد. لطفاً با تلفن دفتر تماس حاصل فرمایید.');
      }
    });
  }
}
