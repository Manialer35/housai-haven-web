import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';
import logo from '@/assets/HousaiLogo.png'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/about' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Activities', href: '/activities' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Donate', href: '/donate' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-blue-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl object-cover" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-deep">Housai</span>
              <span className="text-xs text-muted-foreground">Old Age Home</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-gentle'
                    : 'text-foreground hover:bg-blue-subtle hover:text-blue-deep'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Button asChild variant="warm" size="sm">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-blue-lighter">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-smooth ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-blue-subtle hover:text-blue-deep'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild variant="warm" size="sm" className="w-full">
                <Link to="/donate" onClick={() => setIsOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
