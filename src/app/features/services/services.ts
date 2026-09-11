import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  icon: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: ServiceItem[] = [
    {
      id: 'concrete',
      title: 'بتن‌ریزی و اسکلت بتنی',
      shortTitle: 'اسکلت بتنی',
      description:
        'اجرای اصولی فونداسیون، ستون، تیر و سقف با رعایت استانداردهای فنی و کنترل کیفیت.',
      details: [
        'اجرای فونداسیون و پی ساختمان',
        'اجرای ستون‌ها و تیرهای بتنی',
        'اجرای انواع سقف',
        'کنترل کیفیت مصالح و عملیات اجرایی',
      ],
      icon: 'architecture',
      image: '/assets/images/betonriz.jpg',
    },
    {
      id: 'scaffolding',
      title: 'داربست و سازه‌های موقت',
      shortTitle: 'داربست',
      description:
        'طراحی، نصب و ایمن‌سازی داربست برای پروژه‌های ساختمانی، نما و عملیات صنعتی.',
      details: [
        'بازدید و بررسی محل پروژه',
        'طراحی سازه دسترسی',
        'نصب و جمع‌آوری داربست',
        'بازرسی و ایمن‌سازی دوره‌ای',
      ],
      icon: 'construction',
      image: '/assets/images/darbast.jpg',
    },
    {
      id: 'renovation',
      title: 'تخریب، بهسازی و بازسازی',
      shortTitle: 'بازسازی',
      description:
        'اجرای تخریب کنترل‌شده، مقاوم‌سازی و بازسازی فضاهای مسکونی، اداری و تجاری.',
      details: [
        'تخریب ایمن و مرحله‌ای',
        'بازسازی داخلی و خارجی',
        'مقاوم‌سازی اجزای سازه‌ای',
        'مدیریت نخاله و پاک‌سازی کارگاه',
      ],
      icon: 'handyman',
      image: '/assets/images/takhrib.jpg',
    },
    {
      id: 'design',
      title: 'طراحی معماری و سازه',
      shortTitle: 'طراحی',
      description:
        'ارائه خدمات طراحی معماری و سازه از مرحله ایده‌پردازی تا تهیه نقشه‌های اجرایی.',
      details: [
        'طراحی معماری فاز یک و دو',
        'محاسبات و طراحی سازه',
        'تهیه نقشه‌های اجرایی',
        'مدلسازی و هماهنگی پروژه',
      ],
      icon: 'design_services',
      image: '/assets/images/modern.jpg',
    },
  ];

  onImageError(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = '/assets/images/coverservice.png';
  }
}
