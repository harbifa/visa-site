# ⚡ إعداد Webhook سريع

## 📋 املأ الحقول في ميسر:

### 1. **Webhook Endpoint URL**
```
https://shawmekimmigration.com/payment/callback
```
⚠️ **استبدل** `shawmekimmigration.com` بدومين موقعك

### 2. **Secret Token**
```
daf0ffb0d8564dd9b720850a054cade3
```
✅ **لا تغير** - استخدم هذا النص بالضبط

### 3. **HTTP Method**
اختر: **POST**

### 4. **Payment Events**
اختر هذه الأحداث:
- ✅ PAYMENT_PAID
- ✅ PAYMENT_FAILED  
- ✅ PAYMENT_AUTHORIZED
- ✅ PAYMENT_VOIDED

### 5. **اضغط Submit**

## 📝 أضف إلى ملف .env:

```env
VITE_MOYASAR_WEBHOOK_SECRET=daf0ffb0d8564dd9b720850a054cade3
```

## ✅ انتهى!

بعد هذه الخطوات سيعمل الـ webhook بشكل صحيح. 