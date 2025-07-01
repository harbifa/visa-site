import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-100">
            Please read these terms carefully before using our services
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

            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the services of Shawamek Visa Immigration ("Company," "we," "us," or "our"), 
                you ("Client," "you," or "your") agree to be bound by these Terms of Service and all applicable 
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">We provide immigration consultation services including but not limited to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Immigration consultation and advice</li>
                <li>Visa application preparation and submission</li>
                <li>Document verification and authentication</li>
                <li>Immigration program assessment</li>
                <li>Application tracking and follow-up</li>
                <li>Legal representation (where applicable)</li>
              </ul>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">As our client, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate, complete, and truthful information</li>
                <li>Submit all required documents in a timely manner</li>
                <li>Pay all fees as agreed upon in the service agreement</li>
                <li>Cooperate fully with our requests for information</li>
                <li>Notify us immediately of any changes in your circumstances</li>
                <li>Comply with all immigration laws and regulations</li>
                <li>Not engage in fraudulent or illegal activities</li>
              </ul>
            </div>

            {/* Company Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Company Responsibilities</h2>
              <p className="text-gray-700 mb-4">We commit to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide professional immigration consultation services</li>
                <li>Handle your case with due diligence and care</li>
                <li>Maintain confidentiality of your personal information</li>
                <li>Keep you informed about your case progress</li>
                <li>Comply with ICCRC regulations and professional standards</li>
                <li>Act in your best interests within our professional capacity</li>
              </ul>
            </div>

            {/* Fees and Payment */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Fees</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>All fees are clearly outlined in your service agreement</li>
                    <li>Fees are non-refundable once services have commenced</li>
                    <li>Government fees are separate and non-refundable</li>
                    <li>Additional fees may apply for extra services not included in the original agreement</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Terms</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Payment is due as specified in your service agreement</li>
                    <li>Late payments may result in suspension of services</li>
                    <li>We accept various payment methods as specified on our website</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* No Guarantee of Results */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. No Guarantee of Results</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-yellow-800 font-semibold">IMPORTANT DISCLAIMER</p>
              </div>
              <p className="text-gray-700 mb-4">
                We cannot and do not guarantee the success of any immigration application or the approval of any visa. 
                Immigration decisions are made solely by government authorities and are subject to their discretion.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Immigration laws and policies can change without notice</li>
                <li>Each case is unique and results may vary</li>
                <li>We are not responsible for government processing delays</li>
                <li>Refusal of applications does not entitle clients to fee refunds</li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality</h2>
              <p className="text-gray-700">
                We maintain strict confidentiality regarding all client information in accordance with professional 
                standards and applicable privacy laws. Information will only be shared with third parties as necessary 
                for your case or as required by law.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination of Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">By Client</h3>
                  <p className="text-gray-700">
                    You may terminate our services at any time with written notice. Fees paid for services 
                    already rendered will not be refunded.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">By Company</h3>
                  <p className="text-gray-700 mb-2">We may terminate our services if:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Client fails to pay fees as agreed</li>
                    <li>Client provides false or misleading information</li>
                    <li>Client engages in illegal or unethical conduct</li>
                    <li>There is a conflict of interest</li>
                    <li>Client fails to cooperate or follow our advice</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Shawamek Visa Immigration shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of income, profits, or business opportunities</li>
                <li>Government processing delays or decisions</li>
                <li>Changes in immigration laws or policies</li>
                <li>Technical issues with government systems</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Our total liability shall not exceed the amount of fees paid for our services.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                In case of disputes, we encourage resolution through direct communication. If necessary:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Disputes will be governed by Saudi Arabian law</li>
                <li>Professional complaints may be filed with ICCRC</li>
                <li>Mediation will be attempted before litigation</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Intellectual Property</h2>
              <p className="text-gray-700">
                All content on our website, including text, graphics, logos, and software, is the property of 
                Shawamek Visa Immigration and is protected by copyright and other intellectual property laws.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be posted on our website 
                and will take effect immediately upon posting. Continued use of our services constitutes 
                acceptance of modified terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Shawamek Visa Immigration</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">Phone: +966501367513</p>
                <p className="text-gray-700">Address: Shwamek, Saudi Arabia</p>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Legal Notice:</strong> These terms constitute a legal agreement. If you do not understand 
                any provision, please seek legal advice before using our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 