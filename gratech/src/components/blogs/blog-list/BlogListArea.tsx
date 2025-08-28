"use client"
import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import BlogSidebar from "../blog-sidebar";
import bolg_data from "@/data/BlogData";
import { useRouter } from "next/navigation";

interface BlogPost {
   id: number;
   title: string;
   slug: string;
   excerpt: string;
   content: string;
   featuredImage: any; // StaticImageData or string URL
   author: string;
   publishedAt: string;
   category: string;
   readTime: string;
}

const BlogListArea = () => {
   const [posts, setPosts] = useState<BlogPost[]>([]);
   const [loading, setLoading] = useState(true);
   const router = useRouter();

   useEffect(() => {
      const fetchBlogPosts = async () => {
         try {
            // Get the first hardcoded blog post
            const hardcodedBlog = bolg_data.filter((items) => items.page === "blog_1")[0];
            
            if (!hardcodedBlog) {
               console.error('No hardcoded blog found');
               setPosts([]);
               setLoading(false);
               return;
            }
            
            const hardcodedPost: BlogPost = {
               id: hardcodedBlog.id,
               title: hardcodedBlog.title,
               slug: 'nodejs-interview-questions',
               excerpt: hardcodedBlog.desc || "How Much Does It Cost to Hire Node JS Developers In 2025?",
               content: hardcodedBlog.desc || "Full content here...",
               featuredImage: hardcodedBlog.thumb,
               author: "Shivani Makwana",
               publishedAt: "2024-11-26",
               category: "Technology",
               readTime: "5 min read"
            };

            // Initialize with hardcoded post
            let allPosts: BlogPost[] = [hardcodedPost];

            // Try to fetch additional posts from API
            try {
               const response = await fetch('/api/blog/posts');
               const contentType = response.headers.get('content-type') || '';
               if (response.ok && contentType.includes('application/json')) {
                  const text = await response.text();
                  try {
                     const apiPosts = JSON.parse(text);
                     // Add API posts to the array (maintaining same structure)
                     allPosts = [...allPosts, ...apiPosts];
                  } catch (jsonErr) {
                     console.warn('Invalid JSON from /api/blog/posts. Falling back to hardcoded post.');
                  }
               } else {
                  console.warn('Non-JSON or bad response from /api/blog/posts. Falling back.');
               }
            } catch (error) {
               console.error('Error fetching API posts:', error);
               // Keep only hardcoded post if API fails
            }

            setPosts(allPosts);
         } catch (error) {
            console.error('Error setting up blog posts:', error);
            setPosts([]);
         } finally {
            setLoading(false);
         }
      };

      fetchBlogPosts();
   }, []);

   const formatDate = (dateString: string) => {
      try {
         const date = new Date(dateString);
         return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
         });
      } catch (error) {
         return dateString; // Return original string if date parsing fails
      }
   };

   // Helper function to render blog card (same structure for all posts)
   const renderBlogCard = (post: BlogPost) => (
      <div key={post.id} className="blog-card mb-40 wow fadeInUp" 
           data-wow-delay="00ms" data-wow-duration="1500ms">
         <div
            role="button"
            tabIndex={0}
            onClick={() => router.push(`/blog/${post.slug}`)}
            onKeyDown={(e) => { if (e.key === 'Enter') router.push(`/blog/${post.slug}`) }}
            style={{ cursor: 'pointer' }}
         >
            <div style={{
               position: 'relative',
               borderRadius: '16px',
               overflow: 'hidden',
               boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
               transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
               <Image 
                  src={post.featuredImage} 
                  alt={post.title}
                  width={600}
                  height={400}
                  style={{ 
                     objectFit: 'cover', 
                     width: '100%',
                     height: '400px',
                     display: 'block'
                  }}
                  priority={post.id <= 2}
                  onError={(e) => {
                     console.error('Image failed to load:', post.featuredImage);
                     // You can set a fallback image here if needed
                  }}
               />
               
               {/* Description Overlay */}
               <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                  color: 'white',
                  padding: '30px',
                  paddingTop: '60px'
               }}>
                  <div style={{
                     fontSize: '14px',
                     marginBottom: '12px',
                     opacity: 0.9,
                     display: 'flex',
                     alignItems: 'center',
                     gap: '16px'
                  }}>
                     <span>📅 {formatDate(post.publishedAt)}</span>
                     <span>👤 {post.author}</span>
                  </div>
                  <h2 style={{
                     fontSize: '24px',
                     fontWeight: 'bold',
                     margin: '0 0 12px 0',
                     lineHeight: '1.3'
                  }}>
                     {post.title}
                  </h2>
                  {/* Keep a Link on the title for SEO while the whole card is clickable */}
                  <p style={{
                     fontSize: '16px',
                     margin: 0,
                     opacity: 0.9,
                     lineHeight: '1.5'
                  }}>
                     {post.excerpt}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );

   if (loading) {
      return (
         <section className="blog-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                           <span className="visually-hidden">Loading...</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }

   if (posts.length === 0) {
      return (
         <section className="blog-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="text-center">
                        <h3>No blog posts available</h3>
                        <p>Please check back later for new content.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }

   return (
      <section className="blog-area pt-120 pb-120">
         <div className="container">
            <div className="row g-4">
               {/* Blog Posts List - Left Side */}
               <div className="col-lg-8 order-2 order-lg-1">
                  <div className="blog-list">
                     {posts.map(renderBlogCard)}
                  </div>
               </div>
               
               {/* Sidebar - Right Side */}
               <div className="col-lg-4 order-1 order-lg-2">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogListArea
