import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-blue-100">
            How we use cookies and tracking technologies
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Last Updated */}
            <div className="border-b pb-4">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* What Are Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our site.
              </p>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 mb-2">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Form submission functionality</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytical Cookies</h3>
                  <p className="text-gray-700 mb-2">
                    These help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Google Analytics</li>
                    <li>Website usage statistics</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700 mb-2">
                    These enhance your experience by remembering your preferences.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Language preferences</li>
                    <li>Contact form data</li>
                    <li>User preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We use third-party services that may place cookies on your device:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                <li><strong>EmailJS:</strong> Contact form functionality</li>
                <li><strong>Payment Processors:</strong> Secure payment processing</li>
              </ul>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  You can control cookies through your browser settings:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Chrome</h4>
                    <p className="text-sm text-gray-600">Settings &gt; Privacy and Security &gt; Cookies</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Firefox</h4>
                    <p className="text-sm text-gray-600">Options &gt; Privacy &gt; Cookies and Site Data</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Safari</h4>
                    <p className="text-sm text-gray-600">Preferences &gt; Privacy &gt; Cookies</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Edge</h4>
                    <p className="text-sm text-gray-600">Settings &gt; Site Permissions &gt; Cookies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact of Disabling */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Disabling certain cookies may affect your experience on our website, 
                  including the ability to submit contact forms or receive personalized content.
                </p>
              </div>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
              <p className="text-gray-700">
                Cookie data is processed in accordance with our Privacy Policy. We implement appropriate 
                security measures to protect the information collected through cookies. For more information 
                about how we handle your personal data, please see our Privacy Policy.
              </p>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Shawamek Visa Immigration</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">Phone: +966501367513</p>
                <p className="text-gray-700">Address: Shwamek, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy; 