import Image from "next/image"
import Link from "next/link"
import BlogForm from "@/components/forms/BlogForm"

import comment_1 from "@/assets/images/blog/comment-image1.png"
import comment_2 from "@/assets/images/blog/comment-image2.png"

const BlogComment = () => {
   return (
      <div className="blog-single__review mt-60">
         <h3>02 Reviews, for Tiles</h3>
         <div className="blog-single__comment d-flex gap-4 mt-60 pb-60 bor-bottom">
            <div className="image">
               <Image src={comment_1} alt="image" />
            </div>
            <div className="content">
               <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="con">
                     <h5><Link href="#" className="primary-hover">Ralph Edwards</Link></h5>
                     <span>March 20, 2023 at 2:37 pm</span>
                  </div>
                  <div className="star">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </div>
               </div>
               <p className="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                  veritatis et quasi
                  architecto var sed efficitur turpis gilla sed
                  sit amet finibus eros. Lorem Ipsum is simply dummy</p>
               <Link href="#" className="sub-bg primary-color reply">Reply</Link>
            </div>
         </div>
         <div className="blog-single__comment d-flex gap-4 mt-60 pb-60 bor-bottom">
            <div className="image">
               <Image src={comment_2} alt="image" />
            </div>
            <div className="content">
               <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="con">
                     <h5><a href="#" className="primary-hover">Albert Flores</a></h5>
                     <span>March 20, 2023 at 2:37 pm</span>
                  </div>
                  <div className="star">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </div>
               </div>
               <p className="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                  veritatis et quasi
                  architecto var sed efficitur turpis gilla sed
                  sit amet finibus eros. Lorem Ipsum is simply dummy</p>
               <Link href="#" className="sub-bg primary-color reply">Reply</Link>
            </div>
         </div>
         <div className="contact__form mt-60">
            <h3 className="fw-700 mb-40">Leave a Comment</h3>
            <BlogForm />
         </div>
      </div>
   )
}

export default BlogComment
