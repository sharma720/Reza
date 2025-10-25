# مدرسه - نسخه بازنویسی‌شده

این پروژه یک قالب پایه **Vite + React + TypeScript** است که از روی فایل ارسالی شما بازنویسی و مرتب شده تا آماده‌ی بارگذاری در **GitHub** و استقرار در **Vercel** باشد.

## اجرا در لوکال
```bash
npm install
npm run dev
```

## ساخت برای تولید (Production)
```bash
npm run build
npm run preview
```

## نکات برای آپلود در GitHub و استقرار در Vercel
- یک مخزن جدید در GitHub بسازید و تمام فایل‌های این پوشه را commit و push کنید.
- در Vercel گزینه‌ی "Import Project" -> GitHub -> انتخاب مخزن را بزنید.
- در تنظیمات Build command از `npm run build` و Output Directory برابر `dist` استفاده کنید.
- اگر از متغیر محیطی استفاده می‌کنید، آنها را در تنظیمات Vercel اضافه کنید.
