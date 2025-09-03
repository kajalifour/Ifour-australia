"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogCategory, getRecentBlogPosts } from "@/utils/api";

interface Category {
  id: string;
  categoryName: string;
  categorySlug: string;
}

interface RecentPost {
  id: string;
  slug: string;
  postTitle: string;
  publishedDates: string;
}

export default function BlogSidebar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories and recent posts in parallel
        const [categoriesResponse, recentPostsResponse] = await Promise.all([
          getBlogCategory(),
          getRecentBlogPosts()
        ]);

        const categoryList = categoriesResponse?.data?.resultSet || [];
        const recentPostsList = recentPostsResponse?.data?.resultSet || [];

        setCategories(categoryList);
        setRecentPosts(recentPostsList);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
        setCategories([]);
        setRecentPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSidebarData();
  }, []);

  if (loading) {
    return (
      <div id="sidebar" className="sidebar">
        <div className="widget widget_search mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
            Loading...
          </h5>
        </div>
      </div>
    );
  }

  return (
    <div id="sidebar" className="sidebar">
      {/* Search Widget */}
      <div className="widget widget_search mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Search
        </h5>
        <div className="search-form-container">
          <div className="input-group" style={{ position: 'relative' }}>
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              style={{ border: '2px solid #e9ecef', borderRadius: '8px', padding: '12px 15px', fontSize: '14px' }}
            />
            <button
              className="btn"
              type="submit"
              style={{ position: 'absolute', right: '5px', top: '50%', transform: 'translateY(-50%)', backgroundColor: '#0f7a95', color: 'white', border: 'none', borderRadius: '6px', padding: '8px 15px', fontSize: '14px' }}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Reach Out Us Widget */}
      <div className="widget widget_reach_out mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Reach Out Us
        </h5>
        <div className="reach-out-content">
          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
            Have questions or need assistance? We're here to help!
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: '#0f7a95', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '6px', display: 'inline-block', fontSize: '14px' }}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="widget widget_categories mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Categories
        </h5>
        <ul className="categories-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {categories.map((category) => (
            <li key={category.id} style={{ marginBottom: '10px' }}>
              <Link 
                href={`/blog-category/${category.categorySlug}`}
                style={{ 
                  color: '#0f7a95', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  display: 'block',
                  padding: '8px 0',
                  borderBottom: '1px solid #f0f0f0',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0a5a6f'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0f7a95'}
              >
                {category.categoryName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="widget widget_recent_posts mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Recent Posts
        </h5>
        <ul className="recent-posts-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {recentPosts.map((post) => (
            <li key={post.id} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #f0f0f0' }}>
              <Link 
                href={`/blog/${post.slug}`}
                style={{ 
                  color: '#333', 
                  textDecoration: 'none', 
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'block',
                  marginBottom: '5px',
                  lineHeight: '1.4',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0f7a95'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
              >
                {post.postTitle}
              </Link>
              <span style={{ color: '#666', fontSize: '12px' }}>
                {post.publishedDates}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags Widget */}
      <div className="widget widget_popular_tags mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Popular Tags
        </h5>
        <div className="tags-container">
          {['web design', 'ui/ux design', 'graphics', 'design', 'icon', 'graphics design', 'branding'].map((tag, index) => (
            <Link
              key={index}
              href={`/blog-category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="tag-link"
              style={{
                display: 'inline-block',
                backgroundColor: '#f8f9fa',
                color: '#0f7a95',
                padding: '6px 12px',
                margin: '3px',
                borderRadius: '20px',
                fontSize: '12px',
                textDecoration: 'none',
                border: '1px solid #e9ecef',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0f7a95';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.color = '#0f7a95';
              }}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
