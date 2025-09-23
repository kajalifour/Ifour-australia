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

  // Sanitize any CMS HTML to avoid requesting invalid placeholder images
  const sanitizeHtml = (html: string): string => {
    try {
      const FALLBACK_IMG = '/assets/images/project-image-04.webp';
      if (!html) return '';
      let out = html
        .replace(/https?:\/\/[^"'\s]+default\.Thumbnail\.[a-z0-9]+(?:\?[^"'\s]*)?/gi, FALLBACK_IMG)
        .replace(/default\.Thumbnail\.[a-z0-9]+(?:\?[^"'\s]*)?/gi, FALLBACK_IMG);
      // strip srcset candidates that include the bad URL
      out = out.replace(/srcset=("|')(.*?)\1/gi, (m: string, q: string, val: string) => {
        const cleaned = val
          .split(',')
          .map((s: string) => s.trim())
          .filter((s: string) => !/default\.Thumbnail\.[a-z0-9]+/i.test(s))
          .join(', ');
        return `srcset=${q}${cleaned}${q}`;
      });
      return out;
    } catch {
      return html || '';
    }
  };

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
      try {
        // Check if we're in a browser environment
        if (typeof window === 'undefined' || !document) {
          return;
        }

      // Hide all spacers
      const spacers = document.querySelectorAll('.themesflat-spacer');
      spacers.forEach((spacer) => {
        const element = spacer as HTMLElement;
        if (element) {
        element.style.marginTop = '0px';
        element.style.height = '0px';
        element.style.display = 'none';
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
        }
      });

      // Target the specific HTML structure from the blog content
      const blogDetailsContent = document.querySelector('.blog-details-content');
      if (blogDetailsContent) {
        // Target the blog-main-content div specifically
        const blogMainContent = blogDetailsContent.querySelector('.blog-main-content');
        if (blogMainContent && blogMainContent instanceof HTMLElement) {
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
            toRemove.forEach(n => {
              if (n && n.parentNode && n.parentNode.contains(n)) {
                try {
                  if (n.remove) {
                    n.remove();
                  } else {
                    n.parentNode.removeChild(n);
                  }
                } catch (error) {
                  console.warn('Failed to remove child node:', error);
                }
              }
            });
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
              if (parentElement && tableElement) {
                try {
                  parentElement.insertBefore(wrapper, tableElement);
              wrapper.appendChild(tableElement);
                } catch (error) {
                  console.warn('Failed to wrap table element:', error);
                }
              }
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
                    if (toRemove && node && node.contains(toRemove)) {
                      try {
                        if (toRemove.remove) {
                          toRemove.remove();
                        } else {
                          node.removeChild(toRemove);
                        }
                      } catch (error) {
                        console.warn('Failed to remove child node:', error);
                      }
                    }
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
                  if (toRemove && toRemove.parentNode && toRemove.parentNode.contains(toRemove)) {
                    try {
                      if (toRemove.remove) {
                        toRemove.remove();
                      } else {
                        toRemove.parentNode.removeChild(toRemove);
                      }
                    } catch (error) {
                      console.warn('Failed to remove child node:', error);
                    }
                  }
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
                    if (toRemove && wrapper && wrapper.contains(toRemove)) {
                      try {
                        if (toRemove.remove) {
                          toRemove.remove();
                        } else {
                          wrapper.removeChild(toRemove);
                        }
                      } catch (error) {
                        console.warn('Failed to remove child node:', error);
                      }
                    }
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
                  if (toRemove && toRemove.parentNode && toRemove.parentNode.contains(toRemove)) {
                    try {
                      if (toRemove.remove) {
                        toRemove.remove();
                      } else {
                        toRemove.parentNode.removeChild(toRemove);
                      }
                    } catch (error) {
                      console.warn('Failed to remove child node:', error);
                    }
                  }
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
      } catch (error) {
        console.warn('Error in fixSocialSharingAndSpacing function:', error);
      }
    };

    // Backward-compatible alias so references below compile
    // Define before any usages below
    const fixSocialSharingAndSpacing = fixSpacing;
    if (typeof window !== 'undefined') {
      // @ts-ignore expose for external scripts
      (window as any).fixSocialSharingAndSpacing = fixSpacing;
    }

    // Run immediately if DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixSocialSharingAndSpacing);
    } else {
    fixSocialSharingAndSpacing();
    }
    
    // Run again after a short delay to ensure it overrides any other scripts
      setTimeout(fixSocialSharingAndSpacing, 100);
      setTimeout(fixSocialSharingAndSpacing, 300);
      setTimeout(fixSocialSharingAndSpacing, 500);
      setTimeout(fixSocialSharingAndSpacing, 1000);
      setTimeout(fixSocialSharingAndSpacing, 2000);

      // Minimal visibility fix for social sharing without altering design/position
      const forceSocialSharing = () => {
        const socialSharing = document.querySelector('.social-sharing');
        if (!socialSharing) return;
        const element = socialSharing as HTMLElement;
        // Only clear properties that could hide it; do not change layout/design
        element.style.removeProperty('display');
        element.style.removeProperty('visibility');
        element.style.removeProperty('opacity');
        
        const style = window.getComputedStyle(element);
        if (style.display === 'none') element.style.display = 'block';
        if (style.visibility === 'hidden') element.style.visibility = 'visible';
        if (style.opacity === '0') element.style.opacity = '1';

        // Ensure links are visible without restyling
        const links = element.querySelectorAll('a');
        links.forEach((link) => {
          const linkEl = link as HTMLElement;
          linkEl.style.removeProperty('display');
          linkEl.style.removeProperty('visibility');
          linkEl.style.removeProperty('opacity');
          const linkStyle = window.getComputedStyle(linkEl);
          if (linkStyle.display === 'none') linkEl.style.display = 'inline-flex';
          if (linkStyle.visibility === 'hidden') linkEl.style.visibility = 'visible';
          if (linkStyle.opacity === '0') linkEl.style.opacity = '1';
        });
      };

      // Run the force function multiple times
      setTimeout(forceSocialSharing, 50);
      setTimeout(forceSocialSharing, 200);
      setTimeout(forceSocialSharing, 500);
      setTimeout(forceSocialSharing, 1000);
      setTimeout(forceSocialSharing, 2000);

    // Observe mutations to re-apply fix when CMS content updates or reflows
    const blogMain = document.querySelector('.blog-main-content');
    let observer: MutationObserver | null = null;
    let rafId = 0;
    if (blogMain) {
      const scheduleFix = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          fixSocialSharingAndSpacing();
        });
      };
      observer = new MutationObserver(scheduleFix);
      // Observe only within the blog content for minimal overhead
      observer.observe(blogMain, { childList: true, subtree: true, characterData: true });
    }

    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      // Remove event listener if it was added
      if (document.readyState === 'loading') {
        document.removeEventListener('DOMContentLoaded', fixSocialSharingAndSpacing);
      }
      // Cancel any pending animation frames
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };
  }, [blogDetail]);

  if (loading) {
    return (
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-7 col-md-12 col-sm-12 px-0 col-left-70">
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
        <div className="row g-0">
          <div className="col-lg-7 col-md-12 col-sm-12 px-0 col-left-70">
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
    <div className={`container blog-details-page slug-${slug}`}>
      <div className="row g-0">
        <div className="col-lg-7 col-md-12 col-sm-12 px-0 col-left-70">
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
                    quality={85}
                    priority={false}
                    placeholder="empty"
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

          {/* Admin Content Block - Before Main Content (sanitized) */}
          {blogDetail?.adminContentBefore && (() => {
            const raw = blogDetail.adminContentBefore as string;
            const sanitized = sanitizeHtml(raw);
            return (
              <div
                className="admin-content-before"
                dangerouslySetInnerHTML={{ __html: sanitized }}
              />
            );
          })()}

          <div className="content-post blog-details-content">
            {(() => {
              const raw = blogDetail?.postContent || "";
              const sanitized = sanitizeHtml(raw);
              return (
                <div
                  className="blog-main-content"
                  dangerouslySetInnerHTML={{ __html: sanitized }}
                ></div>
              );
            })()}
          </div>

          {/* Admin Content Block - After Main Content (sanitized) */}
          {blogDetail?.adminContentAfter && (() => {
            const raw = blogDetail.adminContentAfter as string;
            const sanitized = sanitizeHtml(raw);
            return (
              <div
                className="admin-content-after"
                dangerouslySetInnerHTML={{ __html: sanitized }}
              />
            );
          })()}

          {/* Admin Content Block - Custom Position (sanitized) */}
          {blogDetail?.adminContentCustom && (() => {
            const raw = blogDetail.adminContentCustom as string;
            const sanitized = sanitizeHtml(raw);
            return (
              <div
                className="admin-content-custom"
                dangerouslySetInnerHTML={{ __html: sanitized }}
              />
            );
          })()}

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
                          quality={85}
                          className="profile-img"
                          unoptimized={unoptimized}
                          placeholder="empty"
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

                  {/* Social Sharing Section - Simple Text Approach */}
                  <div className="social-sharing blog-social-sharing">
                    <h4 className="blog-social-title">Share:</h4>
                    <div className="blog-social-links">
                      <a href="#" title="Share on Facebook" style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: '#0f7a95',
                        borderRadius: '50%',
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid #0f7a95',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0a5a6a';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.border = '1px solid #0a5a6a';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0f7a95';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.border = '1px solid #0f7a95';
                      }}>
                        FB
                      </a>
                      <a href="#" title="Share on Twitter" style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: '#0f7a95',
                        borderRadius: '50%',
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid #0f7a95',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0a5a6a';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.border = '1px solid #0a5a6a';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0f7a95';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.border = '1px solid #0f7a95';
                      }}>
                        TW
                      </a>
                      <a href="#" title="Share on LinkedIn" style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: '#0f7a95',
                        borderRadius: '50%',
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid #0f7a95',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0a5a6a';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.border = '1px solid #0a5a6a';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0f7a95';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.border = '1px solid #0f7a95';
                      }}>
                        LI
                      </a>
                      <a href="#" title="Share on Instagram" style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        background: '#0f7a95',
                        borderRadius: '50%',
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        border: '1px solid #0f7a95',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }} onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#0a5a6a';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.border = '1px solid #0a5a6a';
                      }} onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0f7a95';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.border = '1px solid #0f7a95';
                      }}>
                        IG
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="col-lg-5 col-md-12 px-0 col-right-30">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
