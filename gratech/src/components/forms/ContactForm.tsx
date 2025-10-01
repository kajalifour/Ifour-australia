"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { CONTACT_FORM_ADD_API } from '@/utils/api';

interface FormData {
   user_name: string;
   user_phone: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_phone: yup.string().required().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").label("Phone Number"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const [submitted, setSubmitted] = useState<"idle" | "success" | "error">("idle");
   const router = useRouter();

   const onSubmit = async (data: FormData) => {
      try {
         const payload = {
            name: data.user_name,
            phone: data.user_phone,
            email: data.user_email,
            message: data.message,
         };
         await CONTACT_FORM_ADD_API(payload);
         reset();
         setSubmitted('success');
         router.push('/thank-you');
      } catch {
         setSubmitted('error');
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="row">
            <div className="col-6">
               <label htmlFor="name">Your Name*</label>
               <input id="name" {...register("user_name")} className="bg-transparent bor" type="text"
                  placeholder="Your Name" />
               <p className="form_error">{errors.user_name?.message}</p>
            </div>
            <div className="col-6">
               <label htmlFor="phone">Phone Number*</label>
               <input className="bg-transparent bor" id="phone" {...register("user_phone")} type="tel"
                  placeholder="Your Phone Number" />
               <p className="form_error">{errors.user_phone?.message}</p>
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <label htmlFor="email">Your Email*</label>
               <input className="bg-transparent bor" id="email" {...register("user_email")} type="email"
                  placeholder="Your Email" />
               <p className="form_error">{errors.user_email?.message}</p>
            </div>
         </div>
         <div className="text-area">
            <label htmlFor="massage">Write Message*</label>
            <textarea className="bg-transparent bor" {...register("message")} id="massage"
               placeholder="Write Message"></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="subscribe-inline">
                  <input id="subscribe" name="subscribe" type="checkbox" defaultChecked />
                  <label htmlFor="subscribe" className="subscribe-inline__label">
                     I would love to receive your latest updates and insights directly in my inbox
                  </label>
               </div>
            </div>
         </div>
         <div className="btn-two">
            <span className="btn-circle">
            </span>
            <button type='submit' className="btn-one contact-submit">Send Message <i
               className="fa-regular fa-arrow-right-long"></i></button>
         </div>
      </form>
   )
}

export default ContactForm
