import React from 'react';
import ClickableImage from '@/components/ClickableImage';
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
            About Housai Old Age Home | Khasdar Ramdasji Athawle Youth Foundation
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Discover the story behind India's most trusted free elderly care center, established by 
            the renowned Ramdasji Athavle Youth Foundation. Serving 500+ families across Maharashtra 
            with world-class geriatric care, medical support, and compassionate accommodation - 
            completely free of cost since our inception.
          </p>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="heading-secondary mb-6">
                Khasdar Ramdasji Athawle Youth Foundation - Pioneering Free Elderly Care in India
              </h2>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                Established in 2007 under the visionary guidance of Union Minister Hon. Ramdas Athawle Saheb, 
                the Khasdar Ramdasji Athawle Youth Foundation (Regd.) is a leading social enterprise in India, 
                committed to holistic societal development. Our foundation focuses on empowering the disabled, 
                orphans, economically backward communities, child laborers, and senior citizens through inclusive
                welfare initiatives and awareness programs across Maharashtra and beyond.
              </p>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                With active operations across India, and a strong presence in Sangli district,
                our mission is to bridge the gap between underprivileged citizens and government 
                welfare schemes. We conduct impactful programs addressing healthcare, agriculture,
                arts, education, sports, culture, and social reform. Through a dedicated team of 
                volunteers and experts, we reach the grassroots to implement sustainable change.
              </p>
              <p className="text-lg text-warm mb-6 leading-relaxed">
                Our Key Initiatives
                1. Empowerment of marginalized communities including the disabled, widows, elderly,
                and economically weaker sections.
                2. Organizing state-wide awareness lectures, cultural events, and harmony campaigns 
                on national holidays like 26th January (Republic Day) and 15th August (Independence Day).
                3. Housing support: Provided permanent homes to over 458 homeless individuals in 
                Sangli district.
                4. Promoting education by supporting talented students with hostel accommodations and
                college admissions.
                5. Special support for Bahujans, farmers, and patients with chronic and life-threatening 
                diseases.
                6. Launching Sangli Helpline: An immediate assistance platform inaugurated at Sahyadri Guest
                House, Mumbai by Union Minister Ramdas Athawle on December 25, the foundation’s anniversary.
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
              <h3 className="text-2xl font-bold text-blue-deep mb-4 text-center">Our Mission - Free Elderly Care for All</h3>
              <p className="text-warm leading-relaxed text-center">
                To establish India's largest network of free old age homes, providing comprehensive 
                geriatric care including medical support, physiotherapy, dementia care, nutritional 
                counseling, and recreational therapy. Our goal is to ensure every elderly individual 
                across Maharashtra has access to quality care regardless of their financial background, 
                social status, or health condition.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-card slide-up">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-deep mb-4 text-center">Our Vision - Transforming Elderly Care in India</h3>
              <p className="text-warm leading-relaxed text-center">
                To become India's premier elderly care organization, establishing 50+ free old age 
                homes across the country by 2030. We envision a society where aging is celebrated, 
                where senior citizens receive world-class medical care, emotional support, and 
                social engagement, setting new standards for geriatric care that other nations 
                will aspire to replicate.
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
            <ClickableImage
              src="/assets/Founder.png"
              alt="Shri. Sandesh Bhau Bhandare - President and Founder"
              className="w-48 h-48 rounded-full object-cover shadow-card"
            />
            <div>
              <h3 className="text-2xl font-bold text-blue-deep mb-2">Shri. Sandesh Bhau Bhandare</h3>
              <p className="text-lg text-blue-medium mb-2">President & Founder</p>
              <p className="text-muted-foreground mb-2">Visionary leader with a passion for serving the elderly</p>
              <p className="text-muted-foreground">
                Under his dynamic leadership, the foundation was established with a mission to serve underprivileged senior citizens
                with love, dignity, and holistic care across Maharashtra.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Direct Contact: <a href="tel:+919975601777" className="text-blue-medium hover:underline font-semibold">+91 99756 01777</a>
              </p>
            </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
              <ClickableImage
                src="/assets/Chairman.png"
                alt="Shri. Siddharth Anil Kamble - Founder and Chief Director of Housai Old Age Home Mumbai"
                className="w-48 h-48 rounded-full object-cover shadow-card"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-deep mb-2">Shri. Siddharth Anil Kamble</h3>
                <p className="text-lg text-blue-medium mb-2">Chairman - Leading Free Elderly Care Expert in Maharashtra</p>
                <p className="text-muted-foreground mb-2">25+ Years Experience in Geriatric Care & Social Work</p>
                <p className="text-muted-foreground">Direct Contact: <a href="tel:+917058581111" className="text-blue-medium hover:underline font-semibold">+917058581111</a></p>
                <p className="text-sm text-muted-foreground mt-2">Available for immediate consultation regarding elderly care admission</p>
              </div>
            </div>
        
            {/* List of Directors */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Shri Jaywant Baburao Mali", position: "Vice Chairman" },
                { name: "Shri Nilesh Bhimrao Bhandare", position: "Sachiv" },
                { name: "Shri Dhanraj Vinayak Jadhav", position: "Sanchalak" },
                { name: "Shri Hariram Bhagwan Khabale", position: "Sanchalak" },
                { name: "Shri Ajay Shivajirao Pawar", position: "Sanchalak" },
                { name: "Adv. Shivajirao Piraji Kamble", position: "Sanchalak" },
                { name: "Shri Nazir Munir Mujawar", position: "Sanchalak" },
                { name: "Shri Mahendra Dharma Gade", position: "Sanchalak" },
                { name: "Shri Jitendra Dilip Pawar", position: "Sanchalak" },
                { name: "Sau Chitratai Bhimrao Bhandare", position: "Sanchalika" },
                { name: "Shri Adv. Atul Dange", position: "Sanchalak" },
                { name: "Shri Vikas Shankarrao Bhandare", position: "Sanchalak" }
      
              ].map((director, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card transition hover:shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-blue-deep">{director.name}</h4>
                  <p className="text-muted-foreground">{director.position}</p>
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
