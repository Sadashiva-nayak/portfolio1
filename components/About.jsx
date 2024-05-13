import React from "react";
import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sadashiva Nayak",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7483925972",
  },
  {
    icon: <MailIcon size={20} />,
    text: "sadashivanayak17@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born On 17 July,2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor of Technology",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "SRM PG GENTES ,Royan Circle-560018",
  },
];

const qualificationData = [
  {
    title: "experience & Achievements",
    data: [
      {
        company: "Research intern",
        role: "Quantum Computing",
        years: "2024",
      },
      {
        company :"Mock Placement",
        role:"secured second place",
        years:"2024"
      },
    ],
  },
  {
    title: "education",
    data: [
      {
        university: "University Visvesvaraya College of Engineering",
        qulification: "Bachelor of Technology",
        years: "2021-2025",
      },
      {
        university: "Kota PU College",
        qulification: "PU Education",
        years: "2019-2021",
      },
      {
        university: "Little Rock Indian School",
        qulification: "School",
        years: "2006-2019",
      },
    ],
  },
];

const skillsData = [
  {
    title: "tools",
    data: [
      {
        imgpath: "/HTML.svg",
      },
      {
        imgpath: "/css.svg",
      },
      {
        imgpath: "/js.svg",
      },
      {
        imgpath: "/tailwind.svg",
      },
      {
        imgpath: "/react.svg",
      },
      {
        imgpath: "/next.svg",
      },
      {
        imgpath: "/vscode.svg",
      },
      {
        imgpath: "/mongodb.svg",
      },
      {
        imgpath: "/c.svg",
      },
      {
        imgpath: "/c++.svg",
      },
      {
        imgpath: "/git.svg",
      },
      {
        imgpath: "/github.svg",
      },
    ],
  },

  {
    title: "skills",
    data: [
      {
        name: "C , C++",
      },
      {
        name: "HTML  ,CSS",
      },
      {
        name: "JavaScript , NextJs",
      },
      {
        name: "React , Mongo DB",
      },
      {
        name: "Shadcn UI , Tailwind ",
      },
      {
        name: "Git , Github",
      },
      {
        name: "VS code",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pb-12 xl:py-24 xl:h-[860px]">
      <div className="container mx-auto">
        <h2 className="mx-auto text-center section-title mb-8 xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light w-[505px] h-[505px] dark:bg-about_shape_dark bg-no-repeat relative"
              imgsrc="/dev_img.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qulifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      A Brief Introduction About Me
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Confident and dedicated individual with strong leadership
                      and communication skills. Committed to continuous learning
                      and efficient time management. Passionate about achieving
                      excellence in both personal and professional pursuits.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items- mx-auto gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skill</div>
                    <div className="border-b border-border"></div>
                    <div className="">English , Hindi , Kannada , Konkani</div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div className="">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awsome Journey
                    </h3>
                    <div className="grid gap-y-8 md:grid-cols-2">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience & Achievements").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience & Achievements").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border ml-2 relative">
                                    <div
                                      className="rounded-full bg-primary absolute -left-[5px] w-[11px] h-[11px]
                                                    trasistion-all duration-500 group-hover:translate-y-[84px]"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl mb-2 leading-none">
                                      {company}
                                    </div>
                                    <div className=" text-muted-foreground text-lg mb-4 leading-none">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qulification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border ml-2 relative">
                                    <div
                                      className="rounded-full bg-primary absolute -left-[5px] w-[11px] h-[11px]
                                                    trasistion-all duration-500 group-hover:translate-y-[84px]"
                                    ></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl mb-2 leading-none">
                                      {university}
                                    </div>
                                    <div className=" text-muted-foreground text-lg mb-4 leading-none">
                                      {qulification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="">
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="mx-auto text-center xl:text-left w-2/4 xl:mx-0"
                                key={index}
                              >
                                <div className="">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Icons
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex flex-wrap gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { imgpath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgpath}
                                  width={48}
                                  height={48}
                                  alt=""
                                  priority
                                  className="pt-2"
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
