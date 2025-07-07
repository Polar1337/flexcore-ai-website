import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;

