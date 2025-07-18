import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, DollarSign, Gift, Wrench } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface DonationFormProps {
  className?: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    donor_name: '',
    donor_email: '',
    amount: '',
    donation_type: 'monetary' as 'monetary' | 'goods' | 'service',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: 'monetary' | 'goods' | 'service') => {
    setFormData(prev => ({
      ...prev,
      donation_type: value,
      amount: value !== 'monetary' ? '' : prev.amount
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store in database
      const { error: dbError } = await supabase
        .from('donations')
        .insert([
          {
            donor_name: formData.donor_name,
            donor_email: formData.donor_email,
            amount: formData.amount ? parseFloat(formData.amount) : null,
            donation_type: formData.donation_type,
            message: formData.message || null,
          }
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save donation information');
      }

      // Send email via edge function
      const { error: emailError } = await supabase.functions.invoke('process-donation', {
        body: {
          ...formData,
          amount: formData.amount ? parseFloat(formData.amount) : undefined
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Still show success to user as donation was saved to database
      }

      toast({
        title: "Thank You for Your Donation!",
        description: "We have received your donation details and will contact you soon with further instructions.",
      });
      
      setFormData({ 
        donor_name: '', 
        donor_email: '', 
        amount: '', 
        donation_type: 'monetary', 
        message: '' 
      });
    } catch (error) {
      console.error('Donation submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem processing your donation. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={`w-full max-w-md ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary" />
          Make a Donation
        </CardTitle>
        <CardDescription>
          Support our mission with your generous contribution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="donor_name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <Input
              id="donor_name"
              name="donor_name"
              type="text"
              required
              value={formData.donor_name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="donor_email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <Input
              id="donor_email"
              name="donor_email"
              type="email"
              required
              value={formData.donor_email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="donation_type" className="block text-sm font-medium mb-2">
              Donation Type *
            </label>
            <Select value={formData.donation_type} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select donation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monetary">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Monetary Donation
                  </div>
                </SelectItem>
                <SelectItem value="goods">
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4" />
                    Goods/Supplies
                  </div>
                </SelectItem>
                <SelectItem value="service">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Service/Volunteer
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {formData.donation_type === 'monetary' && (
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-2">
                Amount (₹) *
              </label>
              <Input
                id="amount"
                name="amount"
                type="number"
                required={formData.donation_type === 'monetary'}
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="Enter amount in ₹"
                min="1"
              />
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any special message or requirements..."
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            <Heart className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Processing...' : 'Submit Donation'}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            You will receive a confirmation email with further instructions.
            Tax deduction receipts will be provided for all donations.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;