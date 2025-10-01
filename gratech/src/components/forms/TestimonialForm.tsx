"use client"

import { useRouter } from 'next/navigation'
import { CONTACT_FORM_ADD_API } from '@/utils/api'

const TestimonialForm = () => {
   const router = useRouter()

   const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const phone = String(formData.get('number') || '')
      
      // Validate 10-digit phone number
      if (!/^\d{10}$/.test(phone)) {
         alert('Phone number must be exactly 10 digits')
         return
      }
      
      const payload = {
         name: String(formData.get('name') || ''),
         email: String(formData.get('email') || ''),
         subject: String(formData.get('subject') || ''),
         phone: phone,
         message: String(formData.get('message') || formData.get('massage') || ''),
      }
      await CONTACT_FORM_ADD_API(payload)
      router.push('/thank-you')
   }

   return (
      <form onSubmit={HandleSubmit}>
         <div className="row g-3">
            <div className="col-sm-6">
               <label htmlFor="name">Your name*</label>
               <input name="name" type="text" id="name" placeholder="Your name" />
            </div>
            <div className="col-sm-6">
               <label htmlFor="email">Your Email*</label>
               <input name="email" type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="col-sm-6">
               <label htmlFor="subject">subject*</label>
               <input name="subject" type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="col-sm-6">
               <label htmlFor="number">Your Phone*</label>
               <input name="number" type="text" id="number" placeholder="Your Phone" />
            </div>

            <div className="col-12">
               <label htmlFor="massage">Message*</label>
               <textarea name="message" id="massage" placeholder="Write Message"></textarea>
            </div>
         </div>
         <button>Send Message</button>
      </form>
   )
}

export default TestimonialForm

