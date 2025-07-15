# إعداد المفاتيح الحقيقية لمُيسر بشكل آمن

## 🔒 الخطوات الآمنة لإعداد المفاتيح:

### 1. إنشاء ملف `.env` (محلي فقط):
```bash
# في المجلد الرئيسي للمشروع
touch .env
```

### 2. إضافة المفاتيح الحقيقية في `.env`:
```env
# Environment Configuration
VITE_PAYMENT_ENV=production

# Moyasar Live Keys (استبدل بالمفاتيح الحقيقية)
VITE_MOYASAR_PUBLISHABLE_KEY=pk_live_YOUR_ACTUAL_PUBLISHABLE_KEY
VITE_MOYASAR_SECRET_KEY=sk_live_YOUR_ACTUAL_SECRET_KEY

# Webhook Secret (اختياري)
VITE_MOYASAR_WEBHOOK_SECRET=your_webhook_secret_here

# Base URL
VITE_BASE_URL=https://your-domain.com
```

### 3. التحقق من أن `.env` محجوب في Git:
✅ `.env` موجود في `.gitignore` - آمن!

### 4. اختبار المفاتيح:
1. احفظ المفاتيح في `.env`
2. شغل المشروع: `npm run dev`
3. اذهب إلى صفحة الدفع
4. ستظهر "بيئة إنتاج" بدلاً من "بيئة تجريبية"

## 🧪 للعودة للاختبار:
```env
VITE_PAYMENT_ENV=sandbox
# أو احذف السطر نهائياً
```

## 🔐 أمان المفاتيح:
- ✅ لا تشارك المفاتيح مع الذكاء الاصطناعي
- ✅ لا تدفع `.env` إلى Git
- ✅ استخدم متغيرات البيئة في الاستضافة
- ✅ احتفظ بنسخة احتياطية آمنة

## 📋 فحص سريع:
بعد حفظ المفاتيح، في صفحة الدفع ستجد:
- "🏭 بيئة إنتاج" بدلاً من "🧪 بيئة تجريبية"
- المفاتيح تبدأ بـ `pk_live_` و `sk_live_`

---
**مهم:** لا تشارك محتوى ملف `.env` مع أي شخص! 