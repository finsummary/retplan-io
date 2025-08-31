import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, Clock, TrendingUp, DollarSign, Target, Shield } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    slug: "power-of-starting-early",
    title: "The Power of Starting Early: Why Your 20s Matter for Retirement",
    excerpt: "Discover how starting retirement savings in your 20s can save you hundreds of thousands of dollars compared to waiting until your 30s.",
    category: "Getting Started",
    readTime: "5 min read",
    date: "December 15, 2024",
    icon: TrendingUp,
    content: "Starting your retirement savings in your 20s is one of the most powerful financial decisions you can make. Thanks to compound interest, even small contributions early on can grow into substantial wealth over time."
  },
  {
    id: 2,
    slug: "401k-vs-ira",
    title: "401(k) vs IRA: Which Retirement Account is Right for You?",
    excerpt: "A comprehensive comparison of 401(k) and IRA accounts, including contribution limits, tax advantages, and withdrawal rules.",
    category: "Investment Accounts",
    readTime: "8 min read",
    date: "December 10, 2024",
    icon: Shield,
    content: "Both 401(k) and IRA accounts offer excellent retirement savings opportunities, but they have different features that make them suitable for different situations."
  },
  {
    id: 3,
    slug: "4-percent-rule",
    title: "The 4% Rule: How Much Can You Safely Withdraw in Retirement?",
    excerpt: "Learn about the famous 4% withdrawal rule and how to apply it to your retirement planning strategy.",
    category: "Withdrawal Strategies",
    readTime: "6 min read",
    date: "December 5, 2024",
    icon: Target,
    content: "The 4% rule suggests you can safely withdraw 4% of your retirement savings each year without running out of money. But is this rule still valid today?"
  },
  {
    id: 4,
    slug: "inflation-and-retirement",
    title: "Inflation and Your Retirement: Protecting Your Purchasing Power",
    excerpt: "Understand how inflation affects your retirement savings and strategies to maintain your lifestyle throughout retirement.",
    category: "Risk Management",
    readTime: "7 min read",
    date: "November 28, 2024",
    icon: DollarSign,
    content: "Inflation is the silent thief of retirement security. Learn how to protect your savings from inflation's erosive effects."
  },
  {
    id: 5,
    slug: "catch-up-contributions",
    title: "Catch-Up Contributions: Boosting Your Retirement at 50+",
    excerpt: "If you're 50 or older, you can make additional 'catch-up' contributions to your retirement accounts. Here's how to maximize this opportunity.",
    category: "Advanced Planning",
    readTime: "5 min read",
    date: "November 20, 2024",
    icon: TrendingUp,
    content: "Once you turn 50, the IRS allows you to make additional contributions to your retirement accounts beyond the normal limits."
  },
  {
    id: 6,
    slug: "social-security-optimization",
    title: "Social Security Optimization: Maximizing Your Benefits",
    excerpt: "Strategic timing of Social Security claims can increase your lifetime benefits by tens of thousands of dollars.",
    category: "Social Security",
    readTime: "9 min read",
    date: "November 15, 2024",
    icon: Shield,
    content: "Social Security benefits can vary dramatically based on when you claim them. Understanding the rules can significantly impact your retirement income."
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">Retirement Planning Blog</h1>
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
          <h2 className="text-3xl font-bold text-primary mb-4">Expert Retirement Planning Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest strategies, tips, and insights to help you build a secure financial future.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <Badge className="w-fit mb-2">Featured Article</Badge>
            <CardTitle className="text-2xl">{blogPosts[0].title}</CardTitle>
            <CardDescription className="text-base">{blogPosts[0].excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {blogPosts[0].date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {blogPosts[0].readTime}
              </div>
              <Badge variant="secondary">{blogPosts[0].category}</Badge>
            </div>
            <p className="text-muted-foreground mb-4">{blogPosts[0].content}</p>
            <Link href="/blog/power-of-starting-early">
              <Button>
                Read Full Article
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => {
            const IconComponent = post.icon;
            return (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{post.content}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Get the latest retirement planning tips and strategies delivered straight to your inbox. 
              Join thousands of smart savers planning for their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground"
              />
              <Button variant="secondary" className="font-semibold">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start Planning?</h3>
          <p className="text-muted-foreground mb-6">Use RetPlan.io to create your personalized savings strategy.</p>
          <Link href="/">
            <Button size="lg" className="font-semibold">
              Start Planning
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}