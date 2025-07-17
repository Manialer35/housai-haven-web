import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import { Button } from '@/components/ui/button';
import { Heart, Users, Home, Star, ArrowRight, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Free Admission Highlight */}
      <section className="py-16 bg-gradient-to-r from-accent-warm/30 to-accent-gentle/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white shadow-card rounded-2xl mb-6">
            <Star className="w-6 h-6 text-blue-deep mr-3" />
            <span className="text-2xl font-bold text-blue-deep">100% FREE ADMISSIONS</span>
            <Star className="w-6 h-6 text-blue-deep ml-3" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Housai Old Age Home, we believe that quality care should never be a burden. 
            All our services, accommodation, and care are provided completely free of charge.
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="heading-secondary mb-6">
                Welcome to Our Family
              </h2>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                Run by the compassionate Ramdasji Athavle Youth Foundation, Housai Old Age Home 
                provides a loving, supportive environment where elderly individuals can live with 
                dignity, comfort, and joy.
              </p>
              <p className="text-lg text-warm mb-8 leading-relaxed">
                Our mission is to create a home where every resident feels valued, cared for, 
                and surrounded by love. We offer comprehensive care, engaging activities, and 
                a warm community atmosphere.
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/about" className="inline-flex items-center">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative slide-up">
              <div className="gradient-warm rounded-3xl p-8 shadow-card">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-blue-deep mb-2">Compassionate Care</h3>
                    <p className="text-sm text-muted-foreground">24/7 caring staff</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-blue-deep mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground">Warm family environment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-blue-deep mb-2">Comfortable Living</h3>
                    <p className="text-sm text-muted-foreground">Well-furnished rooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-blue-deep mb-2">Free Services</h3>
                    <p className="text-sm text-muted-foreground">No hidden charges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glimpse of Activities */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">A Glimpse of Our Activities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We keep our residents engaged with a variety of joyful and meaningful activities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Morning Yoga", image: "/images/activities/yoga.jpg" },
              { title: "Gardening Time", image: "/images/activities/gardening.jpg" },
              { title: "Festival Celebrations", image: "/images/activities/festival.jpg" },
              { title: "Board Games & Fun", image: "/images/activities/games.jpg" },
              { title: "Art & Craft Sessions", image: "/images/activities/art.jpg" },
              { title: "Spiritual Prayers", image: "/images/activities/prayers.jpg" },
            ].map((activity, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-card bg-white hover:shadow-lg transition duration-300 group"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 text-center">
                  <h4 className="text-xl font-semibold text-blue-deep">{activity.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Quick Contact */}
      <section className="py-16 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to visit our facility or learn more about our admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact" className="inline-flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="warm" size="lg">
                <Link to="/donate" className="inline-flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
