import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl text-blue-100">
            Important information about our services and limitations
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-red-800 mb-4">⚠️ IMPORTANT NOTICE</h2>
              <p className="text-red-700 font-semibold">
                WE DO NOT GUARANTEE THE SUCCESS OF ANY IMMIGRATION APPLICATION. 
                Immigration decisions are made solely by government authorities.
              </p>
            </div>

            {/* No Guarantee */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantee of Results</h2>
              <p className="text-gray-700 mb-4">
                Shawamek Visa Immigration provides consultation services only. We cannot guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Approval of any visa or immigration application</li>
                <li>Processing times or government decisions</li>
                <li>Changes in immigration laws or policies</li>
                <li>Specific outcomes for any case</li>
              </ul>
            </div>

            {/* Professional Consultation */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Consultation Only</h2>
              <p className="text-gray-700">
                Our services are for consultation and guidance purposes. We are immigration consultants 
                registered with ICCRC, not lawyers (unless specifically stated). Complex legal matters 
                may require consultation with qualified immigration attorneys.
              </p>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">Clients are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Providing truthful and accurate information</li>
                <li>Meeting all deadlines and requirements</li>
                <li>Paying all applicable fees</li>
                <li>Following immigration laws and regulations</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Shawamek Visa Immigration shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Rejection or refusal of any application</li>
                <li>Processing delays by government authorities</li>
                <li>Changes in government policies</li>
                <li>Any consequential or indirect damages</li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                Our maximum liability is limited to the fees paid for our services.
              </p>
            </div>

            {/* Information Accuracy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Accuracy</h2>
              <p className="text-gray-700">
                While we strive to provide accurate information, immigration laws change frequently. 
                Clients should verify current requirements with official government sources.
              </p>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Shawamek Visa Immigration</strong></p>
                <p className="text-gray-700">Email: info@shawmekimmigration.com</p>
                <p className="text-gray-700">Phone: +966501367513</p>
                <p className="text-gray-700">Address: Shwamek, Saudi Arabia</p>
              </div>
            </div>

            {/* Final Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800 font-semibold text-center">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND 
                AGREE TO BE BOUND BY THIS DISCLAIMER.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer; 