import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, Target, BarChart, Info } from "lucide-react";
import { Link } from "wouter";

export default function CalculatorGuide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <Info className="h-6 w-6" />
            <h1 className="text-xl font-bold">Calculator Guide</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              Back to Calculator
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="mr-2 text-primary" />
              How to Use the Retirement Calculator
            </CardTitle>
            <CardDescription>
              Follow this step-by-step guide to calculate your retirement savings needs and create a personalized plan.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our retirement calculator helps you determine how much you need to save each month to reach your retirement goals. 
              It analyzes different investment scenarios to give you a complete picture of your financial future.
            </p>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">Step-by-Step Instructions</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Enter Your Current Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">Current Age</h4>
                <p className="text-sm text-muted-foreground">Enter your age today. This determines how many years you have to save for retirement.</p>
              </div>
              <div>
                <h4 className="font-semibold">Current Savings</h4>
                <p className="text-sm text-muted-foreground">Include all retirement accounts (401k, IRA, savings, investments). Don't include emergency funds or money for other goals.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Set Your Retirement Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold">Retirement Age</h4>
                <p className="text-sm text-muted-foreground">When do you want to retire? Consider Social Security eligibility (67 for full benefits) and your career timeline.</p>
              </div>
              <div>
                <h4 className="font-semibold">Desired Monthly Income</h4>
                <p className="text-sm text-muted-foreground">How much monthly income do you want in retirement? A good rule of thumb is 70-80% of your current income.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Review Investment Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold flex items-center"><span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>Conservative (4% return)</h4>
                <p className="text-sm text-muted-foreground">Bonds, CDs, stable value funds. Lower risk but requires higher monthly savings.</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>Moderate (7% return)</h4>
                <p className="text-sm text-muted-foreground">Balanced mix of stocks and bonds. Good middle ground for most people.</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>Aggressive (10% return)</h4>
                <p className="text-sm text-muted-foreground">Stock-heavy portfolio. Higher potential returns but more volatility.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
                Understand Your Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold flex items-center"><BarChart className="mr-2 h-4 w-4 text-primary" />Monthly Savings Required</h4>
                <p className="text-sm text-muted-foreground">How much you need to save each month to reach your goal under each scenario.</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center"><TrendingUp className="mr-2 h-4 w-4 text-primary" />Growth Projection Chart</h4>
                <p className="text-sm text-muted-foreground">Visual timeline showing how your savings will grow over time.</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center"><Target className="mr-2 h-4 w-4 text-primary" />Personalized Insights</h4>
                <p className="text-sm text-muted-foreground">Custom recommendations based on your specific situation.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="mr-2 text-primary" />
              Pro Tips for Retirement Planning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Start Early</h4>
                <p className="text-sm text-muted-foreground">The power of compound interest means starting even a few years earlier can dramatically reduce how much you need to save monthly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Increase Gradually</h4>
                <p className="text-sm text-muted-foreground">If the required monthly amount seems too high, start with what you can and increase by 1-2% each year.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Employer Match</h4>
                <p className="text-sm text-muted-foreground">Always contribute enough to get your full employer 401(k) match - it's free money!</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Review Annually</h4>
                <p className="text-sm text-muted-foreground">Recalculate each year as your income, goals, and life circumstances change.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Calculate Your Retirement Plan?</h3>
            <p className="mb-4 opacity-90">Use our calculator to create your personalized retirement savings strategy.</p>
            <Link href="/">
              <Button variant="secondary" size="lg" className="font-semibold">
                <Calculator className="mr-2 h-4 w-4" />
                Start Calculating
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}