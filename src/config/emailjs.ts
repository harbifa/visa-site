// EmailJS Configuration
// يرجى تحديث هذه القيم بمعلوماتك الحقيقية من EmailJS

export const emailConfig = {
  // Service ID - يمكنك الحصول عليه من https://dashboard.emailjs.com/admin
  serviceId: 'service_z43scyh', // Service ID الجديد للحساب shawamek.contact@gmail.com
  
  // Template IDs - يمكنك إنشاؤها من https://dashboard.emailjs.com/admin/templates
  assessmentTemplateId: 'template_up4vfe6', // قالب طلبات التقييم والخدمات (الأصلي)
  contactTemplateId: 'template_tjq0bm4', // قالب التواصل العام ✅
  
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

📋 القوالب (Templates):
1️⃣ Assessment Template (template_up4vfe6): لطلبات التقييم وخدمات الهجرة
2️⃣ Contact Template (template_tjq0bm4): للتواصل العام والاستفسارات ✅

🌟 مميزات هذا الإعداد:
- احترافي ويتماشى مع هوية الشركة
- واضح أنه خاص بنماذج الاتصال
- لا يسبب التباس مع الحسابات الأخرى
- حل مشكلة إلغاء تكرار Gmail نهائياً
- تفريق بين أنواع الرسائل المختلفة

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

3. أنشئ القالب الأول (Assessment Template - template_up4vfe6):
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

4. أنشئ القالب الثاني (Contact Template - template_contact_msg):
Subject: General Inquiry from {{from_name}} - Shawamek Immigration

Hello Shawamek Immigration Team,

A new general inquiry has been received from the Contact Us page:

👤 Contact Information:
─────────────────────────────
Full Name: {{from_name}}
Email Address: {{from_email}}
Phone Number: {{phone}}
Subject: {{inquiry_subject}}

💬 Message:
{{message}}

📅 Inquiry Date and Time:
{{date}} at {{time}}

─────────────────────────────
This is a general inquiry/question/complaint. Please respond accordingly.

Automatically sent from Shawamek Immigration Contact Form.

5. احصل على Service ID و Template IDs و Public Key
6. حدث القيم في هذا الملف
7. تأكد من تحديث استيراد هذا الملف في الصفحات المناسبة
*/ 