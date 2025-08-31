import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Calendar, Eye, Lock, UserCheck } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6" />
            <h1 className="text-xl font-bold">Privacy Policy</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              Back to RetPlan.io
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
            This Privacy Policy explains how we collect, use, and protect your information when you use RetPlan.io.
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 text-primary" />
                1. Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Calculator Inputs (Not Stored)</h4>
                <p className="text-muted-foreground text-sm">
                  When you use RetPlan.io, you enter financial information like age, savings, and income goals. 
                  This information is processed locally in your browser and is not stored on our servers unless you choose to save scenarios.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Account Information (Optional)</h4>
                <p className="text-muted-foreground text-sm">
                  If you create an account to save scenarios, we collect your email address and chosen password. 
                  We do not require real names or other personal identification.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Analytics (Anonymous)</h4>
                <p className="text-muted-foreground text-sm">
                  We collect anonymous usage statistics to improve our service, such as which features are used most 
                  and general performance metrics. This data cannot be linked to individual users.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="mr-2 text-primary" />
                2. How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Calculator Functionality</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Process retirement calculations in real-time</li>
                  <li>Generate personalized projections and insights</li>
                  <li>Save and retrieve your scenarios (if you create an account)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Service Improvement</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Analyze usage patterns to improve calculator accuracy</li>
                  <li>Identify and fix technical issues</li>
                  <li>Develop new features based on user needs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Communication (Optional)</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Respond to support requests and questions</li>
                  <li>Send updates about service changes (only if you opt in)</li>
                  <li>Provide educational content about retirement planning (optional newsletter)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 text-primary" />
                3. Data Protection and Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Encryption and Storage</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>All data transmission is encrypted using HTTPS</li>
                  <li>Saved scenarios are encrypted in our database</li>
                  <li>Passwords are hashed using industry-standard algorithms</li>
                  <li>We use secure cloud infrastructure with regular security updates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Access Controls</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Only authorized personnel have access to our systems</li>
                  <li>All access is logged and monitored</li>
                  <li>We follow the principle of least privilege for data access</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                <strong>We do not sell, rent, or share your personal information with third parties</strong> except in these limited circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Service Providers:</strong> With trusted partners who help operate our service (under strict confidentiality agreements)</li>
                <li><strong>Business Transfer:</strong> In the event of a merger or acquisition (users will be notified)</li>
                <li><strong>Safety and Security:</strong> To protect our users and prevent fraud or abuse</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Account Control</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Use the calculator without creating an account</li>
                  <li>Delete saved scenarios at any time</li>
                  <li>Change your email address or password</li>
                  <li>Delete your entire account and all associated data</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Portability</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Export your saved scenarios in a standard format</li>
                  <li>Request a copy of all data we have about you</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Communication Preferences</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Opt out of newsletters and promotional emails</li>
                  <li>Choose which types of service updates to receive</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                We use minimal cookies and tracking:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Essential Cookies:</strong> Required for login and security features</li>
                <li><strong>Analytics:</strong> Anonymous usage statistics (no personal identification)</li>
                <li><strong>Preferences:</strong> Remember your calculator settings (stored locally)</li>
                <li><strong>No Advertising:</strong> We do not use cookies for advertising or marketing tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We retain your information only as long as necessary to provide our service:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                <li><strong>Account Data:</strong> Until you delete your account</li>
                <li><strong>Saved Scenarios:</strong> Until you delete them or your account</li>
                <li><strong>Support Communications:</strong> Up to 2 years for quality assurance</li>
                <li><strong>Anonymous Analytics:</strong> Aggregated data may be retained indefinitely</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                Our service is not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children under 13. If we learn that we have collected such information, 
                we will delete it immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                We may update this Privacy Policy to reflect changes in our practices or legal requirements. 
                We will notify users of significant changes by email (if you have an account) and by posting 
                the updated policy on our website with a new "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
              </p>
              <div className="mt-3 text-muted-foreground">
                <p><strong>Email:</strong> hi@retplan.io</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Links to Other Legal Pages */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <Link href="/terms">
            <Button variant="outline">
              Terms of Service
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