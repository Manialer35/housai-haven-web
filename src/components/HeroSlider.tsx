import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import hero1 from '@/assets/poster 4.png';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "A Home Where Love Lives",
      subtitle: "Providing compassionate care and a warm family environment for our elderly community",
      cta: "Learn More About Us"
    },
    {
      image: hero2,
      title: "Joyful Activities & Celebrations",
      subtitle: "Engaging programs, festivals, and daily activities that keep our residents active and happy",
      cta: "View Our Activities"
    },
    {
      image: hero3,
      title: "Peaceful & Spiritual Environment",
      subtitle: "A serene atmosphere where our residents find peace, comfort, and spiritual fulfillment",
      cta: "Visit Us Today"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 gradient-hero"></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  {/* Free Admission Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-accent-warm/90 backdrop-blur-sm rounded-full mb-6 fade-in">
                    <Star className="w-4 h-4 text-blue-deep mr-2" />
                    <span className="text-sm font-semibold text-blue-deep">
                      100% FREE ADMISSIONS
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight slide-up">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed slide-up">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 slide-up">
                    <Button asChild variant="hero" size="hero">
                      <Link to="/about">{slide.cta}</Link>
                    </Button>
                    <Button asChild variant="outline" size="hero" className="border-white/30 text-white hover:bg-white/10">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-smooth z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-smooth z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
