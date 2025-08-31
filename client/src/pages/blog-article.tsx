import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!slug) return;
    
    const loadArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error('Article not found');
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError('Article not found');
        console.error('Error loading article:', err);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6" />
              <h1 className="text-xl font-bold">Loading Article...</h1>
            </div>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </header>
        <div className="max-w-4xl mx-auto p-4 py-12 text-center">
          <div className="animate-pulse">Loading article...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-6 w-6" />
              <h1 className="text-xl font-bold">Article Not Found</h1>
            </div>
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </header>
        <div className="max-w-4xl mx-auto p-4 py-12 text-center">
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">{error}</p>
              <Link href="/blog">
                <Button>Return to Blog</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-xl font-bold">Blog Article</h1>
          </div>
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </header>

      <article className="max-w-4xl mx-auto p-4">
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-gray max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-primary mb-6">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                  em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">{children}</blockquote>,
                  hr: () => <hr className="my-8 border-border" />,
                  a: ({ children, href }) => (
                    <a href={href} className="text-primary hover:underline font-medium">
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Back to Blog CTA */}
        <div className="mt-8 text-center">
          <Link href="/blog">
            <Button size="lg" className="font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4" />
              More Planning Resources
            </Button>
          </Link>
        </div>

        {/* Calculator CTA */}
        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Plan Your Retirement?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Put these insights into action with RetPlan.io. 
              Get personalized savings targets and see how different strategies affect your future.
            </p>
            <Link href="/">
              <Button size="lg" className="font-semibold">
                Start Planning
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}