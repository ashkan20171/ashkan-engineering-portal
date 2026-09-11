import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: string;
  title: string;
  category: 'concrete' | 'steel' | 'demolition' | 'commercial';
  categoryTitle: string;
  client: string;
  location: string;
  area: string; // متراژ
  year: string;
  status: 'تکمیل شده' | 'در حال اجرا';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsList: Project[] = [
    {
      id: 'prj-1',
      title: 'مجتمع مسکونی و تجاری نگین البرز',
      category: 'concrete',
      categoryTitle: 'اسکلت بتنی و سازه',
      client: 'بخش خصوصی',
      location: 'تهران، منطقه ۱',
      area: '۱۲,۵۰۰ مترمربع',
      year: '۱۴۰۲',
      status: 'تکمیل شده',
      image: 'assets/images/project1.jpg',
      gallery: ['assets/images/project1.jpg', 'assets/images/1.jpg', 'assets/images/betonriz.jpg'],
      description: 'طراحی، مدلسازی و اجرای کامل اسکلت بتن‌آرمه مقاوم در برابر زلزله با سیستم قاب خمشی ویژه و دیوار برشی، استفاده از بتن خودتراکم (SCC) و نظارت دقیق بر آزمایش‌های مقاومت فشاری.',
      features: ['اجرای ۱۲ سقف بتنی', 'آزمایشات غیرمخرب جوش و بتن', 'تحویل ۲ ماه پیش از موعد قرارداد']
    },
    {
      id: 'prj-2',
      title: 'سازه فلزی مجتمع اداری پارس',
      category: 'steel',
      categoryTitle: 'اسکلت فلزی و صنعتی',
      client: 'شرکت سرمایه‌گذاری پارس',
      location: 'کرج، شهرک صنعتی',
      area: '۸,۰۰۰ مترمربع',
      year: '۱۴۰۳',
      status: 'در حال اجرا',
      image: 'assets/images/project2.jpg',
      gallery: ['assets/images/project2.jpg', 'assets/images/2.jpg', 'assets/images/darbast.jpg'],
      description: 'ساخت و نصب استراکچر فلزی با اتصالات پیچ و مهره‌ای اصطکاکی با استاندارد AWS، رنگ‌آمیزی اپوکسی زینک‌ریچ و اجرای سقف‌های متال دک.',
      features: ['تولید صنعتی در کارخانه', 'اتصالات پیشرفته HSFG', 'پوشش ضدحریق']
    },
    {
      id: 'prj-3',
      title: 'عملیات تخریب، پایدارسازی و گودبرداری عمیق',
      category: 'demolition',
      categoryTitle: 'تخریب و گودبرداری',
      client: 'مهندسین مشاور آرمان',
      location: 'تهران، سعادت‌آباد',
      area: 'عمق ۲۴ متر (۳۵,۰۰۰ مترمکعب)',
      year: '۱۴۰۱',
      status: 'تکمیل شده',
      image: 'assets/images/project3.jpg',
      gallery: ['assets/images/project3.jpg', 'assets/images/takhrib.jpg', 'assets/images/3.jpg'],
      description: 'پایدارسازی جداره‌های گود با ترکیب روش نیلینگ (Nailing)، سولجرپایل و انکراژ به همراه مانیتورینگ دقیق و روزانه نشست سازه‌های مجاور.',
      features: ['ایمنی صددرصدی ساختمان‌های همجوار', 'ابزار دقیق ژئوتکنیکی', 'بیمه مسئولیت مهندسی']
    },
    {
      id: 'prj-4',
      title: 'برج مدرن مسکونی مهر',
      category: 'commercial',
      categoryTitle: 'ساختمان‌های مدرن',
      client: 'تعاونی مسکن',
      location: 'تهران، نیاوران',
      area: '۱۸,۰۰۰ مترمربع',
      year: '۱۴۰۳',
      status: 'در حال اجرا',
      image: 'assets/images/project4.jpg',
      gallery: ['assets/images/project4.jpg', 'assets/images/modern.jpg', 'assets/images/4.jpg'],
      description: 'اجرای صفر تا صد سفت‌کاری و نازک‌کاری پروژه لوکس مسکونی با معماری مدرن، استفاده از سیستم‌های هوشمند مدیریت مصرف انرژی و متریال‌های پایدار.',
      features: ['طراحی بهینه سازه', 'سیستم عایق صوتی و حرارتی پیشرفته', 'روف‌گاردن اختصاصی']
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projectsList);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projectsList.find(p => p.id === id);
    return of(project);
  }
}
