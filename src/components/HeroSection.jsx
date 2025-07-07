import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import content from '../content';
import heroImage from '../assets/ai-business-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="AI Business Transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 mb-8">
            <span className="text-sm font-medium">
              🚀 Ihre KI-Transformation beginnt hier
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {content.homepage.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            {content.homepage.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            >
              <Link to="/contact" className="flex items-center gap-2">
                {content.homepage.hero.cta}
                <ArrowRight size={20} />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Link to="/services" className="flex items-center gap-2">
                <Play size={20} />
                {content.homepage.hero.ctaSecondary}
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">150+</span>
                <span className="text-sm">Erfolgreiche Projekte</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">95%</span>
                <span className="text-sm">Kundenzufriedenheit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">24/7</span>
                <span className="text-sm">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

