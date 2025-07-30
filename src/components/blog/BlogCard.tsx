import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const { language } = useLanguage();
  const t = content[language];

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
    <article className={`medical-card group hover:shadow-lg transition-all duration-300 ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={post.image}
          alt={post.title[language]}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <div className="absolute top-4 left-4">
          <span className="medical-badge text-xs">
            {post.category[language]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime[language]}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.title[language]}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {post.excerpt[language]}
        </p>

        {/* Author & Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.author.image}
              alt={post.author.name[language]}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {post.author.name[language]}
              </p>
              <p className="text-xs text-muted-foreground">
                {post.author.title[language]}
              </p>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            {t.blog.readMore}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};
