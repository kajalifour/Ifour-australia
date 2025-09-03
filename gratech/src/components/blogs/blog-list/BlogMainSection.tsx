"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlog } from "@/utils/api";

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
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          {blogs.length > 0 ? (
            blogs.map(
              (blog, i) =>
                blog.isPublished && (
                  <React.Fragment key={blog.id}>
                    <article className="post clearfix post-standar fl-sd wow fadeInUp">
                      <div className="featured-post">
                        <Link href={`/blog/${blog.slug}`}>
                          <Image
                            alt={blog.alt || blog.postTitle}
                            src={blog.fileName}
                            width={770}
                            height={450}
                            quality={100}
                            priority={i === 0}
                            style={{ objectFit: 'cover' }}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </Link>
                      </div>
                      <div className="content-post">
                        <div
                          className="themesflat-spacer clearfix"
                          data-desktop={31}
                          data-mobile={10}
                          data-smobile={10}
                        />
                        <ul className="meta">
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
                        <h1 className="title-post">
                          <Link href={`/blog/${blog.slug}`}>
                            {blog.postTitle}
                          </Link>
                        </h1>
                        <p>
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
                        <div className="flat-read-more">
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="themesflat-button bg-accent btn-read-more"
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
  );
}
