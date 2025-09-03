import { 
  getAllBlog, 
  getBlogCategory, 
  getRecentBlogPosts, 
  getBlogsOfCategory, 
  getBlogDetails 
} from '@/utils/api';

// Types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: {
    excerpt: string;
    fullContent: string;
  };
  category: string;
  date: string;
  month: string;
  year: string;
  author: string;
  thumbnail: string;
}

export interface BlogCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  postCount: number;
}

export interface BlogListItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  month: string;
  year: string;
  thumbnail: string;
  category: string;
  excerpt: string;
}

// API Response types
interface ApiResponse<T> {
  data?: T;
  notFound?: boolean;
  [key: string]: unknown;
}

// API Post interface
interface ApiPost {
  id?: string;
  blogId?: string;
  title?: string;
  blogTitle?: string;
  slug?: string;
  blogSlug?: string;
  date?: string;
  month?: string;
  year?: string;
  publishDate?: string;
  thumbnail?: string;
  imageUrl?: string;
  category?: string;
  categoryName?: string;
  excerpt?: string;
  shortDescription?: string;
  description?: string;
  content?: string;
  fullDescription?: string;
  author?: string;
  authorName?: string;
}

// API Category interface
interface ApiCategory {
  id?: string;
  categoryId?: string;
  slug?: string;
  categorySlug?: string;
  title?: string;
  categoryName?: string;
  description?: string;
  categoryDescription?: string;
  postCount?: number;
  blogCount?: number;
}



// Error handler
const handleApiError = (error: unknown) => {
  console.error('API Error:', error);
  throw new Error('Failed to fetch data from API');
};

// TODO: REMOVE ALL HARDCODED DATA WHEN API IS READY
// Hardcoded fallback data for all blog posts
const getHardcodedBlogPost = (slug: string): BlogPost | null => {
  const hardcodedPosts: { [key: string]: BlogPost } = {
    'nodejs-interview-questions': {
      id: slug,
      slug: slug,
      title: "Essential Node.js Interview Questions Every Executive Should Ask When Hiring",
      content: {
        excerpt: "Essential Node.js interview questions that every executive should know when hiring developers.",
        fullContent: "When hiring Node.js developers, executives need to understand both technical and business aspects. This comprehensive guide covers essential interview questions that help identify top talent. From understanding asynchronous programming and event loops to evaluating experience with popular frameworks like Express.js, these questions ensure you hire developers who can deliver scalable, maintainable applications. The guide also includes questions about database integration, API development, and performance optimization techniques that are crucial for modern web applications."
      },
      category: "Node.js Development",
      date: "28",
      month: "Nov",
      year: "2024",
      author: 'Ahmed Mehmood',
      thumbnail: "/assets/images/blog/post-sm1.png"
    },
    'benefits-of-mobile-apps-for-business': {
      id: slug,
      slug: slug,
      title: "Top 10 Benefits of Mobile Apps For Business",
      content: {
        excerpt: "Discover the top 10 benefits that mobile applications can bring to your business.",
        fullContent: "Mobile applications have become essential for modern businesses. This guide explores the top 10 benefits including improved customer engagement, increased accessibility, enhanced brand recognition, and better customer service. Mobile apps provide 24/7 availability, personalized user experiences, and valuable data insights. They also enable push notifications, offline functionality, and seamless integration with existing business systems. Learn how mobile apps can drive revenue growth, improve operational efficiency, and provide competitive advantages in today's digital marketplace."
      },
      category: "Mobile Development",
      date: "11",
      month: "Nov",
      year: "2024",
      author: 'Ahmed Mehmood',
      thumbnail: "/assets/images/blog/post-sm2.png"
    },
    'cost-to-hire-node-js-developers': {
      id: slug,
      slug: slug,
      title: "How Much Does it Cost to Hire Node Js Developers in 2025?",
      content: {
        excerpt: "Complete guide to understanding the costs involved in hiring Node.js developers in 2025.",
        fullContent: "Hiring Node.js developers in 2025 requires understanding various cost factors including experience levels, location, project complexity, and market demand. This comprehensive guide breaks down salary ranges for junior, mid-level, and senior developers across different regions. It also covers additional costs like recruitment fees, onboarding expenses, and retention strategies. Learn about different hiring models including full-time employment, contract work, and offshore development teams. The guide provides insights into cost optimization strategies while ensuring quality development outcomes."
      },
      category: "Hiring",
      date: "21",
      month: "Oct",
      year: "2024",
      author: 'Ahmed Mehmood',
      thumbnail: "/assets/images/blog/post-sm3.png"
    },
    'best-practices-to-secure-dotnet-application': {
      id: slug,
      slug: slug,
      title: "10 Best Practices to Secure .NET Application",
      content: {
        excerpt: "Learn the 10 best practices to secure your .NET applications effectively.",
        fullContent: "Security is paramount in .NET application development. This guide covers 10 essential best practices including input validation, authentication and authorization, secure communication protocols, and data encryption. Learn about implementing proper session management, using secure configuration practices, and regular security updates. The guide also covers secure coding practices, vulnerability scanning, and security testing methodologies. Understanding these practices helps developers build robust, secure applications that protect sensitive data and maintain user trust."
      },
      category: ".NET Development",
      date: "18",
      month: "Sep",
      year: "2024",
      author: 'Ahmed Mehmood',
      thumbnail: "/assets/images/blog/post-sm4.png"
    },
    'angular-17-features': {
      id: slug,
      slug: slug,
      title: "Introducing Angular 17",
      content: {
        excerpt: "Introducing Angular 17 - Latest Features and Updates for developers.",
        fullContent: "Angular 17 brings significant improvements and new features to the framework. This comprehensive overview covers the new control flow syntax, improved performance with standalone components, and enhanced developer experience. Learn about the new deferrable views, built-in SSR improvements, and enhanced debugging capabilities. The guide also explores new CLI features, improved TypeScript support, and better integration with modern build tools. Discover how Angular 17 simplifies development workflows and provides better performance for modern web applications."
      },
      category: "Angular Development",
      date: "04",
      month: "Sep",
      year: "2024",
      author: 'Ahmed Mehmood',
      thumbnail: "/assets/images/blog/post-sm5.png"
    },
    'web-app-vs-desktop-app': {
      id: slug,
      slug: slug,
      title: "Web App vs Desktop App: Which One Should You Choose?",
      content: {
        excerpt: "Understanding the differences between web applications and desktop applications is crucial for making the right choice for your project.",
        fullContent: "Web applications and desktop applications each have their own advantages and use cases. Web apps are accessible from any device with a browser, while desktop apps provide better performance and offline capabilities. This comprehensive guide will help you understand the key differences and make an informed decision for your next project. Web applications offer cross-platform compatibility and easy updates, while desktop applications provide better performance and access to system resources. The choice depends on your specific requirements, target audience, and technical constraints."
      },
      category: "Technology",
      date: "22",
      month: "Nov",
      year: "2023",
      author: 'Ahmed Mehmood',
      thumbnail: "/assets/images/blog/post-sm6.png"
    }
  };
  
  return hardcodedPosts[slug] || null;
};

// TODO: REMOVE ALL HARDCODED DATA WHEN API IS READY
// Hardcoded fallback data for all blog categories
const getHardcodedBlogCategory = (slug: string): BlogCategory | null => {
  const hardcodedCategories: { [key: string]: BlogCategory } = {
    'node-js-development': {
      id: slug,
      slug: slug,
      title: "Node.js Development",
      description: "Explore the latest trends and best practices in Node.js development",
      postCount: 2
    },
    'dotnet-development': {
      id: slug,
      slug: slug,
      title: ".NET Development",
      description: "Discover .NET development solutions and best practices",
      postCount: 1
    },
    'angular-development': {
      id: slug,
      slug: slug,
      title: "Angular Development",
      description: "Latest Angular development trends and features",
      postCount: 1
    },
    'legal-software-development': {
      id: slug,
      slug: slug,
      title: "Legal Software Development",
      description: "Specialized software solutions for legal industry",
      postCount: 0
    },
    'healthcare-development': {
      id: slug,
      slug: slug,
      title: "Healthcare Development",
      description: "Healthcare software solutions and compliance",
      postCount: 0
    },
    'react-js': {
      id: slug,
      slug: slug,
      title: "React.js Development",
      description: "Modern React.js development and best practices",
      postCount: 0
    },
    'cloud-computing': {
      id: slug,
      slug: slug,
      title: "Cloud Computing",
      description: "Cloud computing solutions and infrastructure",
      postCount: 0
    },
    'ecommerce-solutions': {
      id: slug,
      slug: slug,
      title: "E-commerce Solutions",
      description: "E-commerce platform development and optimization",
      postCount: 0
    },
    'software-development': {
      id: slug,
      slug: slug,
      title: "Software Development",
      description: "Custom software development services",
      postCount: 0
    },
    'technology-trends': {
      id: slug,
      slug: slug,
      title: "Technology Trends",
      description: "Latest technology trends and innovations",
      postCount: 0
    },
    'enterprise-solutions': {
      id: slug,
      slug: slug,
      title: "Enterprise Solutions",
      description: "Enterprise-level software solutions",
      postCount: 0
    }
  };
  
  return hardcodedCategories[slug] || null;
};

// TODO: REMOVE ALL HARDCODED DATA WHEN API IS READY
// Hardcoded fallback data for blog posts by category
const getHardcodedBlogPostsByCategory = (categorySlug: string): BlogListItem[] => {
  const hardcodedPostsByCategory: { [key: string]: BlogListItem[] } = {
    'node-js-development': [
      {
        id: '1',
        title: "Essential Node.js Interview Questions Every Executive Should Ask When Hiring",
        slug: 'nodejs-interview-questions',
        date: '28',
        month: 'Nov',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm1.png',
        category: 'Node.js Development',
        excerpt: 'Essential Node.js interview questions that every executive should know when hiring developers.'
      },
      {
        id: '2',
        title: "How Much Does it Cost to Hire Node Js Developers in 2025?",
        slug: 'cost-to-hire-node-js-developers',
        date: '21',
        month: 'Oct',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm3.png',
        category: 'Node.js Development',
        excerpt: 'Complete guide to understanding the costs involved in hiring Node.js developers in 2025.'
      }
    ],
    'dotnet-development': [
      {
        id: '4',
        title: "10 Best Practices to Secure .NET Application",
        slug: 'best-practices-to-secure-dotnet-application',
        date: '18',
        month: 'Sep',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm4.png',
        category: '.NET Development',
        excerpt: 'Learn the 10 best practices to secure your .NET applications effectively.'
      }
    ],
    'angular-development': [
      {
        id: '5',
        title: "Introducing Angular 17",
        slug: 'angular-17-features',
        date: '04',
        month: 'Sep',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm5.png',
        category: 'Angular Development',
        excerpt: 'Introducing Angular 17 - Latest Features and Updates for developers.'
      }
    ]
  };
  
  return hardcodedPostsByCategory[categorySlug] || [];
};

// API Functions using existing API
export const fetchAllBlogPosts = async (pageNum: number = 1): Promise<BlogListItem[]> => {
  try {
    const response = await getAllBlog(pageNum) as unknown as ApiResponse<ApiPost[]>;
    
    // Check if response has notFound property
    if (response.notFound) {
      throw new Error('Blog posts not found');
    }
    
    // Transform the API response to match our interface
    if (response.data && Array.isArray(response.data)) {
      return response.data.map((post: ApiPost) => ({
        id: post.id || post.blogId || '',
        title: post.title || post.blogTitle || '',
        slug: post.slug || post.blogSlug || '',
        date: post.date || post.publishDate?.split('-')[2] || '22',
        month: post.month || post.publishDate?.split('-')[1] || 'Nov',
        year: post.year || post.publishDate?.split('-')[0] || '2023',
        thumbnail: post.thumbnail || post.imageUrl || '/assets/images/blog/post-sm1.png',
        category: post.category || post.categoryName || 'Technology',
        excerpt: post.excerpt || post.shortDescription || post.description || 'Blog post excerpt'
      }));
    }
    
    return [];
  } catch {
    // TODO: REMOVE HARDCODED DATA WHEN API IS READY
    console.log('API not available, using hardcoded fallback data for blog listing');
    return [
      {
        id: '1',
        title: "Essential Node.js Interview Questions Every Executive Should Ask When Hiring",
        slug: 'nodejs-interview-questions',
        date: '28',
        month: 'Nov',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm1.png',
        category: 'Node.js Development',
        excerpt: 'Essential Node.js interview questions that every executive should know when hiring developers.'
      },
      {
        id: '2',
        title: "Top 10 Benefits of Mobile Apps For Business",
        slug: 'benefits-of-mobile-apps-for-business',
        date: '11',
        month: 'Nov',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm2.png',
        category: 'Mobile Development',
        excerpt: 'Discover the top 10 benefits that mobile applications can bring to your business.'
      },
      {
        id: '3',
        title: "How Much Does it Cost to Hire Node Js Developers in 2025?",
        slug: 'cost-to-hire-node-js-developers',
        date: '21',
        month: 'Oct',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm3.png',
        category: 'Hiring',
        excerpt: 'Complete guide to understanding the costs involved in hiring Node.js developers in 2025.'
      },
      {
        id: '4',
        title: "10 Best Practices to Secure .NET Application",
        slug: 'best-practices-to-secure-dotnet-application',
        date: '18',
        month: 'Sep',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm4.png',
        category: '.NET Development',
        excerpt: 'Learn the 10 best practices to secure your .NET applications effectively.'
      },
      {
        id: '5',
        title: "Introducing Angular 17",
        slug: 'angular-17-features',
        date: '04',
        month: 'Sep',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm5.png',
        category: 'Angular Development',
        excerpt: 'Introducing Angular 17 - Latest Features and Updates for developers.'
      },
      {
        id: '6',
        title: "Web App vs Desktop App: Which One Should You Choose?",
        slug: 'web-app-vs-desktop-app',
        date: '22',
        month: 'Nov',
        year: '2023',
        thumbnail: '/assets/images/blog/post-sm6.png',
        category: 'Technology',
        excerpt: 'Understanding the differences between web applications and desktop applications is crucial for making the right choice for your project.'
      }
    ];
  }
};

export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
  try {
    const response = await getBlogDetails(slug) as unknown as ApiResponse<ApiPost>;
    
    // Check if response has notFound property
    if (response.notFound) {
      throw new Error('Blog post not found');
    }
    
    // Transform the API response to match our interface
    const post = response.data || response as unknown as ApiPost;
    return {
      id: post.id || post.blogId || slug,
      slug: post.slug || post.blogSlug || slug,
      title: post.title || post.blogTitle || "Blog Post",
      content: {
        excerpt: post.excerpt || post.shortDescription || post.description || "Blog post excerpt",
        fullContent: post.content || post.fullDescription || post.description || "Blog post content"
      },
      category: post.category || post.categoryName || "Technology",
      date: post.date || post.publishDate?.split('-')[2] || "22",
      month: post.month || post.publishDate?.split('-')[1] || "Nov",
      year: post.year || post.publishDate?.split('-')[0] || "2023",
      author: post.author || post.authorName || 'Ahmed Mehmood',
      thumbnail: post.thumbnail || post.imageUrl || "/assets/images/blog/post-sm1.png"
    };
  } catch {
    // TODO: REMOVE HARDCODED DATA WHEN API IS READY
    console.log('API not available, using hardcoded fallback data for', slug);
    
    const hardcodedPost = getHardcodedBlogPost(slug);
    if (hardcodedPost) {
      return hardcodedPost;
    }
    
    // For all other slugs, throw error (no fallback)
    handleApiError(new Error('Blog post not found'));
    throw new Error('Blog post not found');
  }
};

export const fetchBlogCategoryBySlug = async (slug: string): Promise<BlogCategory> => {
  try {
    const response = await getBlogCategory() as unknown as ApiResponse<ApiCategory[]>;
    
    // Check if response has notFound property
    if (response.notFound) {
      throw new Error('Blog categories not found');
    }
    
    // Find the category by slug
    const categories = response.data || response;
    const category = Array.isArray(categories) 
      ? categories.find((cat: ApiCategory) => cat.slug === slug || cat.categorySlug === slug)
      : null;
    
    if (!category) {
      throw new Error('Category not found');
    }
    
    return {
      id: category.id || category.categoryId || slug,
      slug: category.slug || category.categorySlug || slug,
      title: category.title || category.categoryName || "Blog Category",
      description: category.description || category.categoryDescription || "Blog category description",
      postCount: category.postCount || category.blogCount || 0
    };
  } catch {
    // TODO: REMOVE HARDCODED DATA WHEN API IS READY
    console.log('API not available, using hardcoded fallback data for category', slug);
    
    const hardcodedCategory = getHardcodedBlogCategory(slug);
    if (hardcodedCategory) {
      return hardcodedCategory;
    }
    
    // For all other slugs, throw error (no fallback)
    handleApiError(new Error('Category not found'));
    throw new Error('Category not found');
  }
};

export const fetchBlogPostsByCategory = async (categorySlug: string, pageNum: number = 1): Promise<BlogListItem[]> => {
  try {
    const response = await getBlogsOfCategory(categorySlug, pageNum) as unknown as ApiResponse<ApiPost[]>;
    
    // Check if response has notFound property
    if (response.notFound) {
      throw new Error('Blog posts for category not found');
    }
    
    // Transform the API response to match our interface
    if (response.data && Array.isArray(response.data)) {
      return response.data.map((post: ApiPost) => ({
        id: post.id || post.blogId || '',
        title: post.title || post.blogTitle || '',
        slug: post.slug || post.blogSlug || '',
        date: post.date || post.publishDate?.split('-')[2] || '15',
        month: post.month || post.publishDate?.split('-')[1] || 'Jan',
        year: post.year || post.publishDate?.split('-')[0] || '2024',
        thumbnail: post.thumbnail || post.imageUrl || '/assets/images/blog/post-sm1.png',
        category: post.category || post.categoryName || 'Blog Category',
        excerpt: post.excerpt || post.shortDescription || post.description || 'Blog post excerpt'
      }));
    }
    
    return [];
  } catch (error) {
    // TODO: REMOVE HARDCODED DATA WHEN API IS READY
    console.log('API not available, using hardcoded fallback data for category posts', categorySlug);
    
    const hardcodedPosts = getHardcodedBlogPostsByCategory(categorySlug);
    if (hardcodedPosts.length > 0) {
      return hardcodedPosts;
    }
    
    // For all other categories, throw error (no fallback)
    handleApiError(error);
    throw error;
  }
};

export const fetchRecentBlogPosts = async (): Promise<BlogListItem[]> => {
  try {
    const response = await getRecentBlogPosts() as unknown as ApiResponse<ApiPost[]>;
    
    // Check if response has notFound property
    if (response.notFound) {
      throw new Error('Recent blog posts not found');
    }
    
    // Transform the API response to match our interface
    if (response.data && Array.isArray(response.data)) {
      return response.data.map((post: ApiPost) => ({
        id: post.id || post.blogId || '',
        title: post.title || post.blogTitle || '',
        slug: post.slug || post.blogSlug || '',
        date: post.date || post.publishDate?.split('-')[2] || '22',
        month: post.month || post.publishDate?.split('-')[1] || 'Nov',
        year: post.year || post.publishDate?.split('-')[0] || '2023',
        thumbnail: post.thumbnail || post.imageUrl || '/assets/images/blog/post-sm1.png',
        category: post.category || post.categoryName || 'Technology',
        excerpt: post.excerpt || post.shortDescription || post.description || 'Blog post excerpt'
      }));
    }
    
    return [];
  } catch (error) {
    // TODO: REMOVE HARDCODED DATA WHEN API IS READY
    console.log('API not available, using hardcoded fallback data for recent posts');
    return [
      {
        id: '1',
        title: "Essential Node.js Interview Questions Every Executive Should Ask When Hiring",
        slug: 'nodejs-interview-questions',
        date: '28',
        month: 'Nov',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm1.png',
        category: 'Node.js Development',
        excerpt: 'Essential Node.js interview questions that every executive should know when hiring developers.'
      },
      {
        id: '2',
        title: "Top 10 Benefits of Mobile Apps For Business",
        slug: 'benefits-of-mobile-apps-for-business',
        date: '11',
        month: 'Nov',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm2.png',
        category: 'Mobile Development',
        excerpt: 'Discover the top 10 benefits that mobile applications can bring to your business.'
      },
      {
        id: '3',
        title: "How Much Does it Cost to Hire Node Js Developers in 2025?",
        slug: 'cost-to-hire-node-js-developers',
        date: '21',
        month: 'Oct',
        year: '2024',
        thumbnail: '/assets/images/blog/post-sm3.png',
        category: 'Hiring',
        excerpt: 'Complete guide to understanding the costs involved in hiring Node.js developers in 2025.'
      }
    ];
  }
};

// TODO: REMOVE HARDCODED DATA WHEN API IS READY
export const fetchAllBlogCategories = async (): Promise<BlogCategory[]> => {
  try {
    const response = await getBlogCategory() as unknown as ApiResponse<ApiCategory[]>;
    
    if (response.notFound) {
      throw new Error('Blog categories not found');
    }
    
    const categories = response.data || response;
    if (Array.isArray(categories)) {
      return categories.map((cat: ApiCategory) => ({
        id: cat.id || cat.categoryId || '',
        slug: cat.slug || cat.categorySlug || '',
        title: cat.title || cat.categoryName || '',
        description: cat.description || cat.categoryDescription || '',
        postCount: cat.postCount || cat.blogCount || 0
      }));
    }
    
    return [];
  } catch {
    // TODO: REMOVE HARDCODED DATA WHEN API IS READY
    console.log('API not available, using hardcoded fallback data for all categories');
    return [
      {
        id: 'node-js-development',
        slug: 'node-js-development',
        title: 'Node.js Development',
        description: 'Explore the latest trends and best practices in Node.js development',
        postCount: 2
      },
      {
        id: 'dotnet-development',
        slug: 'dotnet-development',
        title: '.NET Development',
        description: 'Discover .NET development solutions and best practices',
        postCount: 1
      },
      {
        id: 'angular-development',
        slug: 'angular-development',
        title: 'Angular Development',
        description: 'Latest Angular development trends and features',
        postCount: 1
      },
      {
        id: 'legal-software-development',
        slug: 'legal-software-development',
        title: 'Legal Software Development',
        description: 'Specialized software solutions for legal industry',
        postCount: 0
      },
      {
        id: 'healthcare-development',
        slug: 'healthcare-development',
        title: 'Healthcare Development',
        description: 'Healthcare software solutions and compliance',
        postCount: 0
      },
      {
        id: 'react-js',
        slug: 'react-js',
        title: 'React.js Development',
        description: 'Modern React.js development and best practices',
        postCount: 0
      },
      {
        id: 'cloud-computing',
        slug: 'cloud-computing',
        title: 'Cloud Computing',
        description: 'Cloud computing solutions and infrastructure',
        postCount: 0
      },
      {
        id: 'ecommerce-solutions',
        slug: 'ecommerce-solutions',
        title: 'E-commerce Solutions',
        description: 'E-commerce platform development and optimization',
        postCount: 0
      },
      {
        id: 'software-development',
        slug: 'software-development',
        title: 'Software Development',
        description: 'Custom software development services',
        postCount: 0
      },
      {
        id: 'technology-trends',
        slug: 'technology-trends',
        title: 'Technology Trends',
        description: 'Latest technology trends and innovations',
        postCount: 0
      },
      {
        id: 'enterprise-solutions',
        slug: 'enterprise-solutions',
        title: 'Enterprise Solutions',
        description: 'Enterprise-level software solutions',
        postCount: 0
      }
    ];
  }
};

export const searchBlogPosts = async (): Promise<BlogListItem[]> => {
  // This would need to be implemented in the API if not already available
  throw new Error('Search functionality not implemented in API');
};
