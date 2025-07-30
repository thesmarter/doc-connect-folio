export interface BlogPost {
  id: string;
  slug: string;
  title: {
    ar: string;
    en: string;
  };
  excerpt: {
    ar: string;
    en: string;
  };
  content: {
    ar: string;
    en: string;
  };
  author: {
    name: {
      ar: string;
      en: string;
    };
    title: {
      ar: string;
      en: string;
    };
    image: string;
  };
  publishedAt: string;
  updatedAt: string;
  category: {
    ar: string;
    en: string;
  };
  tags: {
    ar: string[];
    en: string[];
  };
  image: string;
  readTime: {
    ar: string;
    en: string;
  };
  featured: boolean;
}

export interface BlogCategory {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  slug: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}
