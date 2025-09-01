import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getBlogDetails } from "@/utils/api";
import BlogSidebar from "./BlogSidebar";
import CommentBox from "./CommentBox";

interface BlogDetailsPageProps {
  blogSlug: string;
}

export default async function BlogDetailsPage({ blogSlug }: BlogDetailsPageProps) {
  // Fetch blog details from API
  const response = await getBlogDetails(blogSlug);
  const blog = response?.data;

  if (!blog || response.notFound) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-5">
            <h2>Blog post not found</h2>
            <Link href="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
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
        <div className="col-lg-8 col-md-12 col-sm-12">
          <article className="post clearfix wow fadeInUp">
            <div className="featured-post">
              <Image
                alt={blog.alt || blog.postTitle}
                src={blog.fileName}
                width={770}
                height={450}
              />
            </div>
            <div className="content-post">
              <div
                className="themesflat-spacer clearfix"
                data-desktop={20}
                data-mobile={10}
                data-smobile={10}
              />
              <ul className="meta">
                <li className="author">{blog.authorName}</li>
                <li className="day-post">{blog.publishedDates}</li>
              </ul>
              <h1 className="title-post">
                {blog.postTitle}
              </h1>
              <div
                className="themesflat-spacer clearfix"
                data-desktop={0}
                data-mobile={0}
                data-smobile={0}
              />
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.postContent }}
              />
              
              {/* Social Sharing */}
              <div className="direction">
                <ul className="button-direction fl-left">
                  <li>Share</li>
                </ul>
                <ul className="share-direction fl-right">
                  <li>
                    <p className="text-color-title-sidebarr">Share :</p>
                  </li>
                  <li>
                    <ul className="icon-direction">
                      <li className="style-icon-facebook">
                        <a 
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-color-white"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li className="style-icon-twitter">
                        <a 
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(blog.postTitle)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-color-white"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li className="style-icon-pinterest">
                        <a 
                          href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&media=${encodeURIComponent(blog.fileName)}&description=${encodeURIComponent(blog.postTitle)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-color-white"
                        >
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div
                className="themesflat-spacer clearfix"
                data-desktop={25}
                data-mobile={60}
                data-smobile={60}
              />
              
              {/* Comments Section */}
              <div id="comments" className="comments-area wow fadeInUp">
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={40}
                  data-mobile={40}
                  data-smobile={30}
                />
                <h2 className="comments-title">Comments</h2>
                {/* Add your comments display logic here */}
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={10}
                  data-mobile={10}
                  data-smobile={10}
                />
                <CommentBox />
                <div
                  className="themesflat-spacer clearfix"
                  data-desktop={254}
                  data-mobile={70}
                  data-smobile={70}
                />
              </div>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-md-12">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
