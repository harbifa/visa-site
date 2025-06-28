import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, CreditCard } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const countries = [
    {
      name: 'Canada',
      path: '/canada',
      services: ['Express Entry Visa', 'Provincial Nomination Program', 'Atlantic Immigration Pilot', 'Study Visa', 'Visit Visa', 'Family/Spouse Visa']
    },
    {
      name: 'Australia', 
      path: '/australia',
      services: ['Skilled Nominated Visa', 'Study Visa', 'Visit Visa', 'Spouse Visa']
    },
    {
      name: 'United Kingdom',
      path: '/uk', 
      services: ['Sole Representative Program', 'UK Student Visa', 'UK Visit Visa']
    },
    {
      name: 'Europe',
      path: '/europe',
      services: ['Job Seeker Visa (Germany)', 'Study Visa', 'Visit Visa', 'Spouse Visa']
    },
    {
      name: 'USA',
      path: '/usa',
      services: ['E2 Treaty Investor Visa', 'EB-5 Immigrant Investor', 'Student Visa', 'Visit Visa', 'Spouse Visa']
    }
  ];

  const handlePayment = () => {
    // Placeholder for Moyasar payment integration
    alert('Payment integration with Moyasar will be implemented here');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Shwamek, Saudi Arabia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@shawamek.sa</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+966501367513</span>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-md flex items-center space-x-2 transition-colors"
          >
            <CreditCard size={16} />
            <span>Pay Online</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-900">
            Immigration Services
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
              About
            </Link>
            
            {/* Countries Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 transition-colors"
                onMouseEnter={() => setActiveDropdown('countries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>
              
              {activeDropdown === 'countries' && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border z-50"
                  onMouseEnter={() => setActiveDropdown('countries')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="p-4 grid grid-cols-1 gap-4">
                    {countries.map((country) => (
                      <div key={country.name} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <Link
                          to={country.path}
                          className="block font-semibold text-blue-900 hover:text-blue-700 mb-2"
                        >
                          {country.name}
                        </Link>
                        <div className="text-sm text-gray-600 space-y-1">
                          {country.services.slice(0, 3).map((service) => (
                            <div key={service}>{service}</div>
                          ))}
                          {country.services.length > 3 && (
                            <div className="text-blue-600">+ {country.services.length - 3} more services</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-blue-900">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900">
                About
              </Link>
              {countries.map((country) => (
                <Link
                  key={country.name}
                  to={country.path}
                  className="text-gray-700 hover:text-blue-900 pl-4"
                >
                  {country.name}
                </Link>
              ))}
              <Link to="/contact" className="text-gray-700 hover:text-blue-900">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;