"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const ProjectData = [
  {
    image: "/food_delivery.png",
    category: "React",
    name: "Food delivery website",
    description:
      "Its a full stack fully responsive food delivery website built using MERN stack and Mongo DB and Tailwind for styling. It requires authentication which is done using Bcrypt Js and json web-token.",
    link: "/",
    github: "https://github.com/Sadashiva-nayak/food-delivery-website",
  },
  {
    image: "/portfolio.png",
    category: "Next js",
    name: "portfolio website",
    description:
      "Its my portfolio website which is built using Nextjs, Tailwind and Shancn UI components. It also animation for which i used framer motion and i used Emailjs api to send emails.",
    link: "/",
    github: "/",
  },
  {
    image: "/notes_manager.png",
    category: "react",
    name: "Notes Manager",
    description:
      "Its a MERN stack notes manager website which is using Mongo DB and Bootstrap. It shows the notes of only the user who has logged in currently.Its using Bcrypt Js and json web-token.",
    link: "https://sadashiva-nayak.github.io/notes-manager/",
    github: "https://github.com/Sadashiva-nayak/notes-manager",
  },
  {
    image: "/restoran.png",
    category: "Vanilla",
    name: "Restaurant website",
    description:
      "Its a clone of a website named Restoran which is a website for a restaurant which tells about the products and about the restaurant . Its built using HTML, Tailwind and Javascript.",
    link: "https://sadashiva-nayak.github.io/restoran/",
    github: "https://github.com/Sadashiva-nayak/restoran",
  },
];
const Work = () => {
  return (
    <section>
      <div className="container mx-auto xl:flex xl:justify-between">
        <div className="mx-auto xl:mx-0 text-center max-w-[400px] mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:text-left xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
          Embark on a captivating journey through my work, where creativity meets purpose and imagination knows no bounds.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="xl:max-w-[1000px] xl:relative right-0 top-0">
          <Swiper
            style={{
              "--swiper-pagination-color": "#ff6e58",
              "--swiper-navigation-color": "#ff6e58",
            }}
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              740: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {ProjectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
