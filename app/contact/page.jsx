import React from "react";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";
import { FaWhatsapp } from "react-icons/fa";

const contact = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24 xl:h-[480px]">
          <div className="flex flex-col justify-center">
            <div className="flex items-center text-primary text-lg mb-4 gap-x-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="max-w-md h1 mb-8">Let's Work Together.</h1>
            <p className="subtitle  max-w-[400px]">
              Want to reach out to me for various ideas on how we can work together and collaborate together to create various projects.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contain bg-contact_light dark:bg-contact_dark bg-top bg-no-repeat"></div>
        </div>
        <div className="grid md:grid-cols-2 xl:mb-32 mb-24 grid-cols-1">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-10">
              <MailIcon className="text-primary" size={18} />
              <div>sadashivanayak17@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-10">
              <HomeIcon className="text-primary" size={18} />
              <div>SRM PG GENTES ,Royan Circle-560018</div>
            </div>
            <div className="flex items-center gap-x-1">
              <PhoneCall className="text-primary" size={18} />/
              <FaWhatsapp className="mr-2 text-primary"/>
              <div className="flex items-center">
              +91 7483925972</div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default contact;
