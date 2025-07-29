"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = () => {
      if (form.current) {
         emailjs.sendForm('service_6y6yqwk', 'template_l7vv1mg',
            form.current, '0Nl20_gGiZ8xlkEt9')
            .then(() => {
               toast.success('Message sent successfully', { position: 'top-center' });
               reset();
            })
            .catch(() => {
               toast.error('Failed to send message. Please try again.', { position: 'top-center' });
            });
      } else {
         toast.error('Form reference is null.', { position: 'top-center' });
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
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
