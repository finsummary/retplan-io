import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6" />
            <h1 className="text-xl font-bold">Terms of Service</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              Back to Calculator
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {/* Header Info */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            Last updated: December 15, 2024
          </div>
          <p className="text-muted-foreground">
            Please read these Terms of Service carefully before using our retirement calculator and related services.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                By accessing and using our retirement calculator website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                Our Service provides:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Free retirement planning calculator tools</li>
                <li>Educational content about retirement planning</li>
                <li>Scenario saving and comparison features (for registered users)</li>
                <li>Financial planning insights and recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Disclaimer of Financial Advice</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                <strong>Important:</strong> Our calculator and content are provided for educational and informational purposes only. They do not constitute financial advice, investment recommendations, or professional counsel.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Results are projections based on assumptions and historical data</li>
                <li>Actual investment returns may vary significantly</li>
                <li>Past performance does not guarantee future results</li>
                <li>You should consult with qualified financial advisors for personalized advice</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Provide accurate information when using our calculator</li>
                <li>Use the Service for lawful purposes only</li>
                <li>Not attempt to reverse engineer or compromise our systems</li>
                <li>Respect the intellectual property rights of our content</li>
                <li>Not share login credentials if you create an account</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                We take your privacy seriously:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>We do not store sensitive financial information</li>
                <li>Account creation is optional for basic calculator use</li>
                <li>Saved scenarios are encrypted and secured</li>
                <li>We do not sell or share personal data with third parties</li>
                <li>See our Privacy Policy for complete details</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitations of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>We provide the Service "as is" without warranties of any kind</li>
                <li>We are not liable for financial decisions made based on our calculator</li>
                <li>We are not responsible for investment losses or missed opportunities</li>
                <li>Our total liability shall not exceed the amount you paid for the Service (if any)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We strive to maintain high availability but cannot guarantee uninterrupted service. We reserve the right to modify, suspend, or discontinue the Service at any time with reasonable notice. We may also update our calculator algorithms and assumptions to reflect current market conditions and best practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                All content, including text, graphics, logos, and software, is owned by us or our licensors and protected by copyright and other intellectual property laws. You may use our Service for personal, non-commercial purposes but may not reproduce, distribute, or create derivative works without permission.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We may update these Terms of Service from time to time. We will notify users of significant changes by posting the updated terms on our website with a new "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: support@retirementcalc.com<br />
                Address: 123 Financial District, New York, NY 10005
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Links to Other Legal Pages */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="/privacy">
            <Button variant="outline">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/disclaimer">
            <Button variant="outline">
              Disclaimer
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}