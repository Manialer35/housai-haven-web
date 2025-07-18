import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface DonationData {
  donor_name: string;
  donor_email: string;
  amount?: number;
  donation_type: 'monetary' | 'goods' | 'service';
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const donationData: DonationData = await req.json();
    console.log("Donation submission:", donationData);

    // Send notification email to the organization
    const emailResponse = await resend.emails.send({
      from: "Housai Old Age Home <noreply@housaioldagehome.com>",
      to: ["info@housaioldagehome.com"],
      subject: `New Donation: ${donationData.donation_type === 'monetary' ? `₹${donationData.amount}` : donationData.donation_type}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Donation Received
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">Donor Information</h3>
            <p><strong>Name:</strong> ${donationData.donor_name}</p>
            <p><strong>Email:</strong> ${donationData.donor_email}</p>
            <p><strong>Donation Type:</strong> ${donationData.donation_type}</p>
            ${donationData.amount ? `<p><strong>Amount:</strong> ₹${donationData.amount}</p>` : ''}
          </div>
          
          ${donationData.message ? `
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${donationData.message}</p>
          </div>
          ` : ''}
          
          <div style="background-color: #e6f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;">
              Please follow up with the donor and provide appropriate receipts.
            </p>
          </div>
        </div>
      `,
    });

    // Send thank you email to the donor
    const confirmationResponse = await resend.emails.send({
      from: "Housai Old Age Home <noreply@housaioldagehome.com>",
      to: [donationData.donor_email],
      subject: "Thank you for your generous donation to Housai Old Age Home",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            Thank You for Your Generous Donation
          </h2>
          
          <p>Dear ${donationData.donor_name},</p>
          
          <p>We are deeply grateful for your generous donation to Housai Old Age Home. Your support makes a real difference in the lives of our elderly residents.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">Donation Details</h3>
            <p><strong>Donation Type:</strong> ${donationData.donation_type}</p>
            ${donationData.amount ? `<p><strong>Amount:</strong> ₹${donationData.amount}</p>` : ''}
            ${donationData.message ? `<p><strong>Your Message:</strong> ${donationData.message}</p>` : ''}
          </div>
          
          <div style="background-color: #e6f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>We will process your donation within 2-3 business days</li>
              <li>You will receive a 80G tax deduction certificate via email</li>
              <li>We'll send you regular updates about how your donation is making an impact</li>
            </ul>
          </div>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">Bank Details</h3>
            <p><strong>Account Name:</strong> Khaasdar Ramdasji Athawle Youth Foundation</p>
            <p><strong>Account Number:</strong> 161120110000274</p>
            <p><strong>IFSC Code:</strong> BKID0001611</p>
            <p><strong>Bank:</strong> Bank of India, Tasgaon Branch</p>
          </div>
          
          <p>Your kindness and generosity help us continue our mission of providing loving care to elderly individuals. Every contribution brings comfort, dignity, and joy to our residents' lives.</p>
          
          <p>For any questions or to visit our facility, please contact us at 0233-3560136.</p>
          
          <p>With heartfelt gratitude,<br>
          The Housai Old Age Home Team</p>
        </div>
      `,
    });

    console.log("Donation emails sent successfully:", { emailResponse, confirmationResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Donation processed successfully and confirmation emails sent" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in process-donation function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);