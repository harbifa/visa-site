# دليل تكوين Callback URLs في ميسر

## نظرة عامة
الـ Callback URLs هي روابط يستخدمها ميسر لإرسال إشعارات حول حالة الدفع (نجح، فشل، في الانتظار) إلى موقعك.

## الخطوات التفصيلية

### 1. تسجيل الدخول إلى لوحة تحكم ميسر
1. اذهب إلى [moyasar.com](https://moyasar.com)
2. اضغط على "تسجيل الدخول" أو "Login"
3. أدخل بيانات الدخول الخاصة بك

### 2. الانتقال إلى إعدادات الدفع
1. من القائمة الجانبية، اضغط على **"الإعدادات"** أو **"Settings"**
2. أو ابحث عن قسم **"Payment Settings"** أو **"إعدادات الدفع"**
3. أو اضغط على **"Webhooks"** أو **"Developer Settings"**

### 3. العثور على قسم Callback URLs
ابحث عن إحدى هذه الأقسام:
- **"Callback URLs"**
- **"Webhook URLs"**
- **"Return URLs"**
- **"Success/Failure URLs"**

### 4. إدخال الروابط المطلوبة
أدخل هذه الروابط (استبدل `your-domain.com` بدومين موقعك):

#### أ) Success URL (رابط النجاح)
```
https://your-domain.com/payment/callback
```

#### ب) Failure URL (رابط الفشل)
```
https://your-domain.com/payment/callback
```

#### ج) Callback URL (رابط الإشعار)
```
https://your-domain.com/payment/callback
```

#### د) Secret Token (مطلوب)
```
daf0ffb0d8564dd9b720850a054cade3
```
⚠️ **مهم**: استخدم هذا الـ token الدقيق في ميسر وفي ملف `.env`

### 5. مثال على الروابط الصحيحة
إذا كان موقعك `https://alshawamekh.com`، فالروابط ستكون:
```
Success URL: https://alshawamekh.com/payment/callback
Failure URL: https://alshawamekh.com/payment/callback
Callback URL: https://alshawamekh.com/payment/callback
Secret Token: daf0ffb0d8564dd9b720850a054cade3
```

### 6. حفظ الإعدادات
- اضغط على **"حفظ"** أو **"Save"**
- أو **"Update"** أو **"تحديث"**

### 7. إضافة Secret Token إلى التطبيق
أضف هذا السطر إلى ملف `.env`:
```env
VITE_MOYASAR_WEBHOOK_SECRET=daf0ffb0d8564dd9b720850a054cade3
```

## الأماكن المحتملة للعثور على الإعدادات

### في لوحة التحكم الرئيسية
1. **Dashboard** → **Settings** → **Payment Settings**
2. **الإعدادات** → **إعدادات الدفع**
3. **Developer** → **Webhooks**
4. **API** → **Callback URLs**

### في قسم المطورين
1. **Developer Tools** → **Webhook Configuration**
2. **API Settings** → **Return URLs**
3. **Integration** → **Callback Settings**

## نصائح مهمة

### ✅ تأكد من:
- استخدام `https://` وليس `http://`
- كتابة الدومين بشكل صحيح
- عدم وجود مسافات أو أخطاء إملائية
- أن الدومين مطابق للموقع الفعلي
- استخدام نفس الـ Secret Token في ميسر وفي ملف `.env`

### ❌ تجنب:
- استخدام localhost أو IP محلي
- استخدام http:// للمواقع الإنتاجية
- ترك حقل Secret Token فارغاً
- استخدام secret token مختلف في ميسر وفي التطبيق
- استخدام أرقام المنافذ (ports) غير الضرورية

## اختبار الإعدادات

### للتأكد من صحة التكوين:
1. احفظ الإعدادات
2. اعمل عملية دفع تجريبية
3. تأكد من أن الإعادة التوجيه تعمل بشكل صحيح

### في حالة المشاكل:
1. تأكد من أن الموقع يعمل ويمكن الوصول إليه
2. تأكد من أن SSL مفعل
3. جرب إعادة حفظ الإعدادات

## أمثلة للواجهات المختلفة

### إذا كانت الواجهة بالعربية:
ابحث عن:
- "روابط العودة"
- "روابط الإشعار"
- "إعدادات الدفع"
- "webhook"

### إذا كانت الواجهة بالإنجليزية:
ابحث عن:
- "Return URLs"
- "Callback URLs"
- "Webhook URLs"
- "Payment Settings"

## الدعم الفني

### إذا لم تجد الإعدادات:
1. استخدم البحث في لوحة التحكم
2. راسل دعم ميسر الفني
3. تحقق من قسم "Help" أو "المساعدة"

### معلومات الاتصال:
- دعم ميسر: [support@moyasar.com](mailto:support@moyasar.com)
- الوثائق: [moyasar.com/docs](https://moyasar.com/docs)

## خاتمة
بعد تكوين الـ Callback URLs بشكل صحيح، سيتمكن ميسر من إرسال إشعارات الدفع إلى موقعك، مما يضمن تحديث حالة الدفعات بشكل صحيح. 