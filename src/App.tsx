import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Canada from './pages/Canada';
import Australia from './pages/Australia';
import UK from './pages/UK';
import Europe from './pages/Europe';
import USA from './pages/USA';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/canada" element={<Canada />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/uk" element={<UK />} />
            <Route path="/europe" element={<Europe />} />
            <Route path="/usa" element={<USA />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;