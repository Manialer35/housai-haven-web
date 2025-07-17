import React from 'react';
import { Heart, Users, Home, Shield, Star, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Star className="w-6 h-6 text-white mr-3" />
            <span className="text-lg font-semibold text-white">100% FREE ADMISSIONS</span>
            <Star className="w-6 h-6 text-white ml-3" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A compassionate initiative by Ramdasji Athavle Youth Foundation, 
            dedicated to providing loving care for our elderly community.
          </p>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="heading-secondary mb-6">
                Ramdasji Athavle Youth Foundation
              </h2>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                Founded with the noble vision of serving society's most vulnerable members, 
                the Ramdasji Athavle Youth Foundation has been a beacon of hope and compassion 
                for years. Named after the revered spiritual leader Ramdasji Athavle, our 
                foundation embodies his teachings of selfless service and unconditional love.
              </p>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                Our youth-driven initiative believes that caring for our elders is not just 
                a responsibility but a privilege. Through Housai Old Age Home, we've created 
                a sanctuary where elderly individuals can live their golden years with dignity, 
                respect, and joy.
              </p>
              <div className="bg-accent-warm/50 rounded-2xl p-6 border-l-4 border-blue-medium">
                <p className="text-blue-deep font-semibold italic">
                  "Service to humanity is service to God. When we care for our elders, 
                  we honor our past and build a better future."
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Foundation Philosophy</p>
              </div>
            </div>
            <div className="slide-up">
              <div className="gradient-warm rounded-3xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-blue-deep mb-6 text-center">
                  Our Values
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-deep mb-2">Compassion</h4>
                      <p className="text-muted-foreground">Every action is guided by love and empathy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-deep mb-2">Dignity</h4>
                      <p className="text-muted-foreground">Respecting the wisdom and experience of our elders</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-deep mb-2">Community</h4>
                      <p className="text-muted-foreground">Creating a warm, family-like environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-subtle/50 to-accent-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guided by compassion and driven by purpose
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-card fade-in">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-deep mb-4 text-center">Our Mission</h3>
              <p className="text-warm leading-relaxed text-center">
                To provide comprehensive, compassionate, and completely free care to elderly 
                individuals, ensuring they live their golden years with dignity, comfort, and joy 
                in a loving community environment.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-card slide-up">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-deep mb-4 text-center">Our Vision</h3>
              <p className="text-warm leading-relaxed text-center">
                To be a model of elder care that inspires communities worldwide, where every 
                elderly person is valued, respected, and surrounded by love, regardless of 
                their financial circumstances.
              </p>
            </div>
          </div>
        </div>
        {/* Board of Directors */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Board of Directors</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the passionate leaders behind the Ramdasji Athavle Youth Foundation
              </p>
            </div>
        
            {/* Main Director */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              <img
                src="@/assets/main-director.jpg"
                alt="Main Director"
                className="w-48 h-48 rounded-full object-cover shadow-card"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-deep mb-2">Shri. Suresh Athavle</h3>
                <p className="text-muted-foreground mb-2">Founder & Chief Director</p>
                <p className="text-muted-foreground">Contact: <a href="tel:+919812345678" className="text-blue-medium hover:underline">+91 98123 45678</a></p>
              </div>
            </div>
        
            {/* List of Directors */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Meena Patil", position: "Managing Director", phone: "+91 98222 33445" },
                { name: "Ramesh Deshmukh", position: "Operations Director", phone: "+91 98444 55667" },
                { name: "Kavita Joshi", position: "Finance Director", phone: "+91 98765 43210" },
                { name: "Anil Pawar", position: "Medical Director", phone: "+91 98333 66778" },
                { name: "Sunita Khedekar", position: "Programs Director", phone: "+91 98000 11223" },
                { name: "Vikas Bhosale", position: "HR Director", phone: "+91 98666 77889" }
              ].map((director, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card transition hover:shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-blue-deep">{director.name}</h4>
                  <p className="text-muted-foreground">{director.position}</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Contact: <a href={`tel:${director.phone}`} className="text-blue-medium hover:underline">{director.phone}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive care and services, all provided free of charge
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Comfortable Accommodation",
                description: "Well-furnished rooms with all basic amenities and a homely atmosphere"
              },
              {
                icon: Heart,
                title: "24/7 Medical Care",
                description: "Professional healthcare services and regular health monitoring"
              },
              {
                icon: Users,
                title: "Nutritious Meals",
                description: "Healthy, balanced meals prepared with love and dietary considerations"
              },
              {
                icon: Star,
                title: "Recreational Activities",
                description: "Daily programs, celebrations, and engaging activities for well-being"
              },
              {
                icon: Shield,
                title: "Safety & Security",
                description: "24/7 security and a safe environment for peace of mind"
              },
              {
                icon: Heart,
                title: "Emotional Support",
                description: "Counseling, companionship, and a caring community atmosphere"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-gentle hover:shadow-card transition-smooth fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-deep mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Admission Emphasis */}
      <section className="py-16 bg-gradient-to-r from-accent-warm/40 to-accent-gentle/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 gradient-primary rounded-2xl mb-6">
              <Star className="w-6 h-6 text-white mr-3" />
              <span className="text-xl font-bold text-white">COMPLETELY FREE</span>
              <Star className="w-6 h-6 text-white ml-3" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-6">
              No Charges, No Hidden Costs
            </h2>
            <p className="text-lg text-warm mb-6 leading-relaxed">
              At Housai Old Age Home, we firmly believe that quality elder care should never 
              be a financial burden. All our services - from accommodation and meals to 
              medical care and recreational activities - are provided absolutely free of charge.
            </p>
            <div className="bg-blue-subtle rounded-2xl p-6">
              <p className="text-blue-deep font-semibold">
                "Every elderly person deserves to live with dignity and comfort, 
                regardless of their financial situation."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
