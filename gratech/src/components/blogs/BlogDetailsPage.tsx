import React from "react";
import Image from "next/image";
import { getMetaDataOfPage } from "@/utils/api";
import BlogSidebar from "./BlogSidebar";

interface BlogDetailsPageProps {
  slug: string;
}

export default async function BlogDetailsPage({ slug }: BlogDetailsPageProps) {
  const blogDetailData = await getMetaDataOfPage(slug);
  const blogDetail = blogDetailData?.data;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="blog-header">
            <h1 className="blog-title">{blogDetail?.postTitle}</h1>
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
                style={{ objectFit: 'cover' }}
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
                    <img
                      src={blogDetail?.authorImage}
                      alt={blogDetail?.authorName}
                      className="profile-img"
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
