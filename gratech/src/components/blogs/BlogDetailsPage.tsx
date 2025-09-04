"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getMetaDataOfPage } from "@/utils/api";
import BlogSidebar from "./BlogSidebar";

interface BlogDetailsPageProps {
  slug: string;
}

export default function BlogDetailsPage({ slug }: BlogDetailsPageProps) {
  const [blogDetail, setBlogDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setLoading(true);
        const blogDetailData = await getMetaDataOfPage(slug);
        setBlogDetail(blogDetailData?.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setBlogDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="text-center py-5">
              <p>Loading blog details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!blogDetail) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="text-center py-5">
              <h2>Blog Post Not Found</h2>
              <p>The requested blog post could not be found.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="blog-header">
            <h2 className="blog-title">{blogDetail?.postTitle}</h2>
            <div className="meta-info">
              <span className="author">
                <span className="icons user-icon"></span>
                {blogDetail?.authorName}
              </span>
              <span className="date">
                <span className="icons calendar-icon"></span>
                {blogDetail?.publishedDates}
              </span>
            </div>
          </div>

          <div className="featured-post col-12 ">
            <div className="blog-bannerimg">
              <Image
                src={blogDetail?.fileName || '/assets/images/blog/post-sm1.png'}
                title={blogDetail?.title || 'Blog image'}
                alt={blogDetail?.alt || 'Blog image'}
                width={770}
                height={450}
                quality={100}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/assets/images/blog/post-sm1.png';
                }}
              />
            </div>
          </div>

          <div className="row">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={50}
              data-mobile={45}
              data-smobile={45}
            />
          </div>

          <div className="content-post">
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetail?.postContent || "",
              }}
            ></div>
          </div>

          {blogDetail?.showDetail ? (
            <div className="author-container ">
              <div className="author-card">
                <div className="author-content">
                  <div className="author-image">
                    <Image
                      src={blogDetail?.authorImage || '/assets/images/team/team-1.jpg'}
                      alt={blogDetail?.authorName || 'Author'}
                      width={80}
                      height={80}
                      quality={100}
                      className="profile-img"
                      style={{
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '3px solid #0f7a95'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/images/team/team-1.jpg';
                      }}
                    />
                  </div>

                  <div className="author-details">
                    <h3 className="author-name">{blogDetail?.authorName}</h3>
                    <p
                      className="author-bio"
                      dangerouslySetInnerHTML={{
                        __html: blogDetail?.authorBio,
                      }}
                    ></p>

                    <div className="social-links">
                      <div className="author-social-icons">
                          <a
                          href={"mailto:" + blogDetail?.authEmailId}
                            className="social-icon email"
                            title="Email"
                          ></a>
                          <a
                          href={blogDetail?.authLinkdinId}
                            className="social-icon linkedin"
                            target="_blank"
                            title="LinkedIn"
                          ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="col-lg-4 col-md-12">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
