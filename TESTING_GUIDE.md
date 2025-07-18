# دليل اختبار صفحة الدفع - Payment Page Testing Guide

## 🧪 اختبار في بيئة التطوير المحلية (Sandbox)

### الخطوة 1: إعداد البيئة المحلية
1. **تأكد من وجود ملف `.env.local`** في المجلد الجذر للمشروع:
```
VITE_PAYMENT_ENV=sandbox
VITE_MOYASAR_PUBLISHABLE_KEY=pk_test_qGA8XATWbQZHJVbFdFdWDhur6xm9dUJjEQAib1FL
VITE_MOYASAR_SECRET_KEY=sk_test_HjibPiUhUdnzkEkGEyYKPttNE45E12gWBsQlkFN1
VITE_BASE_URL=http://localhost:5173
```

2. **تشغيل الخادم المحلي:**
```bash
npm run dev
```

### الخطوة 2: اختبار الوظائف الأساسية
1. **افتح الصفحة:** `http://localhost:5174/payment` أو `http://localhost:5173/payment`
2. **املأ النموذج:**
   - الاسم: أي اسم
   - البريد الإلكتروني: أي إيميل صحيح
   - رقم الهاتف: أي رقم هاتف
   - المبلغ: أي مبلغ (مثل 10)
   - نوع الخدمة: اختر أي خدمة

### الخطوة 3: اختبار أرقام البطاقات
استخدم أرقام بطاقات الاختبار التالية:

#### ✅ **نجح الدفع:**
- **رقم البطاقة:** `4111111111111111`
- **تاريخ الانتهاء:** `12/25`
- **CVC:** `123`
- **اسم حامل البطاقة:** أي اسم

#### ❌ **فشل الدفع:**
- **رقم البطاقة:** `4000000000000002`
- **تاريخ الانتهاء:** `12/25`
- **CVC:** `123`

#### ⏳ **قيد الانتظار:**
- **رقم البطاقة:** `4000000000000069`
- **تاريخ الانتهاء:** `12/25`
- **CVC:** `123`

#### 🚫 **مرفوض:**
- **رقم البطاقة:** `4000000000000051`
- **تاريخ الانتهاء:** `12/25`
- **CVC:** `123`

## 📋 قائمة الاختبارات المطلوبة

### ✅ اختبارات الأساسية
- [ ] **تحميل الصفحة** - الصفحة تحمل بدون أخطاء
- [ ] **التبديل بين اللغات** - العربية والإنجليزية
- [ ] **عرض النصوص** - جميع النصوص تظهر بشكل صحيح
- [ ] **النموذج يعمل** - يمكن ملء جميع الحقول
- [ ] **التحقق من الحقول** - رسائل خطأ عند ترك حقول فارغة

### ✅ اختبارات الدفع
- [ ] **دفع ناجح** - يتم التوجيه لصفحة النجاح
- [ ] **دفع فاشل** - يتم التوجيه لصفحة الفشل
- [ ] **دفع معلق** - يتم التوجيه لصفحة الانتظار
- [ ] **دفع مرفوض** - يتم التوجيه لصفحة الرفض

### ✅ اختبارات صفحة PaymentCallback
- [ ] **عرض النتيجة** - الأيقونة والرسالة المناسبة
- [ ] **تفاصيل الدفع** - عرض رقم المعاملة والمبلغ
- [ ] **زر تحميل الإيصال** - يعمل بشكل صحيح
- [ ] **الروابط** - العودة للرئيسية، المحاولة مرة أخرى، التواصل مع الدعم
- [ ] **الترجمة** - جميع النصوص باللغة المحددة
- [ ] **الاتجاه** - RTL للعربية، LTR للإنجليزية

## 🔧 اختبارات متقدمة

### اختبار الاستجابة (Responsive Design)
- [ ] **الهاتف المحمول** - الصفحة تعمل على الشاشات الصغيرة
- [ ] **الجهاز اللوحي** - الصفحة تعمل على الشاشات المتوسطة
- [ ] **سطح المكتب** - الصفحة تعمل على الشاشات الكبيرة

### اختبار الأداء
- [ ] **سرعة التحميل** - الصفحة تحمل بسرعة
- [ ] **استجابة الأزرار** - الأزرار تستجيب بسرعة
- [ ] **الانتقال بين الصفحات** - سلس وسريع

### اختبار الأمان
- [ ] **التحقق من الحقول** - منع إدخال بيانات خاطئة
- [ ] **التشفير** - جميع البيانات محمية
- [ ] **عدم حفظ البيانات الحساسة** - أرقام البطاقات لا تحفظ

## 📊 مراقبة الدفعات

### لوحة تحكم Sandbox
- **الرابط:** https://dashboard.moyasar.com/sandbox
- **الوظيفة:** مراقبة الدفعات التجريبية
- **ملاحظة:** جميع الدفعات هنا وهمية ولا تخصم أموال حقيقية

### لوحة تحكم الإنتاج
- **الرابط:** https://dashboard.moyasar.com
- **الوظيفة:** مراقبة الدفعات الحقيقية
- **⚠️ تحذير:** الدفعات هنا حقيقية وتخصم أموال فعلية

## 🐛 استكشاف الأخطاء

### مشاكل شائعة وحلولها

#### المشكلة: "النصوص تظهر كمفاتيح (مثل payment_callback.success_title)"
**الحل:**
1. تأكد من أن ملف `src/config/i18n.ts` يحتوي على النصوص المطلوبة
2. أعد تشغيل الخادم: `npm run dev`
3. امسح ذاكرة التخزين المؤقت للمتصفح

#### المشكلة: "لا يتم توجيه المستخدم لصفحة الدفع"
**الحل:**
1. تأكد من أن ملف `.env.local` موجود وصحيح
2. تأكد من أن الخادم يعمل على المنفذ الصحيح
3. راجع console في المتصفح للأخطاء

#### المشكلة: "زر تحميل الإيصال لا يعمل"
**الحل:**
1. تأكد من أن المتصفح يدعم تحميل الملفات
2. تأكد من عدم وجود blocker للتحميل
3. جرب في متصفح آخر

## 🚀 اختبار الإنتاج (اختياري)

**⚠️ تحذير مهم:** الاختبار في الإنتاج يخصم أموال حقيقية!

### متى نختبر في الإنتاج؟
- عند التأكد من أن جميع الاختبارات المحلية نجحت
- عند الحاجة لاختبار التكامل النهائي
- عند التأكد من عمل webhook

### كيفية الاختبار في الإنتاج:
1. **افتح الصفحة:** `https://shawmekimmigration.com/payment`
2. **استخدم مبلغ صغير** (مثل 1 ريال)
3. **استخدم بطاقة حقيقية**
4. **تأكد من استلام الإيصال**

## 📝 تسجيل النتائج

### قالب تقرير الاختبار:
```
التاريخ: [التاريخ]
البيئة: [sandbox/production]
النتيجة: [نجح/فشل]
المتصفح: [Chrome/Firefox/Safari/Edge]
النظام: [Windows/Mac/Linux]
الملاحظات: [أي ملاحظات إضافية]
```

### مثال:
```
التاريخ: 2024-01-15
البيئة: sandbox
النتيجة: نجح
المتصفح: Chrome
النظام: Windows
الملاحظات: جميع الوظائف تعمل بشكل صحيح، الترجمة تعمل، تحميل الإيصال يعمل
```

## 🎯 الخلاصة

الاختبار في بيئة sandbox آمن ومجاني ويغطي جميع السيناريوهات المطلوبة. لا تحتاج لاختبار الإنتاج إلا في حالات خاصة.

---

**للاستفسارات أو المساعدة:** info@shawmekimmigration.com 