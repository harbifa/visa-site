# استكشاف أخطاء الدفع

## 🔍 المشكلة: "فشل في الاتصال بخدمة الدفع"

### الأسباب الشائعة والحلول:

## 1️⃣ **مفاتيح API غير صحيحة**

### المشكلة:
- مفاتيح ميسر غير محدثة في ملف `.env`
- استخدام مفاتيح sandbox بدلاً من الإنتاج

### الحل:
```bash
# تأكد من ملف .env:
VITE_PAYMENT_ENV=production
VITE_MOYASAR_PUBLISHABLE_KEY=pk_live_xxxxxxxxx  # مفتاح حقيقي من ميسر
VITE_MOYASAR_SECRET_KEY=sk_live_xxxxxxxxx       # مفتاح حقيقي من ميسر
VITE_MOYASAR_WEBHOOK_SECRET=daf0ffb0d8564dd9b720850a054cade3
```

## 2️⃣ **للاختبار السريع - استخدم Sandbox**

### إنشاء ملف .env للاختبار:
```env
# ملف .env للاختبار المحلي
VITE_PAYMENT_ENV=sandbox
```

## 3️⃣ **فحص المشكلة في Console**

### بعد التحديث، تحقق من Console:
```
🔧 Payment Environment Check:
  env: "production"
  isProduction: true
  hasPublishableKey: true  # يجب أن يكون true
  hasSecretKey: true       # يجب أن يكون true
```

## 4️⃣ **خطوات استكشاف الأخطاء**

### أ) تحقق من المفاتيح:
1. ادخل إلى [لوحة ميسر](https://moyasar.com/dashboard)
2. اذهب إلى "API Keys"
3. انسخ المفاتيح الحقيقية (تبدأ بـ pk_live_ و sk_live_)
4. ضعها في ملف `.env`

### ب) أعد تشغيل السيرفر:
```bash
# أوقف السيرفر (Ctrl+C)
# ثم أعد تشغيله:
npm run dev
```

### ج) اختبر مرة أخرى:
1. امسح cache المتصفح (F12 → Network → Disable cache)
2. أعد تحميل الصفحة
3. اتبع نفس خطوات الاختبار

## 5️⃣ **حل سريع - وضع Sandbox**

إذا كنت تريد اختبار فوري:

```env
# ملف .env - للاختبار السريع
VITE_PAYMENT_ENV=sandbox
```

بهذا ستعمل الدفعات فوراً (وضع تجريبي).

## 6️⃣ **التحقق من النجاح**

### علامات النجاح:
- ✅ لا توجد رسائل خطأ في console
- ✅ يتم التوجيه إلى صفحة ميسر
- ✅ تظهر صفحة الدفع الحقيقية

### علامات المشكلة:
- ❌ رسالة "فشل في الاتصال"
- ❌ hasPublishableKey: false
- ❌ hasSecretKey: false

## 7️⃣ **اتصل بالدعم**

إذا استمرت المشكلة:
- تأكد من تفعيل حسابك في ميسر بالكامل
- راسل دعم ميسر: support@moyasar.com
- تأكد من أن المفاتيح لم تنته صلاحيتها 