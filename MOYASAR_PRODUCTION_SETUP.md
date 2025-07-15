# دليل تفعيل الدفع الفعلي في ميسر

## نظرة عامة
هذا الدليل يوضح كيفية تفعيل الدفع الفعلي في ميسر بدلاً من الوضع التجريبي.

## المتطلبات
- حساب ميسر مفعل (تم بالفعل ✅)
- مفاتيح API الفعلية من لوحة تحكم ميسر
- دومين مفعل و SSL محقق

## الخطوات المطلوبة

### 1. الحصول على مفاتيح API الفعلية
1. قم بتسجيل الدخول إلى [لوحة تحكم ميسر](https://moyasar.com/dashboard)
2. انتقل إلى قسم "API Keys" أو "مفاتيح API"
3. احصل على:
   - **Publishable Key** (يبدأ بـ `pk_live_`)
   - **Secret Key** (يبدأ بـ `sk_live_`)

### 2. إنشاء ملف البيئة (.env)
قم بإنشاء ملف `.env` في المجلد الرئيسي للمشروع:

```env
# تفعيل وضع الإنتاج
VITE_PAYMENT_ENV=production

# مفاتيح ميسر الفعلية
VITE_MOYASAR_PUBLISHABLE_KEY=pk_live_YOUR_ACTUAL_PUBLISHABLE_KEY
VITE_MOYASAR_SECRET_KEY=sk_live_YOUR_ACTUAL_SECRET_KEY

# Secret Token للـ Webhook (مطلوب لتأمين الإشعارات)
VITE_MOYASAR_WEBHOOK_SECRET=daf0ffb0d8564dd9b720850a054cade3

# رابط الموقع الأساسي
VITE_BASE_URL=https://your-domain.com
```

⚠️ **مهم**: 
- استبدل `YOUR_ACTUAL_PUBLISHABLE_KEY` و `YOUR_ACTUAL_SECRET_KEY` بالمفاتيح الحقيقية
- استبدل `https://your-domain.com` برابط موقعك الفعلي

### 3. تكوين callback URLs في ميسر
في لوحة تحكم ميسر، قم بإضافة هذه الروابط:

```
Success URL: https://your-domain.com/payment/callback
Failure URL: https://your-domain.com/payment/callback
Callback URL: https://your-domain.com/payment/callback
```

### 4. إعادة بناء المشروع
بعد إضافة ملف `.env`، قم بإعادة بناء المشروع:

```bash
npm run build
```

### 5. التأكد من التكوين
بعد إعادة البناء، ستظهر في console المتصفح:
- `🏭 Using PRODUCTION payment configuration` (إذا كان التكوين صحيحاً)
- `⚠️ Falling back to SANDBOX mode due to configuration issues` (إذا كان هناك مشكلة)

## اختبار النظام

### اختبار الإنتاج
1. تأكد من أن `VITE_PAYMENT_ENV=production` في ملف `.env`
2. تأكد من أن المفاتيح تبدأ بـ `pk_live_` و `sk_live_`
3. قم بإجراء دفعة تجريبية بمبلغ صغير (مثل 1 ريال)

### علامات نجاح التفعيل
- ✅ لا توجد رسائل خطأ في console
- ✅ يتم التوجيه إلى صفحة ميسر الفعلية (وليس التجريبية)
- ✅ يمكن إجراء المدفوعات الفعلية

## استكشاف الأخطاء

### خطأ: "Production payment is not configured properly"
**السبب**: مفاتيح API غير مكونة بشكل صحيح

**الحل**:
1. تأكد من وجود ملف `.env` في المجلد الرئيسي
2. تأكد من أن المفاتيح تبدأ بـ `pk_live_` و `sk_live_`
3. أعد تشغيل خادم التطوير: `npm run dev`

### خطأ: "CORS error" أو "Network error"
**السبب**: مشكلة في إعدادات الدومين أو SSL

**الحل**:
1. تأكد من أن الموقع يعمل عبر HTTPS
2. تأكد من تكوين callback URLs في ميسر
3. تأكد من أن الدومين مطابق للمسجل في ميسر

### خطأ: "Invalid API key"
**السبب**: مفتاح API خاطئ أو منتهي الصلاحية

**الحل**:
1. تأكد من نسخ المفاتيح بشكل صحيح من لوحة ميسر
2. تأكد من أن المفاتيح لم تنته صلاحيتها
3. جرب إنشاء مفاتيح جديدة إذا لزم الأمر

## الدعم الفني
إذا واجهت أي مشاكل:
- تحقق من [وثائق ميسر الرسمية](https://moyasar.com/docs)
- راسل دعم ميسر الفني
- تحقق من logs المتصفح للحصول على تفاصيل أكثر

## ملاحظات مهمة
- ⚠️ لا تشارك مفاتيح API مع أي شخص
- ⚠️ لا تحفظ مفاتيح API في نظام التحكم بالإصدار (git)
- ⚠️ استخدم HTTPS فقط للمواقع الإنتاجية
- ⚠️ اختبر النظام بمبالغ صغيرة أولاً

## التحقق من الحالة
يمكنك التحقق من حالة النظام من خلال:
```javascript
console.log('Payment Environment:', import.meta.env.VITE_PAYMENT_ENV);
console.log('Production Ready:', isProductionReady());
```

## خاتمة
بعد اتباع هذه الخطوات، سيكون نظام الدفع الخاص بك جاهزاً لمعالجة المدفوعات الفعلية عبر ميسر. 