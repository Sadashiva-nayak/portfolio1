'use client';
import React, { useState } from 'react'
import { Tabs ,TabsList,TabsTrigger,TabsContent} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const ProjectData = [
  {
    image: "/food_delivery.png",
    category: "React",
    name: "Food delivery website",
    description:
      "Its a full stack fully responsive food delivery website built using MERN stack and Mongo DB and Tailwind for styling. It requires authentication which is done using Bcrypt Js and json web-token.",
    link: "sadashiva-nayak.github.io/food-delivery-website/",
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
    link: "sadashiva-nayak.github.io/notes-manager/",
    github: "https://github.com/Sadashiva-nayak/notes-manager",
  },
  {
    image: "/restoran.png",
    category: "Vanilla",
    name: "Restaurant website",
    description:
      "Its a clone of a website named Restoran which is a website for a restaurant which tells about the products and about the restaurant . Its built using HTML, Tailwind and Javascript.",
    link: "sadashiva-nayak.github.io/restoran/",
    github: "https://github.com/Sadashiva-nayak/restoran",
  },
  {
    image: "/calculator.png",
    category: "Backend",
    name: "Calculator",
    description:
      "its a calculator which is build using HTML, CSS and vanilla Javascript.",
    link: "sadashiva-nayak.github.io/calculator/",
    github: "https://github.com/Sadashiva-nayak/calculator",
  },
  {
    image: "/email_validator.png",
    category: "Backend",
    name: "Email Validator",
    description:
      "its an email validator where we enter an email address and it validates the email address. Its using a validator api from where its fetching and displaying information about the mail.",
    link: "sadashiva-nayak.github.io/email-validator/",
    github: "https://github.com/Sadashiva-nayak/email-validator",
  },
  {
    image: "/snake.png",
    category: "Backend",
    name: "Snake Game",
    description:
      "its a snake game which is built with HTML , Tailwind CSS and Javascript. It has various sound effects and also points.",
    link: "sadashiva-nayak.github.io/snake/",
    github: "https://github.com/Sadashiva-nayak/snake",
  },
  {
    image: "/tic_tac_toe.png",
    category: "Backend",
    name: "Tic Tac Toe Game",
    description:
      "its a tic tac toe game which is built with HTML , CSS and Javascript. It has various sound effects and various animations.",
    link: "sadashiva-nayak.github.io/tic-tac-toe/",
    github: "https://github.com/Sadashiva-nayak/tic-tac-toe",
  },
  {
    image: "/yummy.png",
    category: "Frontend",
    name: "Yummy",
    description:
      "its a clone website which also has animations which are built is built using HTML , Tailwind CSS and Javascript.",
    link: "sadashiva-nayak.github.io/yummy/",
    github: "https://github.com/Sadashiva-nayak/yummy",
  },
  {
    image: "/redux.png",
    category: "Frontend",
    name: "redux-CRUD website",
    description:
      "its an redux website where we can create , read , update and delete items. Its built using HTML ,Tailwind CSS , Reactjs and redux.",
    link: "/",
    github: "https://github.com/Sadashiva-nayak/redux-crud-website",
  },
  {
    image: "/coco.png",
    category: "Frontend",
    name: "sadguru website",
    description:
      "its an coconut products website which tell us about the various coconut products available which is built using HTML , Tailwind and ReactJS.",
    link: "/",
    github: "https://github.com/Sadashiva-nayak/coco-web",
  },
];

const uniqueCategories =['all projects',...new Set(ProjectData.map((item)=>item.category))]

const projects = () => {
  const[category,setcategory]=useState('all projects');
  const[categories,setcategories]=useState(uniqueCategories);

  const filteredProjects= ProjectData.filter((project)=>{
    return category==='all projects'? projects:project.category==category;
  })

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full h-full mx-auto grid md:grid-cols-4 mb-12 lg:max-w-[640px] md:border dark:border-none'>
            {categories.map((category,index)=>{
              return (
                <TabsTrigger value={category} key={index} onClick={()=>setcategory(category)} className='capilatize w-[162px] md:mx-auto'>{category}</TabsTrigger>
              )
            })}
          </TabsList>
          <div className="text-lg grid grid-cols-1 lg:grid-cols-3 gap-4 xl:mt-8">
            {filteredProjects.map((project,index)=>{
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}/>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default projects
