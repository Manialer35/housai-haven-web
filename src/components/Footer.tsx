import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Housai Old Age Home</h3>
                <p className="text-sm text-white/70">Ramdasji Athavle Youth Foundation</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              A compassionate initiative providing free, loving care for elderly individuals. 
              Creating a home where every resident feels valued, cared for, and surrounded by love.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">100% FREE ADMISSIONS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-white/80 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-white/80 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white/80">+91 98765 43210</p>
                  <p className="text-white/80">+91 87654 32109</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white/80">info@housaioldagehome.org</p>
                  <p className="text-white/80">admin@rayfoundation.org</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <p>Housai Old Age Home</p>
                  <p>123 Care Street, Serenity Gardens</p>
                  <p>City, State - 123456, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white/80">Visiting Hours:</p>
                  <p className="text-white/80">Mon-Sun: 10AM - 6PM</p>
                  <p className="text-white/80">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} Housai Old Age Home. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Operated by Ramdasji Athavle Youth Foundation
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm">
                Built with ❤️ for our beloved elders
              </p>
              <p className="text-white/60 text-xs mt-1">
                A nonprofit initiative for elder care
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;