# Moyasar Payment Integration

## Overview
This project integrates **Moyasar** payment gateway for secure online payments. The integration supports sandbox environment for testing and can be easily switched to production.

## 🚀 Features
- ✅ Secure payment processing via Moyasar API
- ✅ Support for multiple payment methods (Visa, Mastercard, Mada, Apple Pay, etc.)
- ✅ Real-time payment status tracking
- ✅ Comprehensive error handling
- ✅ TypeScript support
- ✅ Responsive payment forms
- ✅ Payment callback handling

## 📁 File Structure
```
src/
├── utils/
│   └── moyasar.ts          # Moyasar API integration utilities
├── api/
│   └── create-payment.ts   # Payment API handlers
├── pages/
│   ├── Payment.tsx         # Payment form page
│   └── PaymentCallback.tsx # Payment result handling
└── App.tsx                 # Updated with new routes
```

## 🔧 Configuration

### Environment Variables
The system uses sandbox credentials by default:
- **Publishable Key**: `pk_test_qGA8XATWbQZHJVbFdFdWDhur6xm9dUJjEQAib1FL`
- **Secret Key**: `sk_test_HjibPiUhUdnzkEkGEyYKPttNE45E12gWBsQlkFN1`

### Switching to Production
1. Replace sandbox keys with production keys in `src/utils/moyasar.ts`
2. Update the API URL if needed (currently using `https://api.moyasar.com/v1`)

## 🛠️ Implementation Details

### 1. Payment Flow
1. **Customer fills payment form** → `/payment`
2. **Form validation** → Client-side validation
3. **Payment creation** → API call to Moyasar
4. **Redirect to Moyasar** → Secure payment gateway
5. **Payment completion** → Callback to `/payment/callback`
6. **Result display** → Success/failure page

### 2. Key Components

#### `moyasar.ts`
- Payment data interfaces
- Moyasar API communication
- Error handling utilities
- Amount conversion (SAR to halalas)

#### `create-payment.ts`
- Payment request validation
- API route simulation
- Response formatting
- Error management

#### `Payment.tsx`
- Enhanced payment form
- Real-time validation
- Error display
- Progress indicators

#### `PaymentCallback.tsx`
- Payment result processing
- Status-based UI
- Customer information display
- Next steps guidance

## 💳 Supported Payment Methods
- **Credit/Debit Cards**: Visa, Mastercard
- **Local Cards**: Mada
- **Digital Wallets**: Apple Pay, STC Pay
- **Bank Transfer**: Direct bank transfer

## 🔒 Security Features
- PCI DSS Level 1 compliance
- 256-bit SSL encryption
- Secure token-based authentication
- No sensitive data storage on frontend

## 📱 API Endpoints

### Create Payment
```typescript
POST /api/create-payment
Content-Type: application/json

{
  "name": "Customer Name",
  "email": "customer@example.com",
  "phone": "+966501234567",
  "amount": "100.00",
  "serviceType": "Express Entry Visa",
  "description": "Optional description"
}
```

### Response
```typescript
{
  "success": true,
  "url": "https://checkout.moyasar.com/...",
  "paymentId": "pay_xxx"
}
```

## 🧪 Testing

### Test Cards (Sandbox)
```
✅ Success: 4111111111111111
❌ Failure: 4000000000000002
⏳ Pending: 4000000000000069
```

### Test Scenarios
1. **Successful Payment**: Use test card `4111111111111111`
2. **Failed Payment**: Use test card `4000000000000002`
3. **Network Error**: Disconnect internet during payment
4. **Invalid Data**: Submit form with invalid email/amount

## 🚀 Deployment

### Production Checklist
- [ ] Replace sandbox keys with production keys
- [ ] Test with real payment methods
- [ ] Configure webhook endpoints
- [ ] Set up proper error monitoring
- [ ] Implement payment reconciliation
- [ ] Add receipt generation
- [ ] Configure backup payment methods

## 🔄 Callback URL Format
```
/payment/callback?status=paid&id=pay_xxx&amount=10000&currency=SAR
```

### Status Values
- `paid`: Payment successful
- `failed`: Payment failed
- `pending`: Payment being processed

## 📊 Error Handling

### Error Types
- **VALIDATION_ERROR**: Form validation failed
- **INVALID_AMOUNT**: Amount format error
- **INVALID_EMAIL**: Email format error
- **API_ERROR**: Moyasar API error
- **NETWORK_ERROR**: Connection error
- **UNKNOWN_ERROR**: Unexpected error

## 🎯 Next Steps
1. **Add Receipt Generation**: PDF receipts for successful payments
2. **Implement Webhooks**: Server-side payment confirmations
3. **Add Payment History**: Customer payment tracking
4. **Multi-language Support**: Arabic language support
5. **Mobile Optimization**: Enhanced mobile experience

## 📞 Support
- **Technical Support**: Developer team
- **Payment Issues**: Moyasar support
- **Business Inquiries**: +966501367513

## 📚 Resources
- [Moyasar Documentation](https://moyasar.com/docs/)
- [API Reference](https://moyasar.com/docs/api/)
- [Test Cards](https://moyasar.com/docs/testing/)
- [Webhook Guide](https://moyasar.com/docs/webhooks/)

---
**Note**: This integration is currently in sandbox mode. Replace test credentials with production keys before going live. 