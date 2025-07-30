import { useParams, Link, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blogData';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, isRTL } = useLanguage();
  const t = content[language];

  // Find the post by slug
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category[language] === post.category[language])
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'ar' 
      ? date.toLocaleDateString('ar-SA')
      : date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Back to Blog */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              {isRTL ? (
                <ArrowRight className="w-4 h-4" />
              ) : (
                <ArrowLeft className="w-4 h-4" />
              )}
              {t.blog.backToBlog}
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="medical-badge">
                  {post.category[language]}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title[language]}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{t.blog.publishedOn} {formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime[language]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author.name[language]}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-slate max-w-none dark:prose-invert">
                {post.content[language] ? (
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-foreground mb-6 mt-8 first:mt-0">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-2 ml-4">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="leading-relaxed">
                          {children}
                        </li>
                      ),
                    }}
                  >
                    {post.content[language]}
                  </ReactMarkdown>
                ) : (
                  <div className="text-muted-foreground">
                    {language === 'ar' ? 'المحتوى غير متوفر' : 'Content not available'}
                  </div>
                )}
              </div>

              {/* Tags */}
              {post.tags[language].length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Tag className="w-4 h-4" />
                      <span className="font-medium">{t.blog.tags}:</span>
                    </div>
                    {post.tags[language].map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Info */}
              <div className="mt-12 p-6 bg-muted/30 rounded-xl">
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.image}
                    alt={post.author.name[language]}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {post.author.name[language]}
                    </h4>
                    <p className="text-muted-foreground">
                      {post.author.title[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  {t.blog.relatedPosts}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map(relatedPost => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
