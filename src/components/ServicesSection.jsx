import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Cloud, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import content from '../content';

const ServicesSection = () => {
  const iconMap = {
    Brain: Brain,
    Zap: Zap,
    Cloud: Cloud
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {content.homepage.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.homepage.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.homepage.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild 
                    className="w-full bg-primary text-white hover:bg-primary/90 border-primary transition-all"
                  >
                    <Link to="/services" className="flex items-center justify-center gap-2">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für Ihre KI-Transformation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann. 
              Vereinbaren Sie noch heute ein kostenloses Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact" className="flex items-center gap-2">
                  Kostenlose Beratung
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Alle Leistungen ansehen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

