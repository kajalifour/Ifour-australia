"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

interface FormData {
   user_name: string;
   user_email: string;
   user_phone: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      user_phone: yup.string().required().label("Phone Number"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

      const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const [submitted, setSubmitted] = useState<"idle" | "success" | "error">("idle");
   const router = useRouter();

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('service_6y6yqwk', 'template_l7vv1mg',
            form.current, '0Nl20_gGiZ8xlkEt9')
            .then(() => {
               reset();
               router.push('/thank-you');
            })
            .catch(() => {
               setSubmitted('error');
            });
      } else {
         setSubmitted('error');
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} data-status={submitted}>
         <div className="row">
            <div className="col-6">
               <label htmlFor="name">Your Name*</label>
               <input id="name" {...register("user_name")} className="bg-transparent bor" type="text"
                  placeholder="Your Name" />
               <p className="form_error">{errors.user_name?.message}</p>
            </div>
            <div className="col-6">
               <label htmlFor="email">Your Email*</label>
               <input className="bg-transparent bor" id="email" {...register("user_email")} type="email"
                  placeholder="Your Email" />
               <p className="form_error">{errors.user_email?.message}</p>
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <label htmlFor="phone">Phone Number*</label>
               <input className="bg-transparent bor" id="phone" {...register("user_phone")} type="tel"
                  placeholder="Your Phone Number" />
               <p className="form_error">{errors.user_phone?.message}</p>
            </div>
         </div>
         <div className="text-area">
            <label htmlFor="massage">Write Message*</label>
            <textarea className="bg-transparent bor" {...register("message")} id="massage"
               placeholder="Write Message"></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <div className="btn-two">
            <span className="btn-circle">
            </span>
            <button type='submit' className="btn-one">Send Message <i
               className="fa-regular fa-arrow-right-long"></i></button>
         </div>
      </form>
   )
}

export default ContactForm
