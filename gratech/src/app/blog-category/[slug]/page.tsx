import React from "react";
import { Metadata } from 'next';
import { getBlogCategory, getBlogsOfCategory } from "@/utils/api";
import { notFound } from "next/navigation";
import BlogCategoryPage from "@/components/blogs/BlogCategoryPage";

interface Props {
  params: { slug: string };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = params;
    const categories = await getBlogCategory();
    const categoryList = categories?.data || [];
    const currentCategory = categoryList.find((cat: any) => 
      cat.catSlug === slug || 
      cat.slug === slug || 
      cat.categoryName?.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (currentCategory) {
      return {
        title: `${currentCategory.categoryName || slug} - Blog Category | iFour Technolabs`,
        description: `Explore ${currentCategory.categoryName || slug} blog posts and articles on IT services, technology solutions, and software development.`,
        keywords: `${currentCategory.categoryName || slug}, blog category, IT blog, technology articles, software development`,
        openGraph: {
          title: `${currentCategory.categoryName || slug} - Blog Category | iFour Technolabs`,
          description: `Explore ${currentCategory.categoryName || slug} blog posts and articles on IT services, technology solutions, and software development.`,
          siteName: "iFour Technolabs",
          type: "website",
        },
      };
    }
  } catch (error) {
    // Fallback metadata
  }
  
  return {
    title: 'Blog Category | iFour Technolabs',
    description: 'Explore our blog categories for IT services, technology solutions, and software development insights.',
    keywords: 'blog category, IT blog, technology articles, software development',
    openGraph: {
      title: 'Blog Category | iFour Technolabs',
      description: 'Explore our blog categories for IT services, technology solutions, and software development insights.',
      siteName: "iFour Technolabs",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  try {
    const categories = await getBlogCategory();
    const categoryList = categories?.data || [];
    
    return categoryList.map((category: any) => ({
      slug: category.catSlug || category.slug || category.categoryName?.toLowerCase().replace(/\s+/g, '-'),
    }));
  } catch (error) {
    return [];
  }
}

export default async function BlogCategoryPageRoute({ params }: Props) {
  const { slug } = params;
  
  try {
    // Get category details
    const categories = await getBlogCategory();
    const categoryList = categories?.data || [];
    const currentCategory = categoryList.find((cat: any) => 
      cat.catSlug === slug || 
      cat.slug === slug || 
      cat.categoryName?.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!currentCategory) {
      notFound();
    }

    // Get blogs for this category
    const blogsData = await getBlogsOfCategory(slug, 1);
    const blogs = blogsData?.data?.blogList?.resultSet || [];
    const totalPages = blogsData?.data?.blogList?.pageCount || 1;

    return (
      <BlogCategoryPage 
        category={currentCategory}
        blogs={blogs}
        totalPages={totalPages}
        currentPage={1}
        categorySlug={slug}
      />
    );
  } catch (error) {
    notFound();
  }
}
