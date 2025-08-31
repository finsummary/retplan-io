import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calendar, TrendingDown, DollarSign, Info } from "lucide-react";
import { Link } from "wouter";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6" />
            <h1 className="text-xl font-bold">Disclaimer</h1>
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
          
          <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>Important:</strong> RetPlan.io is for educational purposes only and does not constitute financial advice. 
              Please read this disclaimer carefully before using our service.
            </AlertDescription>
          </Alert>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2 text-primary" />
                1. Educational Tool Only
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                RetPlan.io is designed as an educational tool to help you understand retirement planning concepts. It is <strong>not intended to provide</strong>:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Personalized financial advice</li>
                <li>Investment recommendations</li>
                <li>Professional financial planning services</li>
                <li>Tax advice or legal counsel</li>
                <li>Insurance recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingDown className="mr-2 text-primary" />
                2. No Guarantees on Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Projections Are Estimates</h4>
                <p className="text-muted-foreground text-sm">
                  All calculations are based on assumptions and historical data. Actual investment returns may vary significantly 
                  from projections due to market volatility, economic conditions, and other factors beyond our control.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Past Performance vs. Future Results</h4>
                <p className="text-muted-foreground text-sm">
                  Historical market performance used in our calculations does not guarantee future results. 
                  Markets can experience extended periods of poor performance that differ from long-term averages.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Simplified Assumptions</h4>
                <p className="text-muted-foreground text-sm">
                  RetPlan.io uses simplified assumptions for inflation, taxes, fees, and market returns. 
                  Real-world factors may significantly impact your actual results.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 text-primary" />
                3. Investment Risks
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                <strong>All investments carry risk</strong>, including the potential loss of principal. Consider these important factors:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Market Risk:</strong> Stock and bond values fluctuate with market conditions</li>
                <li><strong>Inflation Risk:</strong> Rising prices may erode purchasing power over time</li>
                <li><strong>Interest Rate Risk:</strong> Changing rates affect bond values and investment returns</li>
                <li><strong>Longevity Risk:</strong> You might live longer than expected, requiring more savings</li>
                <li><strong>Sequence Risk:</strong> Poor returns early in retirement can devastate savings</li>
                <li><strong>Political Risk:</strong> Changes in laws, taxes, or regulations may affect retirement accounts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Our Calculation Methodology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Standard Assumptions Used</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li><strong>Inflation Rate:</strong> 3% annually</li>
                  <li><strong>Withdrawal Rate:</strong> 4% annually in retirement</li>
                  <li><strong>Compounding:</strong> Monthly</li>
                  <li><strong>Return Scenarios:</strong> 4% (Conservative), 7% (Moderate), 10% (Aggressive)</li>
                  <li><strong>Tax Treatment:</strong> Simplified, not account-specific</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Factors Not Included</h4>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>Social Security benefits</li>
                  <li>Pension payments</li>
                  <li>Healthcare costs and insurance</li>
                  <li>Investment fees and expenses</li>
                  <li>Changing tax rates over time</li>
                  <li>Emergency expenses or major life changes</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Professional Advice Recommended</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                We strongly recommend consulting with qualified professionals for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Certified Financial Planners (CFP):</strong> Comprehensive retirement planning</li>
                <li><strong>Investment Advisors:</strong> Portfolio construction and management</li>
                <li><strong>Tax Professionals:</strong> Tax-efficient retirement strategies</li>
                <li><strong>Estate Planning Attorneys:</strong> Wealth transfer and protection</li>
                <li><strong>Insurance Agents:</strong> Healthcare and long-term care coverage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>We are not liable for any financial losses resulting from use of RetPlan.io</li>
                <li>We make no warranties about the accuracy or completeness of our projections</li>
                <li>Users assume all responsibility for their financial decisions</li>
                <li>Our liability is limited to the amount paid for our service (which is currently free)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Regular Updates Recommended</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                Retirement planning is an ongoing process. We recommend:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                <li>Reviewing your retirement plan annually</li>
                <li>Updating calculations when your circumstances change</li>
                <li>Monitoring investment performance and rebalancing portfolios</li>
                <li>Adjusting savings rates as income changes</li>
                <li>Staying informed about changes in retirement laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Third-Party Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                Our educational content may reference third-party sources and data. We do not endorse 
                specific financial products, services, or institutions. Always verify information independently 
                and consider multiple sources when making financial decisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Questions and Support</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground">
                If you have questions about this disclaimer or our methodology, please contact us at:
              </p>
              <div className="mt-3 text-muted-foreground">
                <p><strong>Email:</strong> hi@retplan.io</p>
              </div>
              <p className="text-muted-foreground mt-3">
                For specific financial advice, please consult with qualified financial professionals in your area.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Alert className="mt-8 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>Remember:</strong> RetPlan.io provides estimates based on assumptions. 
            Your actual retirement needs may be significantly different. Always consult with financial professionals 
            for personalized advice tailored to your specific situation.
          </AlertDescription>
        </Alert>

        {/* Links to Other Legal Pages */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/terms">
            <Button variant="outline">
              Terms of Service
            </Button>
          </Link>
          <Link href="/privacy">
            <Button variant="outline">
              Privacy Policy
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