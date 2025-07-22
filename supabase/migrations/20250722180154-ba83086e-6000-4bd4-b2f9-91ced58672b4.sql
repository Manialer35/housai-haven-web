-- Create inquiries table to store all contact form submissions
CREATE TABLE public.inquiries (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    assigned_to TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (public contact form)
CREATE POLICY "Anyone can submit inquiries" 
ON public.inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow viewing all inquiries (for admin dashboard)
CREATE POLICY "Anyone can view inquiries" 
ON public.inquiries 
FOR SELECT 
USING (true);

-- Create policy to allow updating inquiries (for admin management)
CREATE POLICY "Anyone can update inquiries" 
ON public.inquiries 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_inquiries_updated_at
    BEFORE UPDATE ON public.inquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();