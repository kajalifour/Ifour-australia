"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlog } from "@/utils/api";
import styles from "./BlogMainSection.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Lightweight button style enforcement - only when blogs are loaded
  useEffect(() => {
    if (blogs.length > 0) {
      // Single timeout to apply styles after blogs are rendered
      const timeoutId = setTimeout(() => {
        const buttons = document.querySelectorAll('.flat-read-more a');
        buttons.forEach((button) => {
          const el = button as HTMLElement;
          el.style.setProperty('width', 'auto', 'important');
          el.style.setProperty('min-width', 'auto', 'important');
          el.style.setProperty('max-width', 'none', 'important');
          el.style.setProperty('padding', '10px 20px', 'important');
          el.style.setProperty('font-size', '14px', 'important');
          el.style.setProperty('border-radius', '6px', 'important');
          el.style.setProperty('height', 'auto', 'important');
          el.style.setProperty('line-height', 'normal', 'important');
          el.style.setProperty('color', 'white', 'important');
          
          const span = el.querySelector('span');
          if (span) {
            span.style.setProperty('color', 'white', 'important');
          }
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [blogs]);

  // Derive current page from the query string, fallback to prop/default
  const currentPage = useMemo(() => {
    const fromQuery = Number(searchParams?.get("page") || "");
    return Number.isFinite(fromQuery) && fromQuery > 0 ? fromQuery : pageNum || 1;
  }, [searchParams, pageNum]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response: any = await getAllBlog(categorySlug, currentPage);
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
  }, [categorySlug, currentPage]);

  const goToPage = (p: number) => {
    if (!router) return;
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("page", String(p));
    router.push(`${pathname}?${params.toString()}`);
  };

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
                            quality={75}
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
                            className={`btn-one ${styles.readMoreButton}`}
                            style={{
                              display: 'inline-block',
                              padding: '10px 20px',
                              fontSize: '14px',
                              fontWeight: '600',
                              textTransform: 'none',
                              letterSpacing: '0.3px',
                              borderRadius: '6px',
                              backgroundColor: '#0f7a95',
                              color: 'white',
                              textDecoration: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              boxShadow: '0 4px 15px rgba(15, 122, 149, 0.2)',
                              position: 'relative',
                              overflow: 'hidden',
                              width: 'auto',
                              minWidth: 'auto',
                              maxWidth: 'none',
                              height: 'auto',
                              lineHeight: 'normal',
                              textAlign: 'center',
                              boxSizing: 'border-box'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.setProperty('background-color', '#0a5a6a', 'important');
                              e.currentTarget.style.setProperty('transform', 'translateY(-2px)', 'important');
                              e.currentTarget.style.setProperty('box-shadow', '0 6px 20px rgba(15, 122, 149, 0.3)', 'important');
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.setProperty('background-color', '#0f7a95', 'important');
                              e.currentTarget.style.setProperty('transform', 'translateY(0)', 'important');
                              e.currentTarget.style.setProperty('box-shadow', '0 4px 15px rgba(15, 122, 149, 0.2)', 'important');
                            }}
                            ref={(el) => {
                              if (el) {
                                // Apply button size and color styles
                                el.style.setProperty('width', 'auto', 'important');
                                el.style.setProperty('min-width', 'auto', 'important');
                                el.style.setProperty('max-width', 'none', 'important');
                                el.style.setProperty('padding', '10px 20px', 'important');
                                el.style.setProperty('font-size', '14px', 'important');
                                el.style.setProperty('border-radius', '6px', 'important');
                                el.style.setProperty('height', 'auto', 'important');
                                el.style.setProperty('line-height', 'normal', 'important');
                                el.style.setProperty('color', 'white', 'important');
                                
                                const span = el.querySelector('span');
                                if (span) {
                                  span.style.setProperty('color', 'white', 'important');
                                }
                              }
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
            <div className="pagination-wrapper" style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
              <button
                aria-label="Previous page"
                disabled={currentPage <= 1}
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #0f7a95',
                  background: currentPage <= 1 ? '#e9ecef' : '#fff',
                  color: '#0f7a95',
                  borderRadius: 4,
                  cursor: currentPage <= 1 ? 'not-allowed' : 'pointer'
                }}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, idx) => {
                const p = idx + 1;
                const isActive = p === currentPage;
                return (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #0f7a95',
                      background: isActive ? '#0f7a95' : '#fff',
                      color: isActive ? '#fff' : '#0f7a95',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}
                  >
                    {p}
                  </button>
                );
              })}
              <button
                aria-label="Next page"
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                style={{
                  padding: '8px 12px',
                  border: '1px solid #0f7a95',
                  background: currentPage >= totalPages ? '#e9ecef' : '#fff',
                  color: '#0f7a95',
                  borderRadius: 4,
                  cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer'
                }}
              >
                Next
              </button>
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
