import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shawamek Visa Immigration</h3>
            <p className="text-gray-300 mb-4">
              Since 2016, we are experts in Immigration Services. Serving in the GCC with certified & reliable Immigration Consultant professionals.
            </p>
            <div className="text-sm text-gray-400">
              <p>ICCRC Registered Associates</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-300 hover:text-white transition-colors">
                  Pay Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Countries Visas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Countries Visas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/canada" className="text-gray-300 hover:text-white transition-colors">
                  Canada Visa
                </Link>
              </li>
              <li>
                <Link to="/australia" className="text-gray-300 hover:text-white transition-colors">
                  Australia Visa
                </Link>
              </li>
              <li>
                <Link to="/uk" className="text-gray-300 hover:text-white transition-colors">
                  UK Visa
                </Link>
              </li>
              <li>
                <Link to="/europe" className="text-gray-300 hover:text-white transition-colors">
                  Europe Visa
                </Link>
              </li>
              <li>
                <Link to="/usa" className="text-gray-300 hover:text-white transition-colors">
                  USA Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Shwamek, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+966501367513</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@shawmekimmigration.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
              Disclaimer
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookie Policy
            </Link>
            <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Refund Policy
            </Link>
          </div>
          <div className="text-center text-gray-400">
            <p>Copyright ©2016-2024. All Rights Reserved by Shawamek Visa Immigration.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;