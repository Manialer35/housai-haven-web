import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import ClickableImage from '@/components/ClickableImage';
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
            <span className="text-2xl font-bold text-blue-deep">100% FREE ADMISSIONS - NO HIDDEN CHARGES</span>
            <Star className="w-6 h-6 text-blue-deep ml-3" />
          </div>
          <h2 className="text-3xl font-bold text-blue-deep mb-4">India's Premier Free Old Age Home in Mumbai</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Housai Old Age Home offers completely free elderly care services including accommodation, 
            24/7 medical support, nutritious meals, and recreational activities. No admission fees, 
            no monthly charges - just compassionate care for senior citizens across Maharashtra. 
            Immediate admission available for elderly individuals seeking quality geriatric care.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-blue-deep font-semibold">
            <span>✓ Free Medical Care</span>
            <span>✓ Free Accommodation</span>
            <span>✓ Free Meals</span>
            <span>✓ 24/7 Support</span>
            <span>✓ No Documentation Fees</span>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="heading-secondary mb-6">
                Best Free Senior Living Facility in Mumbai, Maharashtra
              </h2>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                Established by the renowned Ramdasji Athavle Youth Foundation, Housai Old Age Home 
                stands as India's leading free elderly care center, providing comprehensive geriatric 
                services without any cost. Our state-of-the-art facility serves senior citizens from 
                Mumbai, Pune, Nashik, and across Maharashtra with world-class amenities and 24/7 medical support.
              </p>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                We specialize in elderly care services including dementia care, physiotherapy, 
                nutritional counseling, and recreational therapy. Our certified nursing staff ensures 
                round-the-clock monitoring while maintaining a warm, family-like environment that 
                promotes emotional well-being and social interaction among residents.
              </p>
              <p className="text-lg text-warm mb-8 leading-relaxed">
                With over 500+ satisfied families and a 4.9-star rating, we are recognized as 
                Maharashtra's most trusted free old age home, offering admission to elderly individuals 
                regardless of their financial background or health condition.
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
            <h2 className="heading-secondary mb-4">Daily Activities at India's Best Free Old Age Home</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience our comprehensive elderly care programs including yoga therapy, recreational 
              activities, festival celebrations, and wellness sessions designed for senior citizens. 
              Our activity calendar ensures physical fitness, mental stimulation, and emotional well-being.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Morning Yoga & Exercise Therapy for Seniors", image: "/images/activities/yoga.jpg" },
              { title: "Therapeutic Gardening for Elderly Wellness", image: "/images/activities/gardening.jpg" },
              { title: "Festival Celebrations & Cultural Events", image: "/images/activities/festival.jpg" },
              { title: "Brain Training Games & Mental Stimulation", image: "/images/activities/games.jpg" },
              { title: "Art Therapy & Creative Expression Sessions", image: "/images/activities/art.jpg" },
              { title: "Spiritual Prayer Sessions & Meditation", image: "/images/activities/prayers.jpg" },
            ].map((activity, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-card bg-white hover:shadow-lg transition duration-300 group"
              >
                <ClickableImage
                  src={activity.image}
                  alt={`${activity.title} at Housai Old Age Home - Free elderly care activities in Mumbai`}
                  className="w-full h-52"
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
              Get Immediate Free Admission - Call Now!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact Mumbai's most trusted free old age home today. No waiting lists, no documentation 
              fees, no admission charges. Visit our facility or call for immediate elderly care admission. 
              Serving senior citizens across Maharashtra with dignity and compassion.
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
