import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { blogPosts, blogCategories } from '@/data/blogData';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Search, Filter, BookOpen } from 'lucide-react';

const POSTS_PER_PAGE = 6;

const BlogList = () => {
  const { language } = useLanguage();
  const t = content[language];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content[language].toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || 
        post.category[language] === selectedCategory;
      
      return matchesSearch && matchesCategory;
    }).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [searchTerm, selectedCategory, language]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const pagination = {
    currentPage,
    totalPages,
    totalPosts: filteredPosts.length,
    postsPerPage: POSTS_PER_PAGE
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.blog.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{t.blog.subtitle}</p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder={t.blog.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">{t.blog.allCategories}</option>
                  {blogCategories.map(category => (
                    <option key={category.id} value={category.name[language]}>
                      {category.name[language]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
                
                <BlogPagination 
                  pagination={pagination}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t.blog.noPostsFound}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'ar' 
                    ? 'جرب البحث بكلمات مختلفة أو اختر تصنيفاً آخر'
                    : 'Try searching with different keywords or select another category'
                  }
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
