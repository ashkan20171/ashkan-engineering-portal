import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServiceItem } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private readonly services: ServiceItem[] = [
    {
      id: 1,
      slug: 'structural-design',
      title: 'طراحی و محاسبات سازه',
      icon: 'architecture',
      description: 'طراحی سازه‌های بتنی، فولادی و صنعتی با استفاده از جدیدترین نرم‌افزارهای مهندسی و منطبق بر آخرین ویرایش مقررات ملی ساختمان.',
      features: ['تحلیل دینامیکی و خطی/غیرخطی', 'ارائه دفترچه محاسبات تاییدیه نظام مهندسی', 'بهینه‌سازی مصرف میلگرد و آهن‌آلات'],
      image: '/assets/images/1.jpg'
    },
    {
      id: 2,
      slug: 'construction-supervision',
      title: 'نظارت و مدیریت پیمان',
      icon: 'engineering',
      description: 'مدیریت اجرایی پروژه‌ها، برنامه‌ریزی دقیق زمانی، کنترل هزینه و نظارت کیفی مستمر توسط مهندسین مجرب نظام مهندسی.',
      features: ['کنترل کیفی مصالح و تست‌های بتن/جوش', 'مدیریت زمانبندی و کنترل پروژه (MSP)', 'شفافیت مالی و قراردادهای مدیریت طرح'],
      image: '/assets/images/betonriz.jpg'
    },
    {
      id: 3,
      slug: 'demolition-excavation',
      title: 'تخریب اصولی و گودبرداری',
      icon: 'construction',
      description: 'اجرای ایمن عملیات تخریب با ماشین‌آلات پیشرفته، پایدارسازی گود (نیلینگ، انکراژ و سازه نگهبان خرپایی) با پایش لحظه‌ای.',
      features: ['رعایت کامل ضوابط HSE و ایمنی', 'پایدارسازی تخصصی گودهای عمیق', 'بازیافت و مدیریت نخاله‌های ساختمانی'],
      image: '/assets/images/takhrib.jpg'
    },
    {
      id: 4,
      slug: 'remodeling-interior',
      title: 'بازسازی و معماری داخلی',
      icon: 'format_paint',
      description: 'بهسازی، تغییر کاربری و بازسازی کامل فضاهای مسکونی و اداری، طراحی دکوراسیون داخلی سه‌بعدی و اجرای متریال‌های لوکس.',
      features: ['رندرهای سه‌بعدی پیش از اجرا (3Ds Max / V-Ray)', 'اجرای کناف، کفپوش، لاین نوری و کابینت', 'نوسازی کامل تأسیسات مکانیکی و برقی'],
      image: '/assets/images/modern.jpg'
    }
  ];

  getServices(): Observable<ServiceItem[]> {
    return of(this.services);
  }
}
