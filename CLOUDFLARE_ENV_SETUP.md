# إعداد متغيرات البيئة في Cloudflare Pages

## 🚀 الطريقة الأفضل والأكثر أماناً!

### 1. إعداد متغيرات البيئة في Cloudflare Dashboard:

#### الخطوات:
1. **اذهب إلى Cloudflare Dashboard**
   - Pages → اختر مشروعك
   - Settings → Environment Variables

2. **أضف المتغيرات للإنتاج (Production)**:
   ```
   Variable Name: VITE_PAYMENT_ENV
   Value: production
   Environment: Production
   ```

   ```
   Variable Name: VITE_MOYASAR_PUBLISHABLE_KEY
   Value: pk_live_YOUR_ACTUAL_PUBLISHABLE_KEY
   Environment: Production
   ```

   ```
   Variable Name: VITE_MOYASAR_SECRET_KEY
   Value: sk_live_YOUR_ACTUAL_SECRET_KEY
   Environment: Production
   ```

   ```
   Variable Name: VITE_MOYASAR_WEBHOOK_SECRET
   Value: your_webhook_secret_here
   Environment: Production
   ```

   ```
   Variable Name: VITE_BASE_URL
   Value: https://your-domain.com
   Environment: Production
   ```

3. **أضف المتغيرات للمعاينة (Preview) - اختياري**:
   - نفس المتغيرات ولكن مع `Environment: Preview`
   - يمكنك استخدام مفاتيح تجريبية للمعاينة

### 2. إعداد محلي للتطوير:

#### إنشاء ملف `.env.local` للتطوير:
```env
# Development Environment
VITE_PAYMENT_ENV=sandbox
# سيستخدم المفاتيح التجريبية المُدمجة في الكود
```

#### أو للاختبار المحلي بالمفاتيح الحقيقية:
```env
# Local Production Testing
VITE_PAYMENT_ENV=production
VITE_MOYASAR_PUBLISHABLE_KEY=pk_live_YOUR_ACTUAL_PUBLISHABLE_KEY
VITE_MOYASAR_SECRET_KEY=sk_live_YOUR_ACTUAL_SECRET_KEY
VITE_MOYASAR_WEBHOOK_SECRET=your_webhook_secret_here
VITE_BASE_URL=http://localhost:5173
```

### 3. تحديث `.gitignore`:
```gitignore
# Environment files
.env
.env.local
.env.production
.env.development
```

### 4. إعداد البناء (Build):

#### في `package.json` (إضافة scripts للبيئات):
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:staging": "VITE_PAYMENT_ENV=sandbox npm run build",
    "build:production": "VITE_PAYMENT_ENV=production npm run build"
  }
}
```

### 5. التحقق من الإعداد:

#### في Cloudflare Pages:
1. **Build command**: `npm run build`
2. **Build output directory**: `dist`
3. **Environment variables**: محفوظة في Dashboard

#### للتحقق من المتغيرات:
```javascript
// في الكود يمكنك فحص:
console.log('Environment:', import.meta.env.VITE_PAYMENT_ENV);
console.log('Has Publishable Key:', !!import.meta.env.VITE_MOYASAR_PUBLISHABLE_KEY);
```

### 6. مزايا هذه الطريقة:

✅ **أمان كامل**: المفاتيح محفوظة في Cloudflare فقط
✅ **لا رفع للمفاتيح**: لا تظهر في Git نهائياً
✅ **بيئات متعددة**: Production, Preview, Development منفصلة
✅ **سهولة الإدارة**: تحديث المفاتيح من Dashboard فقط
✅ **تشفير**: Cloudflare يشفر المتغيرات تلقائياً

### 7. إعداد Webhook (اختياري):

في Cloudflare Pages Functions:
```javascript
// functions/api/webhook.js
export async function onRequestPost(context) {
  const webhookSecret = context.env.VITE_MOYASAR_WEBHOOK_SECRET;
  // معالجة الـ webhook
}
```

---

## 🎯 الخطوة التالية:
1. أضف المتغيرات في Cloudflare Dashboard
2. قم بـ deployment جديد
3. ستعمل المفاتيح الحقيقية تلقائياً!

**مثالي للإنتاج! 🚀** 