# دليل إعداد EmailJS لنموذج التقييم

## الخطوات المطلوبة:

### 1. إنشاء حساب EmailJS
- اذهب إلى [https://www.emailjs.com/](https://www.emailjs.com/)
- قم بإنشاء حساب مجاني

### 2. إضافة خدمة البريد الإلكتروني
- في لوحة التحكم، اذهب إلى "Email Services"
- اضغط على "Add New Service"
- اختر الخدمة المناسبة (Gmail موصى به)
- اتبع التعليمات لربط بريدك الإلكتروني
- احفظ الـ **Service ID**

### 3. إنشاء قالب البريد الإلكتروني
- اذهب إلى "Email Templates"
- اضغط على "Create New Template"
- استخدم القالب التالي:

#### عنوان الرسالة:
```
New Assessment Request from {{from_name}} - Shawamek Immigration
```

#### محتوى الرسالة:
```
Hello Shawamek Immigration Team,

A new assessment request has been received from the website:

📋 Client Information:
─────────────────────────────
Full Name: {{from_name}}
Email Address: {{from_email}}
Phone Number: {{phone}}
Destination Country: {{country}}
Visa Type Required: {{visa_type}}

💬 Additional Message from Client:
{{message}}

📅 Request Date and Time:
{{date}} at {{time}}

─────────────────────────────
Please contact the client as soon as possible.

Automatically sent from Shawamek Immigration electronic system.
```

- احفظ القالب واحتفظ بالـ **Template ID**

### 4. الحصول على المفتاح العام
- اذهب إلى "Account" في القائمة الجانبية
- في قسم "API Keys"، انسخ الـ **Public Key**

### 5. تحديث إعدادات الموقع
افتح ملف `src/config/emailjs.ts` وحدث القيم التالية:

```typescript
export const emailConfig = {
  serviceId: 'service_xxxxxxx', // ضع Service ID هنا
  templateId: 'template_xxxxxxx', // ضع Template ID هنا
  publicKey: 'your_public_key' // ضع Public Key هنا
};
```

### 6. اختبار النظام
- احفظ التغييرات وشغل الموقع
- املأ النموذج واضغط "Submit Assessment"
- تحقق من وصول الرسالة إلى info@shawmekimmigration.com

## ملاحظات مهمة:
- تأكد من أن البريد الإلكتروني info@shawmekimmigration.com هو نفسه المستخدم في إعداد EmailJS
- يمكنك إرسال 200 رسالة مجاناً شهرياً مع الحساب المجاني
- للحصول على إرسال أكثر، ستحتاج لترقية الحساب

## في حالة وجود مشاكل:
1. تحقق من صحة جميع المفاتيح في ملف التكوين
2. تأكد من أن القالب يتضمن جميع المتغيرات المطلوبة
3. تحقق من وحدة تحكم المتصفح لأي أخطاء
4. تأكد من أن الخدمة مفعلة ومتصلة بالبريد الإلكتروني الصحيح 