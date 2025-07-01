import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-xl text-blue-100">
            Terms and conditions for service refunds
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Important Notice</h2>
              <p className="text-red-700 font-semibold">
                All fees are generally non-refundable once services have commenced. 
                Please read this policy carefully before making payment.
              </p>
            </div>

            {/* General Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">General Refund Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Due to the nature of immigration consultation services, our refund policy has 
                specific terms and conditions. We strive to provide excellent service while 
                maintaining fair business practices.
              </p>
            </div>

            {/* Non-Refundable Items */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Government application fees</li>
                <li>Third-party service fees</li>
                <li>Services already rendered</li>
                <li>Application rejections</li>
                <li>Government policy changes</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Request Process</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Contact us within 30 days of payment</li>
                <li>Provide detailed reason for refund</li>
                <li>Include payment receipt</li>
                <li>Allow 5-10 business days for review</li>
              </ol>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Shawamek Visa Immigration</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">Phone: +966501367513</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy; 