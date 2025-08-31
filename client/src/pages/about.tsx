import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Shield, TrendingUp, Heart, Award, Calculator } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <Users className="h-6 w-6" />
            <h1 className="text-xl font-bold">About Us</h1>
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
        <div className="text-center py-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Empowering Your Financial Future</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves a secure and comfortable retirement. Our mission is to make retirement planning 
            accessible, understandable, and actionable for people at every stage of their financial journey.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To democratize retirement planning by providing free, accurate, and easy-to-use tools that help people 
                make informed decisions about their financial future.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Transparency, accuracy, and simplicity guide everything we do. We believe complex financial concepts 
                should be made simple and accessible to everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Our Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're committed to providing unbiased, educational resources that put your interests first. 
                No hidden fees, no sales pressure - just honest financial guidance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Story</CardTitle>
            <CardDescription className="text-center text-lg">
              Born from a simple belief that retirement planning shouldn't be overwhelming
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our team noticed that despite the importance of retirement planning, many people were paralyzed by 
                  complex financial jargon and overwhelming options. Traditional financial planning tools were either 
                  too complicated for beginners or too simplistic for those wanting detailed insights.
                </p>
                <p className="text-muted-foreground">
                  That's when we decided to create something different - RetPlan.io combines 
                  sophisticated financial modeling with an intuitive, mobile-first design. We wanted to build a tool 
                  that anyone could use, regardless of their financial background.
                </p>
                <p className="text-muted-foreground">
                  Today, RetPlan.io has helped thousands of people take control of their retirement planning, 
                  from college graduates just starting their careers to professionals preparing for retirement.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 text-center">
                <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-muted-foreground">People have used RetPlan.io to plan their retirement</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Makes Us Different */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">What Makes Us Different</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 text-primary" />
                  Advanced Yet Simple
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  RetPlan.io uses sophisticated financial algorithms while maintaining a clean, intuitive interface. 
                  You get institutional-quality analysis in a tool anyone can use.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 text-primary" />
                  Privacy First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your financial information is yours. We don't sell your data, spam you with ads, or share your 
                  information with third parties. Your privacy is paramount.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 text-primary" />
                  Education Focused
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We don't just give you numbers - we help you understand them. Our insights and educational content 
                  help you make informed decisions about your financial future.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 text-primary" />
                  Always Free
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quality financial planning tools shouldn't be reserved for the wealthy. RetPlan.io 
                  will always be free, with no hidden fees or premium tiers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Join thousands of smart savers who have taken control of their retirement planning. 
              Start with RetPlan.io and take the first step toward financial security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="secondary" size="lg" className="font-semibold">
                  <Calculator className="mr-2 h-4 w-4" />
                  Try RetPlan.io
                </Button>
              </Link>
              <Link href="/guide">
                <Button variant="outline" size="lg" className="font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}