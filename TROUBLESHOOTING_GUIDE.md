# دليل حل مشاكل EmailJS - Troubleshooting Guide

## المشاكل الشائعة وحلولها

### 1. المشكلة: الرسالة تظهر 3 مرات في Console
**السبب:** النموذج يتم إرساله عدة مرات
**الحل:** ✅ تم إصلاحه - أضفنا منع الإرسال المتكرر

### 2. المشكلة: لا تظهر رسالة نجاح أو فشل
**الأسباب المحتملة:**
- مشكلة في التكوين
- مهلة زمنية منتهية (timeout)
- خطأ صامت

**التشخيص:**
1. افتح Console (F12)
2. أرسل النموذج
3. ابحث عن هذه الرسائل:

```
=== Starting email submission ===
Configuration check passed
Sending email with params: {...}
Using EmailJS config: {...}
✅ Email sent successfully: {...}
=== Email submission completed ===
```

### 3. رسائل الخطأ الشائعة وحلولها

#### `400 Bad Request`
- **السبب:** خطأ في البيانات المرسلة
- **الحل:** تحقق من أن أسماء المتغيرات في القالب تطابق البيانات المرسلة

#### `401 Unauthorized`
- **السبب:** Public Key خاطئ
- **الحل:** تحقق من Public Key في EmailJS Dashboard

#### `404 Not Found`
- **السبب:** Service ID أو Template ID خاطئ
- **الحل:** تحقق من الـ IDs في EmailJS Dashboard

#### `Email sending timeout`
- **السبب:** استغرق الإرسال أكثر من 10 ثوانٍ
- **الحل:** تحقق من اتصال الإنترنت أو حالة خوادم EmailJS

### 4. خطوات التشخيص المتقدم

#### الخطوة 1: تحقق من التكوين
```javascript
// ستظهر في Console
Using EmailJS config: {
  serviceId: "service_xxx",
  templateId: "template_xxx", 
  publicKeyLength: 21  // يجب أن يكون حوالي 17-21 حرف
}
```

#### الخطوة 2: تحقق من البيانات المرسلة
```javascript
// ستظهر في Console
Sending email with params: {
  from_name: "اسم المستخدم",
  from_email: "email@example.com",
  phone: "رقم الهاتف",
  country: "البلد",
  visa_type: "نوع التأشيرة",
  message: "الرسالة",
  to_email: "info@shawmekimmigration.com",
  date: "تاريخ",
  time: "وقت"
}
```

#### الخطوة 3: تحقق من استجابة EmailJS
```javascript
// إذا نجح الإرسال ستظهر:
✅ Email sent successfully: {status: 200, text: "OK"}

// إذا فشل الإرسال ستظهر:
❌ Error sending email: {message: "وصف الخطأ"}
```

### 5. اختبار سريع

إذا لم تعمل الأمور، جرب هذا القالب المبسط في EmailJS:

**Subject:** `Test Email`

**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
```

### 6. التحقق من حالة EmailJS

1. اذهب إلى [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. تحقق من أن الخدمة متصلة وتعمل
3. تحقق من أن القالب موجود ومفعّل
4. جرب إرسال بريد تجريبي من لوحة التحكم

### 7. معلومات إضافية مفيدة

- **الحد الأقصى للرسائل المجانية:** 200 رسالة شهرياً
- **أفضل خدمة بريد:** Gmail
- **التحقق من الرسائل:** تحقق من مجلد Spam أيضاً

### 8. إذا استمرت المشكلة

إذا لم تعمل الحلول أعلاه:

1. أرسل لي نسخة من رسائل Console كاملة
2. تحقق من أن جميع المعرفات (IDs) صحيحة
3. جرب إنشاء service وtemplate جديدين
4. تحقق من أن البريد الإلكتروني المرسل إليه صحيح 