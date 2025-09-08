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

  // Fix spacer spacing - TARGET SPECIFIC HTML STRUCTURE
  useEffect(() => {
    const fixSpacing = () => {
      // Hide all spacers
      const spacers = document.querySelectorAll('.themesflat-spacer');
      spacers.forEach((spacer) => {
        const element = spacer as HTMLElement;
        element.style.marginTop = '0px';
        element.style.height = '0px';
        element.style.display = 'none';
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
      });

      // Target the specific HTML structure from the blog content
      const blogDetailsContent = document.querySelector('.blog-details-content');
      if (blogDetailsContent) {
        // Target the blog-main-content div specifically
        const blogMainContent = blogDetailsContent.querySelector('.blog-main-content');
        if (blogMainContent) {
          // Global prune: remove stray <br> and empty/nbsp-only text nodes inside blog-main-content
          const pruneWhitespaceDeep = (root: HTMLElement) => {
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
            const toRemove: ChildNode[] = [];
            while (walker.nextNode()) {
              const node = walker.currentNode as ChildNode;
              if (node.nodeType === 1) {
                const el = node as Element;
                if (el.tagName === 'BR') {
                  toRemove.push(el);
                }
              } else if (node.nodeType === 3) {
                const text = (node.textContent || '').replace(/\u00A0/g, ' ').trim();
                if (text === '') {
                  toRemove.push(node);
                }
              }
            }
            toRemove.forEach(n => n.parentNode && n.parentNode.removeChild(n));
          };
          pruneWhitespaceDeep(blogMainContent as HTMLElement);

          // Set the main content div to have no margins/padding
          (blogMainContent as HTMLElement).style.margin = '0px';
          (blogMainContent as HTMLElement).style.padding = '0px';

          // STEP 1: Ensure every table is wrapped with .comparison-table
          const tables = blogMainContent.querySelectorAll('table');
          tables.forEach((t) => {
            const tableElement = t as HTMLElement;
            const parentElement = tableElement.parentElement as HTMLElement | null;
            const alreadyWrapped = parentElement?.classList.contains('comparison-table');
            if (!alreadyWrapped) {
              const wrapper = document.createElement('div');
              wrapper.className = 'comparison-table';
              parentElement?.insertBefore(wrapper, tableElement);
              wrapper.appendChild(tableElement);
              // Remove stray BRs/whitespace that come before the table
              const cleanLeadingSpace = (node: HTMLElement) => {
                let first = node.firstChild as ChildNode | null;
                while (first) {
                  const isBr = first.nodeType === 1 && (first as Element).tagName === 'BR';
                  const isEmptyText = first.nodeType === 3 && ((first.textContent || '').replace(/\u00A0/g, ' ').trim() === '');
                  const isEmptySpan = first.nodeType === 1 && (first as Element).tagName === 'SPAN' && ((first as Element).textContent || '').trim() === '';
                  if (isBr || isEmptyText || isEmptySpan) {
                    const toRemove = first;
                    first = first.nextSibling;
                    node.removeChild(toRemove);
                    continue;
                  }
                  break;
                }
              };
              cleanLeadingSpace(wrapper);
              // Also remove preceding siblings like <br> or nbsp-only text just before wrapper
              let prev = wrapper.previousSibling as ChildNode | null;
              while (prev) {
                const isBr = prev.nodeType === 1 && (prev as Element).tagName === 'BR';
                const isEmptyText = prev.nodeType === 3 && ((prev.textContent || '').replace(/\u00A0/g, ' ').trim() === '');
                const isEmptySpan = prev.nodeType === 1 && (prev as Element).tagName === 'SPAN' && (((prev as Element).textContent || '').trim() === '');
                if (isBr || isEmptyText || isEmptySpan) {
                  const toRemove = prev;
                  prev = prev.previousSibling;
                  toRemove.parentNode && toRemove.parentNode.removeChild(toRemove);
                  continue;
                }
                break;
              }
            } else if (parentElement) {
              // If already wrapped, still clean it
              const wrapper = parentElement;
              if (wrapper.classList.contains('comparison-table')) {
                let first = wrapper.firstChild as ChildNode | null;
                while (first && first !== tableElement) {
                  const isBr = first.nodeType === 1 && (first as Element).tagName === 'BR';
                  const isEmptyText = first.nodeType === 3 && ((first.textContent || '').replace(/\u00A0/g, ' ').trim() === '');
                  const isEmptySpan = first.nodeType === 1 && (first as Element).tagName === 'SPAN' && ((first as Element).textContent || '').trim() === '';
                  if (isBr || isEmptyText || isEmptySpan) {
                    const toRemove = first;
                    first = first.nextSibling;
                    wrapper.removeChild(toRemove);
                    continue;
                  }
                  break;
                }
                // And remove preceding siblings before wrapper
                let prev = wrapper.previousSibling as ChildNode | null;
                while (prev) {
                  const isBr = prev.nodeType === 1 && (prev as Element).tagName === 'BR';
                  const isEmptyText = prev.nodeType === 3 && ((prev.textContent || '').replace(/\u00A0/g, ' ').trim() === '');
                  const isEmptySpan = prev.nodeType === 1 && (prev as Element).tagName === 'SPAN' && (((prev as Element).textContent || '').trim() === '');
                  if (isBr || isEmptyText || isEmptySpan) {
                    const toRemove = prev;
                    prev = prev.previousSibling;
                    toRemove.parentNode && toRemove.parentNode.removeChild(toRemove);
                    continue;
                  }
                  break;
                }
              }
            }
          });

          // Target the specific paragraph before the table
          const costParagraph = blogMainContent.querySelector('p');
          if (costParagraph && costParagraph.textContent?.includes('Here you can look for the average cost')) {
            const element = costParagraph as HTMLElement;
            element.style.margin = '0px';
            element.style.marginTop = '0px';
            element.style.marginBottom = '0px';
            element.style.padding = '0px';
            element.style.paddingTop = '0px';
            element.style.paddingBottom = '0px';
            element.style.lineHeight = '1.2';
          }

          // Target the table that comes after the paragraph
          const table = blogMainContent.querySelector('table');
          if (table) {
            const element = table as HTMLElement;
            element.style.margin = '0px';
            element.style.marginTop = '0px';
            element.style.marginBottom = '0px';
            element.style.padding = '0px';
            element.style.paddingTop = '0px';
            element.style.paddingBottom = '0px';
          }

          // Target all paragraphs in the blog-main-content
          const allParagraphs = blogMainContent.querySelectorAll('p');
          allParagraphs.forEach((paragraph) => {
            const element = paragraph as HTMLElement;
            element.style.margin = '0px';
            element.style.marginTop = '0px';
            element.style.marginBottom = '0px';
            element.style.padding = '0px';
            element.style.paddingTop = '0px';
            element.style.paddingBottom = '0px';
          });

          // Target all tables in the blog-main-content
          const allTables = blogMainContent.querySelectorAll('table');
          allTables.forEach((table) => {
            const element = table as HTMLElement;
            element.style.margin = '0px';
            element.style.marginTop = '0px';
            element.style.marginBottom = '0px';
            element.style.padding = '0px';
            element.style.paddingTop = '0px';
            element.style.paddingBottom = '0px';
          });
        }
      }

      // Also target any divs that might be causing spacing
      const contentDivs = document.querySelectorAll('.blog-main-content, .content-post, .blog-details-content');
      contentDivs.forEach((div) => {
        const element = div as HTMLElement;
        element.style.margin = '0px';
        element.style.padding = '0px';
      });
    };

    // Run immediately
    fixSpacing();
    
    // Run again after a short delay to ensure it overrides any other scripts
    setTimeout(fixSpacing, 100);
    setTimeout(fixSpacing, 500);
    setTimeout(fixSpacing, 1000);
    // Re-run a few times over 3 seconds to catch late injections
    const intervalId = setInterval(fixSpacing, 250);
    setTimeout(() => clearInterval(intervalId), 3000);

    // Observe mutations to re-apply fix when CMS content updates or reflows
    const blogMain = document.querySelector('.blog-main-content');
    let observer: MutationObserver | null = null;
    if (blogMain) {
      let rafId = 0;
      const scheduleFix = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          fixSpacing();
        });
      };
      observer = new MutationObserver(scheduleFix);
      // Observe broadly to catch node replacements
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [blogDetail]);

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
              {(() => {
                const DEFAULT_REMOTE_PLACEHOLDER = 'https://ifourtechnolab.ifour-consultancy.net/pics/Post/default.Thumbnail.jpg';
                const FALLBACK_BANNER = '/assets/images/project-image-04.webp';
                const rawSrc = blogDetail?.fileName || '';
                const isProblematic = !rawSrc || /default\.Thumbnail\.jpg/i.test(rawSrc) || rawSrc === DEFAULT_REMOTE_PLACEHOLDER;
                const resolvedSrc = isProblematic ? FALLBACK_BANNER : rawSrc;
                const unoptimized = resolvedSrc.startsWith('http');
                return (
                  <Image
                    src={resolvedSrc}
                    title={blogDetail?.title || 'Blog image'}
                    alt={blogDetail?.alt || 'Blog image'}
                    width={770}
                    height={450}
                    quality={100}
                    priority={true}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    unoptimized={unoptimized}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = FALLBACK_BANNER;
                    }}
                  />
                );
              })()}
            </div>
          </div>

          <div className="row">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={20}
              data-mobile={15}
              data-smobile={15}
            />
          </div>

          {/* Admin Content Block - Before Main Content */}
          {blogDetail?.adminContentBefore && (
            <div 
              className="admin-content-before"
              dangerouslySetInnerHTML={{ __html: blogDetail.adminContentBefore }}
            />
          )}

          <div className="content-post blog-details-content">
            <div className="blog-main-content"
              dangerouslySetInnerHTML={{
                __html: blogDetail?.postContent || "",
              }}
            ></div>
          </div>

          {/* Admin Content Block - After Main Content */}
          {blogDetail?.adminContentAfter && (
            <div 
              className="admin-content-after"
              dangerouslySetInnerHTML={{ __html: blogDetail.adminContentAfter }}
            />
          )}

          {/* Admin Content Block - Custom Position */}
          {blogDetail?.adminContentCustom && (
            <div 
              className="admin-content-custom"
              dangerouslySetInnerHTML={{ __html: blogDetail.adminContentCustom }}
            />
          )}

          {blogDetail?.showDetail ? (
            <div className="author-container ">
              <div className="author-card">
                <div className="author-content">
                  <div className="author-image">
                    {(() => {
                      const FALLBACK_AUTHOR = '/assets/images/team/team-1.jpg';
                      const rawSrc = blogDetail?.authorImage || '';
                      const resolvedSrc = rawSrc || FALLBACK_AUTHOR;
                      const unoptimized = resolvedSrc.startsWith('http');
                      return (
                        <Image
                          src={resolvedSrc}
                          alt={blogDetail?.authorName || 'Author'}
                          width={80}
                          height={80}
                          quality={100}
                          className="profile-img"
                          unoptimized={unoptimized}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = FALLBACK_AUTHOR;
                          }}
                        />
                      );
                    })()}
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
