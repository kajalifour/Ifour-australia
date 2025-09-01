"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlog } from '@/utils/api';

interface BlogMainSectionProps {
  pageNum?: number;
}

export default function BlogMainSection({ pageNum = 1 }: BlogMainSectionProps) {
  const [blogs, setBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getAllBlog(pageNum);
        setBlogs(response?.data?.blogList?.resultSet || []);
        setTotalPages(response?.data?.blogList?.pageCount || 1);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [pageNum]);

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div
            className="themesflat-spacer clearfix"
            data-desktop={80}
            data-mobile={70}
            data-smobile={70}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading blog posts...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={70}
          data-smobile={70}
        />
      </div>
      <div className="row">
        <div className="col-12">
          {blogs.length > 0 ? (
            blogs.map((blog: any, i: number) => (
              blog.isPublished && (
                <React.Fragment key={blog.id}>
                  <article className="post clearfix post-standar fl-sd wow fadeInUp">
                    {/* Blog Image with Overlay Card */}
                    <div className="featured-post position-relative">
                      <Image
                        alt={blog.alt || blog.postTitle}
                        src={blog.fileName}
                        width={770}
                        height={450}
                        quality={95}
                        priority={i === 0}
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        onError={(e) => {
                          console.error('Image failed to load:', blog.fileName);
                          const target = e.target as HTMLImageElement;
                          target.src = '/assets/images/blog/blog-image1.jpg'; // Fallback image
                        }}
                      />
                      
                      {/* Informative Card Overlay */}
                      <div className="blog-info-overlay position-absolute" style={{
                        bottom: '20px',
                        left: '20px',
                        right: '20px',
                        backgroundColor: 'rgba(248, 249, 250, 0.95)',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(233, 236, 239, 0.8)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 10,
                        pointerEvents: 'auto'
                      }}>
                        {/* Meta Information */}
                        <div className="blog-meta" style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '20px',
                          marginBottom: '12px'
                        }}>
                          <div className="date" style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0f7a95',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <i className="fa fa-calendar" style={{ 
                              marginRight: '6px',
                              fontSize: '16px'
                            }}></i>
                            <span>{blog.publishedDates}</span>
                          </div>
                          <div className="author" style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0f7a95',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}>
                            <i className="fa fa-user" style={{ 
                              marginRight: '6px',
                              fontSize: '16px'
                            }}></i>
                            <span>{blog.authorName}</span>
                          </div>
                        </div>
                        
                        {/* Blog Title */}
                        <div className="blog-title" style={{
                          fontSize: '18px',
                          fontWeight: '600',
                          lineHeight: '1.4',
                          wordWrap: 'break-word',
                          overflowWrap: 'break-word'
                        }}>
                          <Link 
                            href={`/blog/${blog.slug}`}
                            style={{
                              color: '#0f7a95',
                              textDecoration: 'none',
                              transition: 'color 0.3s ease',
                              cursor: 'pointer',
                              display: 'block',
                              width: '100%'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.color = '#0a5f73'}
                            onMouseOut={(e) => e.currentTarget.style.color = '#0f7a95'}
                          >
                            {blog.postTitle}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                  {i + 1 !== blogs.length && (
                    <div style={{ height: '50px' }} />
                  )}
                </React.Fragment>
              )
            ))
          ) : (
            <div className="text-center py-5">
              <p>Oops! No blogs found.</p>
            </div>
          )}
          
          {/* Pagination */}
          <div
            className="themesflat-spacer clearfix"
            data-desktop={103}
            data-mobile={70}
            data-smobile={70}
          />
          {totalPages > 1 && (
            <div className="themesflat-pagination clearfix wow fadeInUp">
              <ul>
                <li>
                  <Link
                    href={`/blog?page=${pageNum > 1 ? pageNum - 1 : 1}`}
                    className={`page-numbers prev ${pageNum === 1 ? "disabled" : ""}`}
                  >
                    <span className="fa fa-angle-left" />
                  </Link>
                </li>
                
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  if (
                    page === 1 || 
                    page === totalPages || 
                    (page >= pageNum - 1 && page <= pageNum + 1)
                  ) {
                    return (
                      <li key={page}>
                        <Link
                          href={`/blog?page=${page}`}
                          className={`page-numbers ${page === pageNum ? "current" : ""}`}
                        >
                          {page}
                        </Link>
                      </li>
                    );
                  }
                  if (page === 2 && pageNum > 3) {
                    return (
                      <li key="ellipsis1">
                        <span className="page-numbers">...</span>
                      </li>
                    );
                  }
                  if (page === totalPages - 1 && pageNum < totalPages - 2) {
                    return (
                      <li key="ellipsis2">
                        <span className="page-numbers">...</span>
                      </li>
                    );
                  }
                  return null;
                })}
                
                <li>
                  <Link
                    href={`/blog?page=${pageNum < totalPages ? pageNum + 1 : totalPages}`}
                    className={`page-numbers next ${pageNum === totalPages ? "disabled" : ""}`}
                  >
                    <span className="fa fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
