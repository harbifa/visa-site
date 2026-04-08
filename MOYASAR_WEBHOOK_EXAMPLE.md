# مثال عملي لتكوين Webhook في ميسر

## 📋 ملء الحقول في ميسر

### 🔗 Webhook Endpoint URL
```
https://shawmekimmigration.com/payment/callback
```
**تغيير مطلوب**: استبدل `shawmekimmigration.com` بدومين موقعك الفعلي

### 🔐 Secret Token
```
daf0ffb0d8564dd9b720850a054cade3
```
**لا تغيير مطلوب**: استخدم هذا الـ token بالضبط

### 📡 HTTP Method
اختر: **POST**

### 🎯 Payment Events
اختر هذه الأحداث:
- ✅ **PAYMENT_PAID** (الدفع تم بنجاح)
- ✅ **PAYMENT_FAILED** (الدفع فشل)
- ✅ **PAYMENT_AUTHORIZED** (الدفع مصرح)
- ✅ **PAYMENT_VOIDED** (الدفع ملغي)

## 📝 ملف .env المطلوب

أضف هذا السطر إلى ملف `.env`:
```env
VITE_MOYASAR_WEBHOOK_SECRET=daf0ffb0d8564dd9b720850a054cade3
```

## ✅ مثال كامل للإعدادات

```
Webhook Endpoint URL: https://your-domain.com/payment/callback
Secret Token: daf0ffb0d8564dd9b720850a054cade3
HTTP Method: POST
Payment Events: PAYMENT_PAID, PAYMENT_FAILED, PAYMENT_AUTHORIZED, PAYMENT_VOIDED
```

## 🚀 اختبار الإعدادات

بعد الحفظ، يمكنك اختبار الإعدادات من خلال:
1. إجراء دفعة تجريبية
2. التحقق من وصول الإشعارات إلى `/payment/callback`
3. التأكد من عدم وجود أخطاء في console المتصفح

## 📞 الدعم الفني

إذا واجهت أي مشاكل، تواصل مع:
- دعم ميسر: [support@moyasar.com](mailto:support@moyasar.com)
- الوثائق: [moyasar.com/docs](https://moyasar.com/docs) 