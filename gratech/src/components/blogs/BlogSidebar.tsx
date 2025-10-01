"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogCategory, getBlogCategoriesAlternative, getRecentBlogPosts, getAllBlog, CONTACT_FORM_ADD_API } from "@/utils/api";

interface Category {
  id: string;
  catId?: number;
  catTitle?: string;
  catSlug?: string;
  categoryName?: string;
  categorySlug?: string;
  name?: string;
  slug?: string;
}

interface RecentPost {
  id: string;
  postId?: string;
  slug: string;
  postTitle: string;
  publishedDates: string;
}

export default function BlogSidebar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [reachSubmitted, setReachSubmitted] = useState(false);
  const [reachName, setReachName] = useState("");
  const [reachEmail, setReachEmail] = useState("");

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        setLoading(true);
        
        // Try to get categories from primary endpoint first
        let categoriesResponse = await getBlogCategory();
        
        // If no categories, try alternative endpoint
        if (!(categoriesResponse as any)?.data?.resultSet && !(categoriesResponse as any)?.data) {
          categoriesResponse = await getBlogCategoriesAlternative();
        }
        
        // Get recent posts (API returns by fixed category)
        const recentPostsResponse = await getRecentBlogPosts();

        const categoriesData: any = categoriesResponse as any;
        const recentPostsData: any = recentPostsResponse as any;

        const categoryList = categoriesData?.data?.resultSet || categoriesData?.data || [];
        const recentPostsRaw = recentPostsData?.data?.resultSet || recentPostsData?.data || [];

        // Normalize function
        const normalize = (arr: any[]): RecentPost[] =>
          (Array.isArray(arr) ? arr : [])
            .filter((p: any) => p && (p.isPublished === undefined || p.isPublished === true))
            .map((item: any) => ({
              id: String(item.id ?? item.postId ?? item.postID ?? item.slug ?? crypto?.randomUUID?.() ?? Math.random()),
              postId: String(item.postId ?? item.id ?? item.postID ?? ''),
              slug: item.slug ?? item.postSlug ?? '',
              postTitle: item.postTitle ?? item.title ?? item.name ?? 'Untitled',
              publishedDates: item.publishedDates ?? item.publishedDate ?? item.createdAt ?? ''
            }));

        let recentList: RecentPost[] = normalize(recentPostsRaw);
        
        // Fallback: if empty, get from GetAll (first page), regardless of category
        if (recentList.length === 0) {
          const allRes: any = await getAllBlog("", 1); // empty catSlug returns all if backend allows
          const allRaw = allRes?.data?.blogList?.resultSet || [];
          recentList = normalize(allRaw);
        }

        // Final limit
        recentList = recentList.slice(0, 8);

        setCategories(categoryList);
        setRecentPosts(recentList);
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
        <div className="widget widget_loading mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
            Loading...
          </h5>
        </div>
      </div>
    );
  }

  return (
    <div id="sidebar" className="sidebar">

      {/* Recent Posts Widget */}
      <div className="widget widget_recent_posts mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minHeight: '200px' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Recent Posts
        </h5>
        <ul className="recent-posts-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <li
                key={post.id || post.postId || `post-${post.slug}`}
                style={{
                  marginBottom: '14px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid #eef2f7',
                }}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  style={{ 
                    color: '#1f2937',
                    textDecoration: 'none', 
                    fontSize: '15px',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '6px',
                    lineHeight: '1.5',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0f7a95')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#1f2937')}
                >
                  {post.postTitle}
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d1d5db', display: 'inline-block' }} />
                  <span style={{ color: '#6b7280', fontSize: '12px' }}>{post.publishedDates}</span>
                </div>
              </li>
            ))
          ) : (
            <li style={{ color: '#6b7280', fontSize: '14px', fontStyle: 'italic', padding: '20px 0' }}>
              No recent posts available
            </li>
          )}
        </ul>
      </div>

      {/* Categories Widget */}
      <div className="widget widget_categories mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', minHeight: '150px' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Categories
        </h5>
        <ul className="categories-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.catId || category.id} style={{ marginBottom: '10px' }}>
                <Link 
                  href={`/blog-category/${category.catSlug || category.categorySlug || category.slug || category.categoryName?.toLowerCase().replace(/\s+/g, '-')}`}
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
                  {category.catTitle || category.categoryName || category.name}
                </Link>
              </li>
            ))
          ) : (
            <li style={{ color: '#6b7280', fontSize: '14px', fontStyle: 'italic', padding: '20px 0' }}>
              No categories available
            </li>
          )}
        </ul>
      </div>

      {/* Reach out to us Widget */}
      <div className="widget widget_reach_out mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h5 className="mb-3" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #0f7a95', paddingBottom: '8px', marginBottom: '20px' }}>
          Reach Out Us
        </h5>
        <div className="reach-out-content">
          {!reachSubmitted && (
            <>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const payload = {
                      name: reachName,
                      email: reachEmail,
                    };
                    await CONTACT_FORM_ADD_API(payload);
                    setReachSubmitted(true);
                    setReachName("");
                    setReachEmail("");
                  } catch (error) {
                    console.error('BlogSidebar: API call failed:', error);
                  }
                }}
                style={{ display: 'grid', gap: '12px' }}
              >
                <div>
                  <label htmlFor="reachName" style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Your Name</label>
                  <input
                    id="reachName"
                    name="name"
                    type="text"
                    placeholder=""
                    required
                    value={reachName}
                    onChange={(e) => setReachName(e.target.value)}
                    style={{ width: '100%', border: '2px solid #e9ecef', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', background: '#ffffff', color: '#111827' }}
                  />
                </div>
                <div>
                  <label htmlFor="reachEmail" style={{ display: 'block', color: '#374151', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Email Address</label>
                  <input
                    id="reachEmail"
                    name="email"
                    type="email"
                    placeholder=""
                    required
                    value={reachEmail}
                    onChange={(e) => setReachEmail(e.target.value)}
                    style={{ width: '100%', border: '2px solid #e9ecef', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', background: '#ffffff', color: '#111827' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#0f7a95', color: 'white', textDecoration: 'none', padding: '10px 20px', borderRadius: '6px', display: 'inline-block', fontSize: '14px', border: 'none' }}>
                  Inquire Now
                </button>
              </form>
            </>
          )}
          {reachSubmitted && (
            <div style={{ backgroundColor: '#e5ebef', color: '#111827', padding: '22px', borderRadius: '6px', textAlign: 'center', fontSize: '15px', fontWeight: 500 }}>
              Thank you! Your submission has been received!
            </div>
          )}
        </div>
      </div>

      {/* Popular Tags Widget - REMOVED */}
    </div>
  );
}