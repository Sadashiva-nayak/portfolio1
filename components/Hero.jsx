"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg- bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello my name is Sadashiva</h1>
            <p className="max-w-[490px] pt-1 subtitle mx-auto xl:mx-0">
              I am a web developer specialised in MERN stack development and
              welcome to my portfolio website. I have solved over 370+ questions
              on Leetcode and have done 10+ projects.
            </p>
            <div className="flex flex-col md:flex-row gap-y-3 xl:mx-0 mx-auto gap-x-3 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 xl:mx-0 mx-auto"
              iconStyles="text-foreground text-[22px] trasition-all hover:text-primary"
            />
          </div>
          <div className="hidden xl:flex relative left-8">
            <Badge
              containerStyles="badge1 absolute top-[24%] -left-[3rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={370}
              endCountText="+"
              badgeText="Questions Solved"
            />
            <Badge
              containerStyles="badge absolute top-[68%] left-[2rem]"
              icon={<RiTodoFill />}
              endCountNum={10}
              endCountText="+"
              badgeText="Finished Projects"
            />
            <Badge
              containerStyles="badge absolute top-[50%] -right-3"
              icon={<RiTeamFill />}
              endCountNum={1}
              badgeText="Internship Experience"
            />
            <div className="bg-hero_shape_light dark:bg-hero_shape_dark h-[500px] w-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] bg-no-repeat relative bg-bottom h-[462px]"
              imgsrc="/dev_img.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
