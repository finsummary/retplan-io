import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HelpCircle, ChevronDown, Calculator, DollarSign, TrendingUp, Shield } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const faqCategories = [
  {
    title: "Getting Started",
    icon: Calculator,
    questions: [
      {
        question: "How accurate is this retirement calculator?",
        answer: "RetPlan.io uses industry-standard financial formulas and assumptions based on historical market data. While no calculator can predict the future with certainty, RetPlan.io provides realistic projections based on your inputs. Remember to review and adjust your plan regularly as your circumstances change."
      },
      {
        question: "What information do I need to use RetPlan.io?",
        answer: "You'll need your current age, planned retirement age, current retirement savings amount, and desired monthly income in retirement. Optional information like employer 401(k) matching can make the calculations more accurate."
      },
      {
        question: "Is RetPlan.io really free?",
        answer: "Yes! RetPlan.io is completely free with no hidden fees, premium tiers, or required subscriptions. We believe everyone should have access to quality financial planning tools."
      }
    ]
  },
  {
    title: "Investment Scenarios",
    icon: TrendingUp,
    questions: [
      {
        question: "What do the different investment scenarios mean?",
        answer: "Conservative (4%) represents low-risk investments like bonds and CDs. Moderate (7%) is a balanced portfolio of stocks and bonds. Aggressive (10%) is stock-heavy with higher potential returns but more volatility. These percentages represent average annual returns before inflation."
      },
      {
        question: "Which investment scenario should I choose?",
        answer: "Your choice depends on your risk tolerance, time horizon, and financial situation. Younger investors often choose more aggressive approaches, while those closer to retirement prefer conservative strategies. Consider consulting with a financial advisor for personalized advice."
      },
      {
        question: "Can I use my own expected return rate?",
        answer: "Yes! RetPlan.io includes a custom scenario option where you can input your own expected annual return rate. This is useful if you have specific investment strategies or want to model different scenarios."
      }
    ]
  },
  {
    title: "Calculations & Assumptions",
    icon: DollarSign,
    questions: [
      {
        question: "How do you account for inflation?",
        answer: "RetPlan.io assumes a 3% annual inflation rate, which is based on long-term historical averages. This means your desired monthly income is adjusted for inflation, so you maintain the same purchasing power throughout retirement."
      },
      {
        question: "What withdrawal rate do you assume in retirement?",
        answer: "We use the widely-accepted 4% withdrawal rule, which suggests you can safely withdraw 4% of your retirement savings annually without running out of money. This is considered a sustainable rate based on historical market performance."
      },
      {
        question: "Do you include Social Security in the calculations?",
        answer: "Currently, RetPlan.io focuses on personal retirement savings and doesn't include Social Security benefits. This provides a conservative estimate, as Social Security will likely supplement your retirement income."
      },
      {
        question: "How often is interest compounded?",
        answer: "Our calculations assume monthly compounding, which is standard for most retirement accounts and provides more accurate projections than annual compounding."
      }
    ]
  },
  {
    title: "Privacy & Security",
    icon: Shield,
    questions: [
      {
        question: "Is my financial information safe?",
        answer: "Yes. We take your privacy seriously. All calculations are performed securely, and we don't store your personal financial information on our servers. Your data is never sold or shared with third parties."
      },
      {
        question: "Do I need to create an account to use RetPlan.io?",
        answer: "No account is required to use RetPlan.io. However, creating a free account allows you to save multiple scenarios and access them later for comparison and updates."
      },
      {
        question: "Can I delete my saved scenarios?",
        answer: "Yes, if you create an account and save scenarios, you can delete them at any time. You also have the right to delete your entire account and all associated data."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <HelpCircle className="h-6 w-6" />
            <h1 className="text-xl font-bold">Frequently Asked Questions</h1>
          </div>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              Back to RetPlan.io
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-primary mb-4">How Can We Help?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about RetPlan.io and retirement planning in general.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <IconComponent className="mr-3 h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const itemId = `${categoryIndex}-${questionIndex}`;
                    return (
                      <Collapsible
                        key={questionIndex}
                        open={openItems[itemId]}
                        onOpenChange={() => toggleItem(itemId)}
                      >
                        <CollapsibleTrigger className="flex w-full items-center justify-between p-4 bg-muted hover:bg-muted/80 rounded-lg text-left transition-colors">
                          <span className="font-semibold pr-4">{faq.question}</span>
                          <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${openItems[itemId] ? 'rotate-180' : ''}`} />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-4 px-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? We're here to help! Reach out to our support team 
              and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="font-semibold">
                  Contact Support
                </Button>
              </Link>
              <Link href="/guide">
                <Button variant="outline" size="lg" className="font-semibold">
                  Read Our Guide
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Calculator CTA */}
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Plan Your Retirement?</h3>
          <p className="text-muted-foreground mb-6">Use RetPlan.io to get started on your retirement planning journey.</p>
          <Link href="/">
            <Button size="lg" className="font-semibold">
              <Calculator className="mr-2 h-4 w-4" />
              Try RetPlan.io
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}