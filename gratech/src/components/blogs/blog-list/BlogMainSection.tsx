"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlog } from "@/utils/api";
import styles from "./BlogMainSection.module.css";

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
  categoryName?: string;
}

interface BlogMainSectionProps {
  pageNum?: number;
  categorySlug?: string;
}

export default function BlogMainSection({ pageNum = 1, categorySlug = "plusphysio" }: BlogMainSectionProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response: any = await getAllBlog(categorySlug, pageNum);
        const blogList = response?.data?.blogList?.resultSet || [];
        const pageCount = response?.data?.blogList?.pageCount || 1;
        
        setBlogs(blogList);
        setTotalPages(pageCount);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [categorySlug, pageNum]);

  if (loading) {
    return (
      <div className="container px-0">
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div className="text-center py-5">
              <p>Loading blogs...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.blogMainSection}`}>
          {blogs.length > 0 ? (
            blogs.map(
              (blog, i) =>
                blog.isPublished && (
                  <React.Fragment key={blog.id}>
                    <article className={`post clearfix post-standar fl-sd wow fadeInUp ${styles.blogPost}`}>
                      <div className={`featured-post ${styles.featuredPost}`}>
                        <Link href={`/blog/${blog.slug}`}>
                          <Image
                            alt={blog.alt || blog.postTitle}
                            src={blog.fileName || '/assets/images/blog/blog-image1.jpg'}
                            width={900}
                            height={540}
                            quality={100}
                            priority={i === 0}
                            style={{ 
                              objectFit: 'contain', 
                              objectPosition: 'center center',
                              width: '100%', 
                              height: 'auto',
                              borderRadius: '8px 8px 0 0',
                              display: 'block',
                              backgroundColor: '#f8f9fa'
                            }}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/assets/images/blog/blog-image1.jpg';
                            }}
                          />
                        </Link>
                      </div>
                      <div className={`content-post ${styles.contentPost}`}>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={31}
                          data-mobile={10}
                          data-smobile={10}
                        />
                        <ul className={`meta ${styles.meta}`}>
                          <li className="author">
                            <Link href={`/blog/${blog.slug}`}>
                              {blog.authorName}
                            </Link>
                          </li>
                          <li className="day-post">
                            <Link href={`/blog/${blog.slug}`}>
                              {blog.publishedDates}
                            </Link>
                          </li>
                          {blog.categoryName && (
                            <li className="category">
                              <Link href={`/blog-category/${blog.categoryName.toLowerCase().replace(/\s+/g, '-')}`}>
                                {blog.categoryName}
                              </Link>
                            </li>
                          )}
                        </ul>
                        <h2 className={`blog-title-small ${styles.blogTitleSmall}`}>
                          <Link href={`/blog/${blog.slug}`}>
                            {blog.postTitle}
                          </Link>
                        </h2>
                        <p className={styles.blogExcerpt} style={{ paddingLeft: 0, marginLeft: 0, textIndent: 0, textAlign: 'left' }}>
                          {blog.postContent.length > 160
                            ? `${blog.postContent.slice(0, 160)}...`
                            : blog.postContent}
                        </p>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={23}
                          data-mobile={10}
                          data-smobile={10}
                        />
                        <div className={`flat-read-more ${styles.readMoreContainer}`}>
                          <Link
                            href={`/blog/${blog.slug}`}
                            className={`themesflat-button bg-accent btn-read-more ${styles.readMoreButton}`}
                            style={{
                              display: 'inline-block',
                              padding: '10px 20px',
                              fontSize: '13px',
                              fontWeight: '500',
                              textTransform: 'none',
                              letterSpacing: '0.3px',
                              borderRadius: '4px',
                              backgroundColor: 'white',
                              color: '#0f7a95',
                              textDecoration: 'none',
                              border: '2px solid #0f7a95',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#0f7a95';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'white';
                              e.currentTarget.style.color = '#0f7a95';
                            }}
                          >
                            <span>Read More</span>
                          </Link>
                        </div>
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={33}
                          data-mobile={30}
                          data-smobile={30}
                        />
                      </div>
                    </article>
                    {i + 1 !== blogs.length && (
                      <div
                        className="themesflat-spacer clearfix"
                        data-desktop={40}
                        data-mobile={30}
                        data-smobile={30}
                      />
                    )}
                  </React.Fragment>
                )
            )
          ) : (
            <div className="text-center py-5">
              <p>Oops! No blogs found.</p>
            </div>
          )}
          <div
            className="themesflat-spacer clearfix"
            data-desktop={103}
            data-mobile={70}
            data-smobile={70}
          />
          {totalPages > 1 && (
            <div className="pagination-wrapper">
              {/* Pagination will be handled by the parent component */}
              <p>Page {pageNum} of {totalPages}</p>
            </div>
          )}
        <div
          className="themesflat-spacer clearfix"
          data-desktop={244}
          data-mobile={60}
          data-smobile={60}
        />
    </div>
  );
}
