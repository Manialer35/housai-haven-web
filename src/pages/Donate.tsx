import React from 'react';
import ClickableImage from '@/components/ClickableImage';
import DonationForm from '@/components/DonationForm';
import { Button } from '@/components/ui/button';
import { Heart, Users, Home, Utensils, Stethoscope, Gift, Star, ArrowRight } from 'lucide-react';
import donationQR from '@/assets/donation-qr.png';

const Donate = () => {
  const donationAreas = [
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Help provide healthy, balanced meals for our elderly residents',
      impact: 'Your ₹500 can feed one resident for a week'
    },
    {
      icon: Stethoscope,
      title: 'Medical Care',
      description: 'Support medical expenses, medicines, and healthcare services',
      impact: 'Your ₹2000 can cover monthly medical expenses for one resident'
    },
    {
      icon: Home,
      title: 'Infrastructure',
      description: 'Maintain and improve our facilities for better living conditions',
      impact: 'Your ₹5000 can help furnish a comfortable room'
    },
    {
      icon: Users,
      title: 'Activities & Programs',
      description: 'Fund recreational activities, celebrations, and wellness programs',
      impact: 'Your ₹1000 can organize a monthly celebration'
    },
    {
      icon: Gift,
      title: 'Essential Supplies',
      description: 'Provide clothing, personal care items, and daily necessities',
      impact: 'Your ₹300 can provide personal care items for one month'
    },
    {
      icon: Heart,
      title: 'General Support',
      description: 'Support overall operations and emergency needs',
      impact: 'Every contribution helps us serve better'
    }
  ];

  const waysToDonate = [
    {
      type: 'Monthly Sponsorship',
      amount: '₹2,000 - ₹10,000',
      description: 'Become a monthly sponsor and directly support the care of our residents',
      benefits: ['Regular updates on your impact', 'Annual visit opportunities', 'Tax benefits under 80G']
    },
    {
      type: 'One-time Donation',
      amount: 'Any Amount',
      description: 'Make a one-time contribution to support our mission',
      benefits: ['Immediate impact', 'Tax deduction certificate', 'Acknowledgment letter']
    },
    {
      type: 'In-kind Donations',
      amount: 'Items & Supplies',
      description: 'Donate essential items, medical equipment, or food supplies',
      benefits: ['Direct contribution', 'Hands-on involvement', 'Community connection']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Heart className="w-6 h-6 text-white mr-3" />
            <span className="text-lg font-semibold text-white">Support Our Mission</span>
            <Heart className="w-6 h-6 text-white ml-3" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
           Tax-Deductible Donations | 80G Benefits
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            Support India's premier free elderly care organization with tax-deductible donations. 
            Your contribution enables us to provide free accommodation, medical care, physiotherapy, 
            and nutritional support to 500+ senior citizens across Maharashtra. Receive 80G tax 
            benefits and detailed impact reports showing how your donation transforms elderly lives.
          </p>
          <Button variant="outline" size="hero" className="border-white/30 text-white hover:bg-white/10">
            <Heart className="w-5 h-5 mr-2" />
            Donate Now
          </Button>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Why Your Support Matters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every donation, big or small, makes a real difference in the lives of our elderly residents
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-gentle hover:shadow-card transition-smooth fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-deep mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <div className="bg-blue-subtle rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-deep">{area.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Donate */}
      <section className="py-20 bg-gradient-to-r from-blue-subtle/50 to-accent-warm/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">Ways to Contribute</h2>
            <p className="text-lg text-muted-foreground">
              Choose the donation method that works best for you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {waysToDonate.map((way, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-card slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-deep mb-2">{way.type}</h3>
                  <p className="text-lg font-semibold text-blue-medium">{way.amount}</p>
                </div>
                
                <p className="text-muted-foreground mb-6 text-center">{way.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {way.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-blue-medium mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button variant="default" size="lg" className="w-full">
                  Choose This Option
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
            <div className="text-center mb-8">
              <h2 className="heading-secondary mb-4">Your Impact in Numbers</h2>
              <p className="text-lg text-muted-foreground">
                See how your contributions make a real difference
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center fade-in">
                <div className="text-4xl font-bold text-blue-deep mb-2">100+</div>
                <p className="text-muted-foreground">Elderly residents cared for</p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-blue-deep mb-2">365</div>
                <p className="text-muted-foreground">Days of care annually</p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-blue-deep mb-2">3</div>
                <p className="text-muted-foreground">Nutritious meals daily</p>
              </div>
              <div className="text-center fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-blue-deep mb-2">24/7</div>
                <p className="text-muted-foreground">Medical care available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Details */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How to Donate
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Choose Your Donation Type</h3>
                    <p className="text-white/80">Select from monthly sponsorship, one-time donation, or in-kind contributions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Make Your Contribution</h3>
                    <p className="text-white/80">Use our secure online portal or visit us directly to make your donation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Receive Updates</h3>
                    <p className="text-white/80">Get regular updates on how your donation is making a difference in our residents' lives.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Bank Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-white text-sm">
                  <div>
                    <span className="font-semibold">Account Name:</span>
                    <p>Khaasdar Ramdasji Athawle Youth Foundation</p>
                  </div>
                  <div>
                    <span className="font-semibold">Account Number:</span>
                    <p>161120110000274</p>
                  </div>
                  <div>
                    <span className="font-semibold">IFSC Code:</span>
                    <p>BKID0001611</p>
                  </div>
                  <div>
                    <span className="font-semibold">Bank Name:</span>
                    <p>Bank of India, Tasgaon</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/10 rounded-xl">
                  <p className="text-xs text-white/90">
                    <strong>Note:</strong> All donations are eligible for tax deduction under Section 80G. 
                    Receipt will be provided for all contributions.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">Scan & Pay via UPI</h4>
                  <ClickableImage
                    src={donationQR}
                    alt="UPI QR Code for donating to Housai Old Age Home Mumbai - Instant tax-deductible donations"
                    className="mx-auto w-32 h-32 rounded-lg border border-white/30 shadow-md"
                  />
                  <p className="text-xs text-white/70 mt-2">Scan using any UPI app to donate directly</p>
                </div>
              </div>
            </div>
            
            {/* Donation Form */}
            <div className="lg:col-span-1">
              <DonationForm className="bg-white/95 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-16 bg-gradient-to-r from-accent-warm/40 to-accent-gentle/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card max-w-4xl mx-auto">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-deep mb-6">
              Thank You for Your Kindness
            </h2>
            <p className="text-lg text-warm mb-6 leading-relaxed">
              Your generosity enables us to continue our mission of providing loving care to elderly 
              individuals who need it most. Every donation, no matter the size, brings comfort, 
              dignity, and joy to our residents' lives.
            </p>
            <div className="bg-blue-subtle rounded-2xl p-6">
              <p className="text-blue-deep font-semibold italic">
                "The best way to find yourself is to lose yourself in the service of others." 
                - Mahatma Gandhi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
