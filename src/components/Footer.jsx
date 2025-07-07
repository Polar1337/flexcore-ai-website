import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import flexcoreLogo from '../assets/flexcore-logo.png';
import content from '../content';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={flexcoreLogo} 
                alt="flexcore.ai Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">
                {content.company.name}
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {content.footer.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href={`mailto:${content.contact.info.email}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {content.contact.info.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href={`tel:${content.contact.info.phone.replace(/\s/g, '')}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {content.contact.info.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <address className="text-gray-300 not-italic">
                  {content.contact.info.address.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </address>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {content.footer.links.company.title}
            </h3>
            <ul className="space-y-3">
              {content.footer.links.company.items.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {content.footer.links.legal.title}
            </h3>
            <ul className="space-y-3">
              {content.footer.links.legal.items.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">
                {content.footer.links.social.title}
              </h4>
              <div className="flex gap-4">
                <a 
                  href={content.footer.links.social.items[0].href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={content.footer.links.social.items[1].href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {content.footer.copyright}
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/impressum" className="text-gray-400 hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-gray-400 hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <Link to="/agb" className="text-gray-400 hover:text-primary transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

