import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  team: TeamMember[] = [
    {
      name: 'مهندس اشکان مطاعی',
      role: 'مدیر ارشد مهندسی و سرپرست پروژه',
      image: 'assets/images/5.jpg',
      bio: 'متخصص نظارت، برنامه‌ریزی پروژه‌های عمرانی و فناوری‌های نوین مهندسی'
    },
    {
      name: 'مهندس مهدی شرافت',
      role: 'سرپرست طراحی و نقشه‌کشی سازه',
      image: 'assets/images/1.jpg',
      bio: 'طراح سازه‌های فولادی و بتنی، مدل‌سازی سه‌بعدی و تحلیل پیشرفته'
    },
    {
      name: 'مهندس امید ثریایی نیکو',
      role: 'مدیر اجرایی و سرپرست کارگاه',
      image: 'assets/images/3.jpg',
      bio: 'بیش از ۱۵ سال سابقه اجرایی در گودبرداری، اسکلت و بازسازی سازه‌ها'
    }
  ];

  stats = [
    { value: '+۱۵۰', label: 'پروژه موفق' },
    { value: '+۱۲', label: 'سال تجربه' },
    { value: '+۴۰', label: 'مهندس و متخصص' },
    { value: '۱۰۰٪', label: 'رضایت کارفرمایان' }
  ];
}
