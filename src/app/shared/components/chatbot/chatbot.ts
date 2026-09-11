import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot {
  isOpen = signal<boolean>(false);
  isTyping = signal<boolean>(false);
  userInput = signal<string>('');

  quickSuggestions: string[] = [
    'تعرفه و هزینه خدمات مهندسی',
    'نحوه عقد قرارداد نظارت و اجرا',
    'مشاوره طراحی و بازسازی سازه',
    'اطلاعات تماس مستقیم با کارشناسان'
  ];

  messages = signal<ChatMessage[]>([
    {
      sender: 'bot',
      text: 'درود! 👋 من دستیار هوشمند شرکت مهندسی اشکان هستم. چطور می‌توانم در زمینه پروژه‌های ساختمانی، طراحی و نظارت به شما کمک کنم؟',
      time: this.getCurrentTime()
    }
  ]);

  toggleChat(): void {
    this.isOpen.update(val => !val);
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
  }

  sendMessage(text?: string): void {
    const msgToSend = (text || this.userInput()).trim();
    if (!msgToSend) return;

    // اضافه کردن پیام کاربر
    this.messages.update(msgs => [
      ...msgs,
      { sender: 'user', text: msgToSend, time: this.getCurrentTime() }
    ]);
    this.userInput.set('');
    this.isTyping.set(true);

    // پاسخ شبیه‌سازی شده و هوشمند
    setTimeout(() => {
      const reply = this.generateBotResponse(msgToSend);
      this.messages.update(msgs => [
        ...msgs,
        { sender: 'bot', text: reply, time: this.getCurrentTime() }
      ]);
      this.isTyping.set(false);
    }, 900);
  }

  private generateBotResponse(input: string): string {
    const q = input.toLowerCase();

    if (q.includes('هزینه') || q.includes('قیمت') || q.includes('تعرفه')) {
      return 'برآورد هزینه‌ها به متراژ، نوع سازه (بتنی/فلزی) و نوع خدمات (طراحی، نظارت یا اجرا) بستگی دارد. شما می‌توانید با ارسال مشخصات اولیه در فرم تماس یا تماس با شماره ۰۲۱-۸۸۸۸۸۸۸۸ پیش‌فاکتور دقیق دریافت فرمایید.';
    }
    if (q.includes('قرارداد') || q.includes('نظارت') || q.includes('اجرا')) {
      return 'تیم مهندسی اشکان تمامی خدمات نظارت عالیه، اجرای اسکلت و بازسازی را مطابق مباحث مقررات ملی ساختمان و با قرارداد رسمی ارائه می‌دهد.';
    }
    if (q.includes('بازسازی') || q.includes('طراحی') || q.includes('نقشه')) {
      return 'طراحی معماری، سازه و تاسیسات به همراه مدل‌سازی سه‌بعدی و بازسازی تخصصی اداری/مسکونی از خدمات اصلی ماست. بخش «خدمات» سایت را برای اطلاعات بیشتر ملاحظه فرمایید.';
    }
    if (q.includes('تماس') || q.includes('شماره') || q.includes('آدرس')) {
      return 'دفتر مرکزی: پرند بلوار ابن سینا فاز 4 مسکن میثم نهاجا| تلفن: ۰۲۱-۸۸۸۸۸۸۸۸ (شنبه تا چهارشنبه ۸ الی ۱۷)';
    }

    return 'پیام شما دریافت شد. کارشناسان فنی ما در کوتاه‌ترین زمان درخواست شما را بررسی خواهند کرد. در صورت نیاز به مشاوره فوری با شماره ۰۲۱-۸۸۸۸۸۸۸۸ تماس حاصل فرمایید.';
  }
}
