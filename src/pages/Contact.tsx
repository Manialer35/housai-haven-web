import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us | Immediate Admission Available
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Get immediate free admission to Housai Old Age Home, Sangli's premier elderly care facility. 
            Call +91-98765-43210 for instant consultation. No waiting lists, no documentation fees, 
            no hidden charges. Serving senior citizens across Maharashtra with 24/7 medical support 
            and compassionate care since 1995.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <h2 className="heading-secondary mb-8">Get Immediate Free Admission | No Waiting Period</h2>
              <p className="text-lg text-warm mb-8 leading-relaxed">
                Need immediate elderly care admission in Mumbai? Contact India's most trusted free old age home 
                today. Our admission team provides instant consultation for senior citizens requiring geriatric care, 
                medical support, or accommodation. Same-day visits available for families seeking quality elderly 
                care without financial burden. Expert staff available 24/7 for emergency admissions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-deep mb-1">Phone</h3>
                    <p className="text-muted-foreground">0233-3560136</p>
{/*                     <p className="text-muted-foreground">+91 87654 32109</p> */}
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-deep mb-1">Email</h3>
                    <p className="text-muted-foreground">info@housaioldagehome.com</p>
                    <p className="text-muted-foreground">ramdasjiatahawaleyuthfoundation@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-deep mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Housai Old Age Home<br />
                      Shalini Nagar, 30, Near Maruti Temple<br />
                      Sangli, Maharashtra - 416416<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-deep mb-1">Visiting Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 10:00 AM - 6:00 PM<br />
                      Emergency Contact: 24/7 Available
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Special Note */}
              <div className="bg-accent-warm/50 rounded-2xl p-6 mt-8 border-l-4 border-blue-medium">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-blue-deep flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-deep mb-2">Schedule a Visit</h4>
                    <p className="text-muted-foreground">
                      We encourage families to visit our facility to see our caring environment firsthand. 
                      Please call ahead to schedule your visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="slide-up">
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-blue-deep mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-blue-deep mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-deep mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-blue-deep mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-blue-deep mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="What is this about?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-deep mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full"
                      placeholder="Please share your message, questions, or how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" variant="default" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="heading-secondary mb-4">Visit Our Location</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome you to visit us. Here's where we’re located:
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card">
            <iframe
              title="Housai Old Age Home Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.971735035624!2d74.601113!3d16.877292699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12388fac51635%3A0xbe70e03a222a9457!2sHousai%20Old%20Age%20Home!5e0!3m2!1sen!2sin!4v1752749484888!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] border-0"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-accent-warm/40 to-accent-gentle/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-card text-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-deep mb-4">24/7 Emergency Contact</h2>
            <p className="text-lg text-muted-foreground mb-6">
              For urgent matters or emergencies, our care team is available around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="default" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: +91 98765 43210
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                urgent@housaioldagehome.org
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
