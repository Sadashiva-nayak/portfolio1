"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import emailjs from '@emailjs/browser';

const Form = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h8k7txw', 'template_y3sgpog', form.current, {
        publicKey: 'uLCiT5UX1kSDE1tts',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
      <div className="relative flex items-center">
        <Input type="name" name='name' id="name" placeholder="name" className='dark:border-white'/>
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Input type="email" name='email' id="email" placeholder="email" className='dark:border-white'/>
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea name='message' placeholder="Type your message here" className='dark:border-white'/>
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type='submit' className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
