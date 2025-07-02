# Backend API Setup for Moyasar Integration

## مطلوب: إنشاء Backend API

عندما تحصل على مفاتيح ميسر الحقيقية، ستحتاج إلى إنشاء backend API لحماية `secret_key`.

## Option 1: Node.js + Express

### 1. إنشاء مجلد backend
```bash
mkdir moyasar-backend
cd moyasar-backend
npm init -y
npm install express cors dotenv axios
npm install -D nodemon @types/express typescript ts-node
```

### 2. إنشاء server.js
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Moyasar Configuration
const MOYASAR_CONFIG = {
  secretKey: process.env.MOYASAR_SECRET_KEY, // sk_live_xxx
  apiUrl: 'https://api.moyasar.com/v1'
};

// Create Payment Endpoint
app.post('/api/create-payment', async (req, res) => {
  try {
    const { name, email, phone, amount, serviceType, description } = req.body;

    // Validate input
    if (!name || !email || !phone || !amount || !serviceType) {
      return res.status(400).json({
        success: false,
        error: { message: 'Missing required fields' }
      });
    }

    // Create payment with Moyasar
    const paymentData = {
      amount: Math.round(parseFloat(amount) * 100), // Convert to halalas
      currency: 'SAR',
      description: `${serviceType}${description ? ` - ${description}` : ''}`,
      callback_url: `${req.headers.origin}/payment/callback`,
      source: {
        type: 'creditcard',
        name: name
      },
      metadata: {
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        service_type: serviceType
      }
    };

    const response = await fetch(`${MOYASAR_CONFIG.apiUrl}/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(MOYASAR_CONFIG.secretKey + ':').toString('base64')}`
      },
      body: JSON.stringify(paymentData)
    });

    const result = await response.json();

    if (response.ok) {
      res.json({
        success: true,
        url: result.url,
        paymentId: result.id
      });
    } else {
      res.status(400).json({
        success: false,
        error: { message: result.message || 'Payment creation failed' }
      });
    }

  } catch (error) {
    console.error('Payment creation error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Internal server error' }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3. إعداد .env للـ backend
```env
MOYASAR_SECRET_KEY=sk_live_your_actual_secret_key
PORT=3001
```

## Option 2: PHP Backend

### إنشاء create-payment.php
```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

// Validate input
$required = ['name', 'email', 'phone', 'amount', 'serviceType'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => ['message' => "Missing required field: $field"]
        ]);
        exit;
    }
}

// Moyasar Configuration
$secretKey = 'sk_live_your_actual_secret_key'; // Replace with your key
$apiUrl = 'https://api.moyasar.com/v1/payments';

// Prepare payment data
$paymentData = [
    'amount' => round(floatval($input['amount']) * 100), // Convert to halalas
    'currency' => 'SAR',
    'description' => $input['serviceType'] . (isset($input['description']) ? ' - ' . $input['description'] : ''),
    'callback_url' => $_SERVER['HTTP_ORIGIN'] . '/payment/callback',
    'source' => [
        'type' => 'creditcard',
        'name' => $input['name']
    ],
    'metadata' => [
        'customer_name' => $input['name'],
        'customer_email' => $input['email'],
        'customer_phone' => $input['phone'],
        'service_type' => $input['serviceType']
    ]
];

// Make API call to Moyasar
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($paymentData));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Basic ' . base64_encode($secretKey . ':')
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$result = json_decode($response, true);

if ($httpCode === 200 || $httpCode === 201) {
    echo json_encode([
        'success' => true,
        'url' => $result['url'],
        'paymentId' => $result['id']
    ]);
} else {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => ['message' => $result['message'] ?? 'Payment creation failed']
    ]);
}
?>
```

## تشغيل Backend

### Node.js
```bash
cd moyasar-backend
npm start
# Server will run on http://localhost:3001
```

### PHP
```bash
# Place in your web server directory
# Make sure the URL is accessible: http://your-domain.com/create-payment.php
```

## تحديث Frontend

في ملف `src/pages/Payment.tsx`، غيّر:
```typescript
const response = await fetch('/api/create-payment', {
```

إلى:
```typescript
const response = await fetch('http://localhost:3001/api/create-payment', {
// أو
const response = await fetch('http://your-domain.com/create-payment.php', {
```

## Security Notes

1. **Never expose secret key in frontend**
2. **Use HTTPS in production**
3. **Validate all inputs on backend**
4. **Implement rate limiting**
5. **Log all payment attempts**
6. **Set up webhook validation** 