"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getRecentBlogPosts, getBlogCategory } from "@/utils/api";

export default function BlogSidebar() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [recentPostsResponse, categoriesResponse] = await Promise.all([
          getRecentBlogPosts(),
          getBlogCategory()
        ]);
        
        setRecentPosts(recentPostsResponse?.data || []);
        setCategories(categoriesResponse?.data || []);
      } catch (error) {
        console.error('Error fetching sidebar data:', error);
        setRecentPosts([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div id="sidebar">
        <div id="inner-sidebar" className="inner-content-wrap">
          <div className="text-center py-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 small">Loading sidebar...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="sidebar">
      <div id="inner-sidebar" className="inner-content-wrap">
        {/* Search Widget */}
        <div className="widget widget_search mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h5 className="mb-3" style={{ 
            color: '#0f7a95', 
            fontSize: '18px', 
            fontWeight: '600',
            borderBottom: '2px solid #0f7a95',
            paddingBottom: '8px',
            marginBottom: '20px'
          }}>
            Search
          </h5>
          <div className="search-form-container">
            <div className="input-group" style={{ position: 'relative' }}>
              <input
                type="search"
                className="form-control"
                placeholder="Keywords here..."
                defaultValue=""
                name="s"
                title="Search for"
                style={{
                  border: '2px solid #e3f2fd',
                  borderRadius: '8px',
                  padding: '12px 50px 12px 15px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0f7a95'}
                onBlur={(e) => e.target.style.borderColor = '#e3f2fd'}
              />
              <button 
                type="submit" 
                title="Search"
                style={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#0f7a95',
                  border: 'none',
                  borderRadius: '6px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0a5f73'}
                onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0f7a95'}
              >
                <i className="fa fa-search" style={{ fontSize: '14px' }}></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Reach Out Us Widget */}
        <div className="widget widget_contact mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h5 className="mb-3" style={{ 
            color: '#0f7a95', 
            fontSize: '18px', 
            fontWeight: '600',
            borderBottom: '2px solid #0f7a95',
            paddingBottom: '8px',
            marginBottom: '20px'
          }}>
            Reach Out Us
          </h5>
          <form className="contact-form">
            <div className="form-group mb-3">
              <label style={{ 
                color: '#333', 
                fontSize: '14px', 
                fontWeight: '500', 
                marginBottom: '8px',
                display: 'block'
              }}>
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                style={{
                  border: '2px solid #e3f2fd',
                  borderRadius: '8px',
                  padding: '12px 15px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  backgroundColor: 'white',
                  width: '100%'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0f7a95'}
                onBlur={(e) => e.target.style.borderColor = '#e3f2fd'}
              />
            </div>
            <div className="form-group mb-3">
              <label style={{ 
                color: '#333', 
                fontSize: '14px', 
                fontWeight: '500', 
                marginBottom: '8px',
                display: 'block'
              }}>
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                style={{
                  border: '2px solid #e3f2fd',
                  borderRadius: '8px',
                  padding: '12px 15px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  backgroundColor: 'white',
                  width: '100%'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0f7a95'}
                onBlur={(e) => e.target.style.borderColor = '#e3f2fd'}
              />
            </div>
            <button 
              type="submit"
              style={{
                backgroundColor: '#0f7a95',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                width: '100%'
              }}
              onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0a5f73'}
              onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#0f7a95'}
            >
              Inquire Now
            </button>
          </form>
        </div>
        
        <div
          className="themesflat-spacer clearfix"
          data-desktop={10}
          data-mobile={0}
          data-smobile={0}
        />
        
        {/* Categories Widget */}
        <div className="widget widget_popular mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h5 className="mb-3" style={{ 
            color: '#0f7a95', 
            fontSize: '18px', 
            fontWeight: '600',
            borderBottom: '2px solid #0f7a95',
            paddingBottom: '8px',
            marginBottom: '20px'
          }}>
            Categories
          </h5>
          <ul className="category-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {categories.map((category: any, index: number) => (
              <li key={index} style={{ marginBottom: '12px' }}>
                <Link 
                  href={`/blog/category/${category.slug}`}
                  style={{
                    display: 'block',
                    padding: '10px 15px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    border: '1px solid #e9ecef'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#0f7a95';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#0f7a95';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.color = '#333';
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div
          className="themesflat-spacer clearfix"
          data-desktop={40}
          data-mobile={30}
          data-smobile={30}
        />
        
        {/* Recent Posts Widget */}
        <div className="widget widget_lastest mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h5 className="mb-3" style={{ 
            color: '#0f7a95', 
            fontSize: '18px', 
            fontWeight: '600',
            borderBottom: '2px solid #0f7a95',
            paddingBottom: '8px',
            marginBottom: '20px'
          }}>
            Recent Posts
          </h5>
          <ul className="recent-posts-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {recentPosts.map((post: any, index: number) => (
              <li key={index} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                marginBottom: '20px',
                padding: '15px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #e9ecef'
              }}>
                <div className="post-thumbnail" style={{ marginRight: '15px', flexShrink: 0 }}>
                  <Image
                    alt={post.postTitle}
                    src={post.fileName}
                    width={60}
                    height={55}
                    style={{
                      borderRadius: '6px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div className="post-content" style={{ flex: 1 }}>
                  <h6 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    fontWeight: '600'
                  }}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      style={{
                        color: '#333',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#0f7a95'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#333'}
                    >
                      {post.postTitle}
                    </Link>
                  </h6>
                  <div className="post-date" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    fontSize: '12px', 
                    color: '#666' 
                  }}>
                    <i className="fa fa-calendar" style={{ marginRight: '6px', color: '#0f7a95' }}></i>
                    <span>{post.publishedDates}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div
          className="themesflat-spacer clearfix"
          data-desktop={40}
          data-mobile={30}
          data-smobile={30}
        />
        
        {/* Tags Widget */}
        <div className="widget widget_tags mb-4" style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h5 className="mb-3" style={{ 
            color: '#0f7a95', 
            fontSize: '18px', 
            fontWeight: '600',
            borderBottom: '2px solid #0f7a95',
            paddingBottom: '8px',
            marginBottom: '20px'
          }}>
            Popular Tags
          </h5>
          <div className="tags-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['web design', 'ui/ux design', 'graphics', 'design', 'icon', 'graphics design', 'branding'].map((tag, index) => (
              <a 
                key={index}
                href="#" 
                style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: '#f8f9fa',
                  color: '#333',
                  textDecoration: 'none',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0f7a95';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = '#0f7a95';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}
              >
                {tag}
              </a>
            ))}
          </div>
        </div>
        
        <div
          className="themesflat-spacer clearfix"
          data-desktop={0}
          data-mobile={200}
          data-smobile={120}
        />
      </div>
    </div>
  );
}
