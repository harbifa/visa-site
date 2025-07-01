// EmailJS Configuration
// يرجى تحديث هذه القيم بمعلوماتك الحقيقية من EmailJS

export const emailConfig = {
  // Service ID - يمكنك الحصول عليه من https://dashboard.emailjs.com/admin
  serviceId: 'service_z43scyh', // Service ID الجديد للحساب shawamek.contact@gmail.com
  
  // Template ID - يمكنك إنشاؤه من https://dashboard.emailjs.com/admin/templates
  templateId: 'template_up4vfe6', // استبدل بـ Template ID الخاص بك
  
  // Public Key - يمكنك الحصول عليه من https://dashboard.emailjs.com/admin/account
  publicKey: 'bKCF_TxAUQ6cR0Q_t' // استبدل بـ Public Key الخاص بك
};

/*
📧 إعداد البريد المرسل: shawamek.contact@gmail.com

✅ تم الإعداد بنجاح!
- Service ID: service_z43scyh
- المرسل: shawamek.contact@gmail.com
- المستقبل: info@shawmekimmigration.com  
- Cloudflare يوجه إلى: shawamek.immigration@gmail.com

🌟 مميزات هذا الإعداد:
- احترافي ويتماشى مع هوية الشركة
- واضح أنه خاص بنماذج الاتصال
- لا يسبب التباس مع الحسابات الأخرى
- حل مشكلة إلغاء تكرار Gmail نهائياً

🧪 جاهز للاختبار!
النظام الآن جاهز للعمل بشكل كامل.

🔧 إصلاح مشكلة ألوان النص في Footer:
استبدل هذا الجزء في Footer:

<!-- OLD CODE -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td style="text-align: center; padding: 10px 0;">
            <span style="color: #ffffff; font-size: 14px; margin: 0 15px;">
                📧 info@shawmekimmigration.com
            </span>
            <span style="color: #ffffff; font-size: 14px; margin: 0 15px;">
                🌐 www.shawmekimmigration.com
            </span>
        </td>
    </tr>
</table>

<!-- NEW CORRECTED CODE -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td style="text-align: center; padding: 10px 0; color: #ffffff; font-size: 14px;">
            <font color="#ffffff" style="font-size: 14px;">
                📧 info@shawmekimmigration.com
            </font>
            <br><br>
            <font color="#ffffff" style="font-size: 14px;">
                🌐 www.shawmekimmigration.com
            </font>
        </td>
    </tr>
</table>

خطوات إعداد EmailJS:

1. قم بإنشاء حساب مجاني على https://www.emailjs.com/
2. أضف خدمة البريد الإلكتروني (Gmail - shawamek.contact@gmail.com)
3. أنشئ قالب بريد إلكتروني بالمحتوى التالي:

Subject: New Assessment Request from {{from_name}} - Shawamek Immigration

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

4. احصل على Service ID و Template ID و Public Key
5. حدث القيم في هذا الملف
6. تأكد من تحديث استيراد هذا الملف في Home.tsx
*/ 