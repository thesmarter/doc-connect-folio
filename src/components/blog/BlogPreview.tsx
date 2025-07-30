import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { blogPosts } from '@/data/blogData';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

export const BlogPreview = () => {
  const { language } = useLanguage();
  const t = content[language];

  // Get the 3 most recent posts
  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="medical-icon">
              <BookOpen className="w-8 h-8" />
            </div>
          </div>
          <h2 className="section-header">{t.blog.title}</h2>
          <p className="section-subheader">{t.blog.subtitle}</p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              featured={index === 0}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="btn-medical inline-flex items-center gap-3"
          >
            {t.blog.recentPosts}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
