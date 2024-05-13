'use client';

import React from 'react'
import {
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
} from 'react-icons/ri'

import Link from 'next/link';

const icons =[
  {
    path:'https://www.linkedin.com/in/sadashiva-nayak/',
    name:<RiLinkedinFill/>
  },
  {
    path:'https://github.com/Sadashiva-nayak',
    name:<RiGithubFill/>
  },
  {
    path:'https://www.instagram.com/sada_nyk/',
    name:<RiInstagramFill/>
  },
]
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials
