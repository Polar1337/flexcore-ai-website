import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Cloud, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import content from '../content';
import consultingImage from '../assets/ai-consulting.webp';
import automationImage from '../assets/ai-workflow.png';
import saasImage from '../assets/ai-data-viz.png';

const ServicesPage = () => {
  const serviceImages = {
    consulting: consultingImage,
    automation: automationImage,
    saas: saasImage
  };

  const ServiceSection = ({ service, image, icon: Icon, reverse = false }) => (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          <div className={reverse ? 'lg:col-start-2' : ''}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {service.title}
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.subtitle}
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Services List */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {service.services.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Ihre Vorteile
              </h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Beratung anfragen
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
          
          <div className={reverse ? 'lg:col-start-1' : ''}>
            <img 
              src={image}
              alt={service.title}
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {content.services.hero.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {content.services.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Kostenlose Beratung
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#consulting">
                Services entdecken
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Consulting Service */}
      <div id="consulting">
        <ServiceSection 
          service={content.services.consulting}
          image={serviceImages.consulting}
          icon={Brain}
        />
      </div>

      {/* Automation Service */}
      <div id="automation" className="bg-gray-50">
        <ServiceSection 
          service={content.services.automation}
          image={serviceImages.automation}
          icon={Zap}
          reverse={true}
        />
      </div>

      {/* SaaS Service */}
      <div id="saas">
        <ServiceSection 
          service={content.services.saas}
          image={serviceImages.saas}
          icon={Cloud}
        />
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, welche KI-Lösung am besten zu Ihrem Unternehmen passt. 
            Vereinbaren Sie noch heute ein kostenloses Beratungsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Jetzt Termin vereinbaren
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">
                Mehr über uns erfahren
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

