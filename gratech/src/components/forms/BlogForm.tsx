"use client"

const BlogForm = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()}>
         <div className="row">
            <div className="col-6">
               <label htmlFor="name">Your Name*</label>
               <input id="name" className="bg-transparent bor" type="text"
                  placeholder="Your Name" />
            </div>
            <div className="col-6">
               <label htmlFor="email">Your Email*</label>
               <input className="bg-transparent bor" id="email" type="email"
                  placeholder="Your Email" />
            </div>
         </div>
         <div className="text-area">
            <label htmlFor="massage">Write Message*</label>
            <textarea className="bg-transparent bor" id="massage"
               placeholder="Write Message"></textarea>
         </div>
         <div className="btn-two">
            <span className="btn-circle">
            </span>
            <a style={{cursor:"pointer"}} className="btn-one">Post Comment <i
               className="fa-regular fa-arrow-right-long"></i></a>
         </div>
      </form>
   )
}

export default BlogForm
