import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly fallbackImage = '/assets/images/coverservice.png';

  services: ServiceItem[] = [
    {
      id: 'concrete',
      title: 'بتن‌ریزی و اسکلت بتنی',
      description:
        'اجرای دقیق فونداسیون، سقف و ستون با جدیدترین استانداردهای آیین‌نامه بتن ایران.',
      icon: 'architecture',
      image: '/assets/images/betonriz.jpg',
    },
    {
      id: 'scaffolding',
      title: 'داربست و سازه‌های موقت',
      description:
        'طراحی، نصب و ایمن‌سازی سازه‌های دسترسی و داربست‌های پروژه‌های مرتفع و صنعتی.',
      icon: 'construction',
      image: '/assets/images/darbast.jpg',
    },
    {
      id: 'renovation',
      title: 'تخریب، بهسازی و بازسازی',
      description:
        'اجرای عملیات تخریب ایمن، مقاوم‌سازی سازه‌ها و نوسازی کامل فضاهای تجاری و مسکونی.',
      icon: 'handyman',
      image: '/assets/images/takhrib.jpg',
    },
    {
      id: 'design',
      title: 'طراحی معماری و سازه',
      description:
        'مدلسازی BIM، نقشه‌کشی فاز ۱ و ۲ و محاسبات دقیق سازه‌ای بر پایه بهینه‌سازی هزینه.',
      icon: 'design_services',
      image: '/assets/images/modern.jpg',
    },
  ];

  projects: ProjectItem[] = [
    {
      id: 'project-1',
      title: 'اجرای اسکلت و سازه بتنی',
      category: 'اسکلت بتنی',
      description:
        'اجرای فونداسیون، ستون‌ها و سقف با نظارت فنی و کنترل کیفیت مرحله‌به‌مرحله.',
      image: '/assets/images/project1.jpg',
    },
    {
      id: 'project-2',
      title: 'بازسازی ساختمان مسکونی',
      category: 'بازسازی',
      description:
        'بازطراحی و اجرای فضای داخلی ساختمان با تمرکز بر کیفیت، زیبایی و استفاده بهینه از فضا.',
      image: '/assets/images/project2.jpg',
    },
    {
      id: 'project-3',
      title: 'اجرای داربست پروژه مرتفع',
      category: 'داربست و سازه موقت',
      description:
        'طراحی و اجرای داربست ایمن برای عملیات نما و دسترسی در ارتفاع.',
      image: '/assets/images/project3.jpg',
    },
    {
      id: 'project-4',
      title: 'طراحی و اجرای ساختمان تجاری',
      category: 'طراحی و اجرا',
      description:
        'ارائه خدمات طراحی معماری، محاسبات سازه و اجرای پروژه تا مرحله تحویل.',
      image: '/assets/images/project4.jpg',
    },
    {
      id: 'project-5',
      title: 'بهسازی و مقاوم‌سازی سازه',
      category: 'مقاوم‌سازی',
      description:
        'ارزیابی وضعیت سازه و اجرای راهکارهای فنی برای افزایش دوام و ایمنی ساختمان.',
      image: '/assets/images/project5.jpg',
    },
  ];

  onImageError(event: Event): void {
    const image = event.target as HTMLImageElement;

    if (image.src.endsWith(this.fallbackImage)) {
      return;
    }

    image.src = this.fallbackImage;
  }
}
