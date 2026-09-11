import { Injectable, signal } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  quickReplies?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private messagesSignal = signal<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'سلام! به شرکت فنی مهندسی اشکان خوش آمدید. من دستیار هوشمند شما هستم. چطور می‌توانم در پروژه‌های ساختمانی و مهندسی به شما کمک کنم؟',
      timestamp: new Date(),
      quickReplies: [
        'برآورد هزینه ساخت',
        'خدمات تخریب و گودبرداری',
        'مشاوره اجرای اسکلت بتنی/فلزی',
        'ارتباط مستقیم با کارشناس'
      ]
    }
  ]);

  readonly messages = this.messagesSignal.asReadonly();

  sendMessage(text: string): Observable<ChatMessage> {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date()
    };
    
    this.messagesSignal.update(msgs => [...msgs, userMsg]);

    const botResponse = this.generateResponse(text);
    return of(botResponse).pipe(delay(600));
  }

  appendBotMessage(botMsg: ChatMessage): void {
    this.messagesSignal.update(msgs => [...msgs, botMsg]);
  }

  private generateResponse(userText: string): ChatMessage {
    const query = userText.toLowerCase().trim();
    let reply = '';
    let quickReplies: string[] | undefined;

    if (query.includes('هزینه') || query.includes('قیمت') || query.includes('برآورد')) {
      reply = 'هزینه اجرای پروژه به متراژ زیربنا، نوع اسکلت (بتنی یا فلزی)، موقعیت جغرافیایی و جنس زمین بستگی دارد. برای دریافت برآورد دقیق می‌توانید از فرم تماس یا شماره ۰۲۱-۰۰۰۰۰۰۰۰ اقدام بفرمایید.';
      quickReplies = ['خدمات طراحی و نظارت', 'فرم تماس با ما'];
    } else if (query.includes('اسکلت') || query.includes('بتن') || query.includes('فلزی')) {
      reply = 'شرکت ما دارای اکیپ‌های تخصصی اجرای انواع سازه‌های بتن‌آرمه، اسکلت فلزی پیچ و مهره یا جوشی همراه با کنترل کیفیت و آزمایش بتن می‌باشد.';
      quickReplies = ['مشاهده پروژه‌ها', 'استعلام قیمت'];
    } else if (query.includes('تخریب') || query.includes('گودبرداری')) {
      reply = 'خدمات تخریب ایمن، سازه نگهبان (نیلینگ و انکراژ) با بیمه کامل مسئولیت مدنی و رعایت ضوابط نظام مهندسی توسط کادر فنی اشکان انجام می‌شود.';
      quickReplies = ['درخواست بازدید کارشناس'];
    } else if (query.includes('کارشناس') || query.includes('تماس') || query.includes('تلفن')) {
      reply = 'جهت ارتباط مستقیم با مدیریت مهندسی می‌توانید با شماره ۰۹۱۲-۰۰۰۰۰۰۰ تماس بگیرید یا در فرم تماس شماره تماس خود را ثبت کنید تا در سریع‌ترین زمان با شما تماس بگیریم.';
    } else {
      reply = 'پیام شما دریافت شد. در صورتی که پرسش تخصصی دارید، لطفاً شماره تماس یا شرح مختصر پروژه خود را بنویسید تا کارشناسان ما با شما تماس حاصل فرمایند.';
      quickReplies = ['برآورد هزینه ساخت', 'خدمات شرکت', 'تماس با ما'];
    }

    return {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: reply,
      timestamp: new Date(),
      quickReplies
    };
  }
}
