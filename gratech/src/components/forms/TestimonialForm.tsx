"use client"

const TestimonialForm = () => {
   return (
      <form onSubmit={(e)=>e.preventDefault()}>
         <div className="row g-3">
            <div className="col-sm-6">
               <label htmlFor="name">Your name*</label>
               <input type="text" id="name" placeholder="Robot fox" />
            </div>
            <div className="col-sm-6">
               <label htmlFor="email">Your Email*</label>
               <input type="email" id="email" placeholder="info@ifourtechnolab.com.au" />
            </div>
            <div className="col-sm-6">
               <label htmlFor="subject">subject*</label>
               <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="col-sm-6">
               <label htmlFor="number">Your Phone*</label>
               <input type="text" id="number" placeholder="+61 4 8993 1698" />
            </div>
            <div className="col-12">
               <label htmlFor="massage">Message*</label>
               <textarea id="massage" placeholder="Write Message"></textarea>
            </div>
         </div>
         <button>Sand Message</button>
      </form>
   )
}

export default TestimonialForm
