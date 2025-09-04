"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBlogsOfCategory } from "@/utils/api";
import BlogBanner from "./BlogBanner";

interface Blog {
  id: string;
  slug: string;
  postTitle: string;
  postContent: string;
  authorName: string;
  publishedDates: string;
  fileName: string;
  alt?: string;
  isPublished: boolean;
}

interface Category {
  id: string;
  categoryName: string;
  slug?: string;
  description?: string;
  image?: string;
  catTitle?: string;
}

interface BlogCategoryPageProps {
  category: Category;
  blogs: Blog[];
  totalPages: number;
  currentPage: number;
  categorySlug: string;
}

export default function BlogCategoryPage({ 
  category, 
  blogs: initialBlogs, 
  totalPages: initialTotalPages, 
  currentPage, 
  categorySlug 
}: BlogCategoryPageProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPageNum, setCurrentPageNum] = useState(currentPage);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (currentPageNum === 1) return;
      
      try {
        setLoading(true);
        const response: any = await getBlogsOfCategory(categorySlug, currentPageNum);
        const blogList = response?.data?.blogList?.resultSet || [];
        const pageCount = response?.data?.blogList?.pageCount || 1;
        
        setBlogs(blogList);
        setTotalPages(pageCount);
      } catch (error) {
        // Silent error handling
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPageNum, categorySlug]);

  const handlePageChange = (page: number) => {
    setCurrentPageNum(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Full-width breadcrumb/banner identical to blog page */}
      <BlogBanner 
        pageName={categorySlug}
        sectionName="Blog Category"
        sectionHref="/blog-category"
      />

      {/* Page content */}
      <section className="blog-area pb-120" style={{ paddingTop: 24 }}>
        <div className="container">
          {/* Category Header */}
          <div className="category-header mb-5">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="category-title-wrap" style={{ marginBottom: '1rem' }}>
                  <h2 style={{ 
                    display: 'inline-block',
                    fontSize: '2rem', 
                    fontWeight: 700, 
                    color: '#0f7a95',
                    margin: 0,
                    marginRight: 8
                  }}>
                    Blog Category by
                  </h2>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#000',
                    whiteSpace: 'nowrap',
                    textTransform: 'none'
                  }}>
                    {categorySlug}
                  </span>
                </div>
                {category.description && (
                  <p className="category-description" style={{ 
                    fontSize: '1.1rem', 
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    {category.description}
                  </p>
                )}
              </div>
              <div className="col-lg-4 text-center">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.categoryName}
                    width={200}
                    height={150}
                    style={{ 
                      objectFit: 'cover',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '200px',
                    height: '150px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '1.2rem'
                  }}>
                    {category.categoryName}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Blog grid - two per row, full width, no sidebar */}
          {loading ? (
            <div className="text-center py-5">
              <p>Loading blogs...</p>
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="row g-4">
                {blogs.map((blog, i) => (
                  blog.isPublished && (
                    <div key={blog.id} className="col-lg-6 col-md-6">
                      <article className="post clearfix post-standar fl-sd wow fadeInUp" style={{
                        marginBottom: '0px',
                        padding: '0',
                        background: '#fff',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        border: '1px solid #f0f0f0',
                        height: '100%'
                      }}>
                        <div className="featured-post" style={{ position: 'relative', overflow: 'hidden' }}>
                          <Link href={`/blog/${blog.slug}`}>
                            <Image
                              alt={blog.alt || blog.postTitle}
                              src={blog.fileName}
                              width={900}
                              height={540}
                              quality={100}
                              priority={i === 0}
                              style={{ 
                                objectFit: 'cover', 
                                width: '100%', 
                                maxWidth: '100%', 
                                margin: 0, 
                                padding: 0 
                              }}
                            />
                          </Link>
                        </div>
                        <div className="content-post" style={{ padding: '20px 25px 25px' }}>
                          <ul className="meta" style={{
                            listStyle: 'none',
                            padding: '0',
                            margin: '0 0 15px 0',
                            display: 'flex',
                            gap: '20px',
                            fontSize: '13px',
                            color: '#6b7280',
                            fontWeight: '400'
                          }}>
                            <li className="author">
                              <Link href={`/blog/${blog.slug}`} style={{ color: '#6b7280', textDecoration: 'none' }}>
                                {blog.authorName}
                              </Link>
                            </li>
                            <li className="day-post">
                              <Link href={`/blog/${blog.slug}`} style={{ color: '#6b7280', textDecoration: 'none' }}>
                                {blog.publishedDates}
                              </Link>
                            </li>
                          </ul>
                          <h2 className="blog-title-small" style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            lineHeight: '1.3',
                            margin: '0 0 15px 0',
                            color: '#2c3e50'
                          }}>
                            <Link href={`/blog/${blog.slug}`} style={{ color: '#2c3e50', textDecoration: 'none' }}>
                              {blog.postTitle}
                            </Link>
                          </h2>
                          {/* No excerpt and no read-more button */}
                        </div>
                      </article>
                    </div>
                  )
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination-wrapper" style={{ textAlign: 'center', marginTop: '40px' }}>
                  <div className="pagination">
                    {currentPageNum > 1 && (
                      <button
                        onClick={() => handlePageChange(currentPageNum - 1)}
                        style={{
                          padding: '8px 16px',
                          margin: '0 4px',
                          border: '1px solid #0f7a95',
                          background: 'white',
                          color: '#0f7a95',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Previous
                      </button>
                    )}
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        style={{
                          padding: '8px 16px',
                          margin: '0 4px',
                          border: page === currentPageNum ? 'none' : '1px solid #0f7a95',
                          background: page === currentPageNum ? '#0f7a95' : 'white',
                          color: page === currentPageNum ? 'white' : '#0f7a95',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        {page}
                      </button>
                    ))}
                    
                    {currentPageNum < totalPages && (
                      <button
                        onClick={() => handlePageChange(currentPageNum + 1)}
                        style={{
                          padding: '8px 16px',
                          margin: '0 4px',
                          border: '1px solid #0f7a95',
                          background: 'white',
                          color: '#0f7a95',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Next
                      </button>
                    )}
                  </div>
                  <p style={{ marginTop: '20px', color: '#6b7280' }}>
                    Page {currentPageNum} of {totalPages}
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5">
              <p>No blogs found in this category.</p>
            </div>
          )}

          {/* Newsletter Section - Same style as blog page */}
          <section className="newsletter-section pt-80 pb-80" style={{
            background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #f0f8ff 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* dotted background */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle, #0f7a95 1px, transparent 1px)',
              backgroundSize: '20px 20px', opacity: 0.08, pointerEvents: 'none'
            }} />

            <div className="container">
              <div className="row align-items-center justify-content-between" style={{ rowGap: 24 }}>
                <div className="col-lg-6">
                  <h3 style={{
                    color: '#0f7a95', fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 12
                  }}>
                    Subscribe to our{' '}
                    <span style={{ color: '#000' }}>Newsletter</span>
                  </h3>
                </div>
                <div className="col-lg-6">
                  {/* right aligned form with max width */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <form style={{ width: '100%', maxWidth: 560 }} noValidate>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* Input pill - right corners squared to merge */}
                        <input
                          type="email"
                          placeholder="Enter your email here"
                          required
                          style={{
                            height: 54,
                            flex: 1,
                            padding: '0 18px',
                            border: '2px solid #0f7a95',
                            borderTopLeftRadius: 28,
                            borderBottomLeftRadius: 28,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            outline: 'none',
                            backgroundColor: '#fff',
                            color: '#333',
                            boxShadow: '0 6px 18px rgba(15, 122, 149, 0.12)'
                          }}
                        />
                        {/* Button - shares border, no left border to avoid double line */}
                        <button
                          type="submit"
                          style={{
                            height: 54,
                            padding: '0 28px',
                            backgroundColor: '#0f7a95',
                            color: '#fff',
                            border: '2px solid #0f7a95',
                            borderLeft: 'none',
                            borderTopRightRadius: 28,
                            borderBottomRightRadius: 28,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            fontSize: '1rem',
                            fontWeight: 700,
                            whiteSpace: 'nowrap',
                            cursor: 'pointer',
                            boxShadow: '0 6px 18px rgba(15, 122, 149, 0.18)'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0a5a6a')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f7a95')}
                        >
                          Send now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
