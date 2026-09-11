import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ProjectService, Project } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements OnInit {
  private projectService = inject(ProjectService);
  private seo = inject(SeoService);

  // سیگنال نگهداری لیست کل پروژه‌ها
  projects = signal<Project[]>([]);

  // دسته‌بندی انتخاب شده برای فیلتر
  selectedCategory = signal<string>('all');

  // پروژه‌های فیلتر شده به شکل داینامیک و واکنشی با Signal Computed
  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    const all = this.projects();

    if (category === 'all') {
      return all;
    }
    return all.filter(p => p.category === category);
  });

  ngOnInit(): void {
    // تنظیم متاتگ‌های سئو برای صفحه نمونه‌کارها
    this.seo.setTags({
      title: 'پروژه‌ها و نمونه‌کارهای اجرایی',
      description: 'مشاهده پروژه‌های عمرانی، اسکلت بتنی، سازه‌های فلزی، پایدارسازی گود و ساختمان‌های مدرن اجرا شده توسط شرکت فنی مهندسی اشکان.',
      keywords: 'پروژه‌های عمرانی اشکان, نمونه کار اسکلت بتنی, اجرای سازه فولادی, گودبرداری تهران'
    });

    // دریافت داده‌ها از سرویس
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects.set(data);
      },
      error: (err) => {
        console.error('خطا در بارگذاری پروژه‌ها:', err);
      }
    });
  }

  // متد تغییر دسته‌بندی در تب‌ها
  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  // مدیریت خطای احتمالی در لود تصاویر
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/images/project1.jpg';
  }
}
