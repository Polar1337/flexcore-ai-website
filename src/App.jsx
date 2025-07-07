import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Placeholder routes for legal pages */}
            <Route path="/impressum" element={<div className="pt-16 p-8 text-center"><h1>Impressum</h1><p>Impressum Seite wird noch erstellt.</p></div>} />
            <Route path="/datenschutz" element={<div className="pt-16 p-8 text-center"><h1>Datenschutz</h1><p>Datenschutz Seite wird noch erstellt.</p></div>} />
            <Route path="/agb" element={<div className="pt-16 p-8 text-center"><h1>AGB</h1><p>AGB Seite wird noch erstellt.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
