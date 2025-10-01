"use client"

const BlogForm = () => {
   const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    }

   return (
      <form onSubmit={HandleSubmit}>
         <div className="row">
            <div className="col-6">
               <label htmlFor="name">Your Name*</label>
               <input name="name" id="name" className="bg-transparent bor" type="text"
                  placeholder="Your Name" />
            </div>
            <div className="col-6">
               <label htmlFor="email">Your Email*</label>
               <input name="email" className="bg-transparent bor" id="email" type="email"
                  placeholder="Your Email" />
            </div>
         </div>
         <div className="text-area">
            <label htmlFor="massage">Write Message*</label>
            <textarea name="message" className="bg-transparent bor" id="massage"
               placeholder="Write Message"></textarea>
         </div>
         <div className="btn-two">
            <span className="btn-circle">
            </span>
            <button type="submit" className="btn-one">Post Comment <i
               className="fa-regular fa-arrow-right-long"></i></button>
         </div>
      </form>
   )
}

export default BlogForm
