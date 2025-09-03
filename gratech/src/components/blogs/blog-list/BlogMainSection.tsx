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
        const response = await getAllBlog(categorySlug, pageNum);
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
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="text-center py-5">
              <p>Loading blogs...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.blogMainSection}`} style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
      <div className="container" style={{ maxWidth: '100%', width: '100%', margin: 0, padding: 0 }}>
        <div className="row" style={{ margin: 0, width: '100%' }}>
          <div className="col-lg-8 col-md-12" style={{ width: '100%', maxWidth: '100%', flex: '0 0 100%', padding: 0, margin: 0 }}>
          {blogs.length > 0 ? (
            blogs.map(
              (blog, i) =>
                blog.isPublished && (
                  <React.Fragment key={blog.id}>
                    <article className={`post clearfix post-standar fl-sd wow fadeInUp ${styles.blogPost}`} style={{ width: '100%', maxWidth: '100%', marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
                      <div className={`featured-post ${styles.featuredPost}`} style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
                        <Link href={`/blog/${blog.slug}`}>
                          <Image
                            alt={blog.alt || blog.postTitle}
                            src={blog.fileName}
                            width={900}
                            height={540}
                            quality={100}
                            priority={i === 0}
                            style={{ objectFit: 'cover', width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
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
                              background: 'white',
                              color: '#0f7a95',
                              textDecoration: 'none',
                              border: '2px solid #0f7a95',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#0f7a95';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'white';
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
        </div>
      </div>
      <div className="row">
        <div
          className="themesflat-spacer clearfix"
          data-desktop={244}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    </div>
  </div>
  );
}
