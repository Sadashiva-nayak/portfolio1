import React from 'react'
import Socials from './Socials'

function Footer() {
  return (
   <footer className='bg-secondary py-12'>
    <div className="mx-auto container">
      <div className="flex flex-col justify-between items-center">
        <Socials
        containerStyles='flex gap-x-6 mb-4 mx-auto xl:mx-0'
        iconStyles='text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary transition-all'
        />
        <div className="text-muted-foreground">
        CopyRight &copy; Sadashiva Nayak. All Rights Reserved.
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer
