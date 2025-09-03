import React from "react";
import BlogMainSection from "./BlogMainSection";
import BlogSidebar from "../BlogSidebar";

const BlogListArea = () => {
   return (
      <section className="blog-area pt-120 pb-120">
         <div className="container">
            <div className="row g-4">
               {/* Blog Posts List - Left Side */}
               <div className="col-lg-8 order-2 order-lg-1">
                  <BlogMainSection />
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
