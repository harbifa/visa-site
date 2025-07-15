import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import WhyChooseAlshawamekh from './pages/blog/WhyChooseAlshawamekh';
import ImmigrationGuide from './pages/blog/ImmigrationGuide';
import NewPrograms from './pages/blog/NewPrograms';
import SuccessTips from './pages/blog/SuccessTips';
import Canada from './pages/Canada';
import Australia from './pages/Australia';
import UK from './pages/UK';
import Europe from './pages/Europe';
import USA from './pages/USA';
import Payment from './pages/Payment';
import PaymentDemo from './pages/PaymentDemo';
import PaymentCallback from './pages/PaymentCallback';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';
import CookiePolicy from './pages/CookiePolicy';
import RefundPolicy from './pages/RefundPolicy';

function App() {
  // Initialize language system
  console.log("المفتاح:", import.meta.env.VITE_MOYASAR_PUBLISHABLE_KEY);

  useLanguage();

  return (
    <Router>
      <div className="min-h-screen flex flex-col language-transition">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/why-choose-alshawamekh" element={<WhyChooseAlshawamekh />} />
            <Route path="/blog/complete-immigration-guide" element={<ImmigrationGuide />} />
            <Route path="/blog/new-immigration-programs" element={<NewPrograms />} />
            <Route path="/blog/immigration-success-tips" element={<SuccessTips />} />
            <Route path="/canada" element={<Canada />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/uk" element={<UK />} />
            <Route path="/europe" element={<Europe />} />
            <Route path="/usa" element={<USA />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/demo" element={<PaymentDemo />} />
            <Route path="/payment/callback" element={<PaymentCallback />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );


}

export default App;