import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
  const { toast } = useToast();

  const onSubmit = (data: ContactForm) => {
    // In a real app, this would send the email
    console.log('Contact form submitted:', data);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <MessageCircle className="h-6 w-6" />
            <h1 className="text-xl font-bold">Contact Us</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              Back to RetPlan.io
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about retirement planning or need help with RetPlan.io? 
            We're here to help you succeed on your financial journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-sm text-muted-foreground">hi@retplan.io</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="mr-2 text-primary" />
                  Quick Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground mb-3">
                  Need immediate answers? Check out our resources:
                </p>
                <div className="space-y-2">
                  <Link href="/faq">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Frequently Asked Questions
                    </Button>
                  </Link>
                  <Link href="/guide">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      RetPlan.io Guide
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Planning Resources
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  We typically respond within 24 hours during business days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your full name"
                        data-testid="input-contact-name"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        placeholder="your.email@example.com"
                        data-testid="input-contact-email"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="How can we help you?"
                      data-testid="input-contact-subject"
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      placeholder="Please describe your question or concern in detail..."
                      rows={6}
                      data-testid="textarea-contact-message"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" data-testid="button-send-message">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Link */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Looking for Quick Answers?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Many common questions are answered in our FAQ section. 
              Check there first for immediate help with RetPlan.io usage and retirement planning basics.
            </p>
            <Link href="/faq">
              <Button size="lg" className="font-semibold">
                <HelpCircle className="mr-2 h-4 w-4" />
                View FAQ
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}