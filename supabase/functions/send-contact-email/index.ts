import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Contact form submission:", formData);

    // Send email to the organization
    const emailResponse = await resend.emails.send({
      from: "Housai Old Age Home <noreply@housaioldagehome.com>",
      to: ["info@housaioldagehome.com"],
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
            <p><strong>Subject:</strong> ${formData.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="background-color: #e6f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;">
              This message was sent through the contact form on the Housai Old Age Home website.
              Please respond to the sender at: <a href="mailto:${formData.email}">${formData.email}</a>
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Housai Old Age Home <noreply@housaioldagehome.com>",
      to: [formData.email],
      subject: "Thank you for contacting Housai Old Age Home",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            Thank You for Contacting Us
          </h2>
          
          <p>Dear ${formData.name},</p>
          
          <p>Thank you for reaching out to Housai Old Age Home. We have received your message and will get back to you as soon as possible, typically within 24 hours during business days.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="font-style: italic; white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="background-color: #e6f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0066cc; margin-top: 0;">Contact Information</h3>
            <p><strong>Phone:</strong> 0233-3560136</p>
            <p><strong>Email:</strong> info@housaioldagehome.com</p>
            <p><strong>Address:</strong> Housai Old Age Home, Shalini Nagar, 30, Near Maruti Temple, Sangli, Maharashtra - 416416</p>
            <p><strong>Visiting Hours:</strong> Monday - Sunday: 10:00 AM - 6:00 PM</p>
          </div>
          
          <p>For urgent matters, please call us directly at 0233-3560136. We're here to help and provide the best care for your loved ones.</p>
          
          <p>Warm regards,<br>
          The Housai Old Age Home Team</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { emailResponse, confirmationResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully and emails sent" 
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
    console.error("Error in send-contact-email function:", error);
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