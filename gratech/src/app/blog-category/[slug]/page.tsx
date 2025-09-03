import React from "react";
import { getBlogCategory, getBlogsOfCategory } from "@/utils/api";
import { notFound } from "next/navigation";
import BlogCategoryPage from "@/components/blogs/BlogCategoryPage";

interface Props {
  params: { slug: string };
}

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  try {
    const categories = await getBlogCategory();
    const categoryList = categories?.data || [];
    
    return categoryList.map((category: any) => ({
      slug: category.catSlug || category.slug || category.categoryName?.toLowerCase().replace(/\s+/g, '-'),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
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
    console.error('Error loading category page:', error);
    notFound();
  }
}
