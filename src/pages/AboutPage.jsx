import React from 'react';
import { CheckCircle, Target, Eye, Heart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import content from '../content';
import aboutImage from '../assets/ai-consulting.webp';

const AboutPage = () => {
  const valueIcons = {
    'Exzellenz': Target,
    'Innovation': Eye,
    'Partnerschaft': Users,
    'Transparenz': Heart
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {content.about.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {content.about.hero.subtitle}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Seit 2020 am Markt
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  150+ erfolgreiche Projekte
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutImage}
                alt="AI Consulting Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {content.about.mission.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.about.mission.text}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {content.about.vision.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.about.vision.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.about.values.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.about.values.items.map((value, index) => {
              const IconComponent = valueIcons[value.title] || Target;
              
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.about.whyUs.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Was uns von anderen KI-Beratungen unterscheidet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content.about.whyUs.items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

