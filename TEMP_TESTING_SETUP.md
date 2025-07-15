# إعداد مؤقت للاختبار - في انتظار مفاتيح ميسر

## 🎯 **الهدف:**
تفعيل وضع الاختبار حتى تحصل على المفاتيح الصحيحة من ميسر.

## 📁 **إنشاء ملف .env للاختبار:**

في المجلد الرئيسي للمشروع، أنشئ ملف `.env` بالمحتوى التالي:

```env
# إعداد مؤقت للاختبار
VITE_PAYMENT_ENV=sandbox
VITE_MOYASAR_WEBHOOK_SECRET=daf0ffb0d8564dd9b720850a054cade3
VITE_BASE_URL=http://localhost:5173
```

## 🚀 **إعادة تشغيل السيرفر:**

```bash
# أوقف السيرفر الحالي (Ctrl+C)
npm run dev
```

## ✅ **النتيجة المتوقعة:**

بعد إعادة التشغيل ستلاحظ في console:
```
🧪 Using SANDBOX payment configuration
```

وستعمل الدفعات بوضع الاختبار دون أخطاء.

## 🔄 **بعد الحصول على مفاتيح ميسر:**

عندما ترد ميسر بالمفاتيح الصحيحة، حدث ملف `.env`:

```env
# للاستخدام الحقيقي
VITE_PAYMENT_ENV=production
VITE_MOYASAR_PUBLISHABLE_KEY=pk_live_xxxxxxxxx
VITE_MOYASAR_SECRET_KEY=sk_live_xxxxxxxxx
VITE_MOYASAR_WEBHOOK_SECRET=daf0ffb0d8564dd9b720850a054cade3
VITE_BASE_URL=https://your-domain.com
```

## 📧 **حالة الإيميل:**
- [x] تم إعداد نموذج الإيميل في `EMAIL_TO_MOYASAR.md`
- [x] تم تفعيل وضع الاختبار المؤقت
- [ ] في انتظار رد ميسر بالمفاتيح الصحيحة

## 🔧 **ميزات النظام الحالي:**
- ✅ يتحقق تلقائياً من صحة المفاتيح
- ✅ ينتقل لوضع sandbox عند عدم وجود مفاتيح صحيحة
- ✅ يعطي تحذيرات واضحة في console
- ✅ جاهز للتبديل للإنتاج فور وصول المفاتيح

## 📞 **الدعم:**
إذا احتجت مساعدة إضافية، لا تتردد في السؤال! 