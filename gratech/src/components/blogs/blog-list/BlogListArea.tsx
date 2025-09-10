import React from "react";
import BlogMainSection from "./BlogMainSection";
import BlogSidebar from "../BlogSidebar";

const BlogListArea = () => {
   return (
      <section className="blog-area pt-120 pb-120">
         <div className="container px-0">
            <div className="row g-0">
               {/* Blog Posts List - Left Side (70%) */}
               <div className="col-lg-7 order-2 order-lg-1 px-0 col-left-70">
                  <BlogMainSection />
               </div>
               
               {/* Sidebar - Right Side (30%) */}
               <div className="col-lg-5 order-1 order-lg-2 px-0 col-right-30">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogListArea
