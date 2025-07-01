import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Your privacy and data protection are our top priorities
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

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Shawamek Visa Immigration ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our immigration consultation services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Full name and contact information (email, phone, address)</li>
                <li>Passport and identification document details</li>
                <li>Educational qualifications and work experience</li>
                <li>Immigration history and current status</li>
                <li>Family member information (for family visa applications)</li>
                <li>Financial information (for visa application purposes)</li>
                <li>Any other information relevant to your immigration case</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
                <li>Device and location information</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Providing immigration consultation and visa services</li>
                <li>Preparing and submitting visa applications on your behalf</li>
                <li>Communicating with immigration authorities</li>
                <li>Scheduling appointments and follow-ups</li>
                <li>Improving our services and website functionality</li>
                <li>Compliance with legal and regulatory requirements</li>
                <li>Marketing communications (with your consent)</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Immigration Authorities:</strong> As required for visa applications</li>
                <li><strong>ICCRC (Immigration Consultants of Canada Regulatory Council):</strong> For regulatory compliance</li>
                <li><strong>Third-party Service Providers:</strong> Translation services, document verification, payment processors</li>
                <li><strong>Legal Authorities:</strong> When required by law or court order</li>
                <li><strong>Professional Partners:</strong> Lawyers, accountants, or other professionals assisting with your case</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Access controls and employee training</li>
                <li>Regular security audits and updates</li>
                <li>Physical security measures for document storage</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal information for as long as necessary to provide our services and comply with 
                legal obligations. Immigration files are typically retained for 7 years after case completion as 
                required by regulatory guidelines.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct or update your information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Withdraw consent for marketing communications</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700">
                Our website uses cookies to improve functionality and analyze usage. You can control cookie 
                settings through your browser. For detailed information, please see our Cookie Policy.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700">
                As we provide services for multiple countries, your information may be transferred and processed 
                in different jurisdictions. We ensure appropriate safeguards are in place for international transfers.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. We will notify you of significant changes by 
                posting the updated policy on our website and updating the "Last Updated" date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Shawamek Visa Immigration</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">Phone: +966501367513</p>
                <p className="text-gray-700">Address: Shwamek, Saudi Arabia</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> This Privacy Policy is for informational purposes. 
                For specific legal advice regarding your privacy rights, please consult with a qualified attorney.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 