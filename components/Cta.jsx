import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
   <section className='py-24 bg-tirtiary dark:bg-secondary/40'>
    <div className="container mx-auto">
        <div className=" flex flex-col items-center">
            <h2 className="h2 max-w-xl mb-8 text-center">Prepared To Turn Your Ideas Into Reality? I'm Here To Help</h2>
            <Link href='/contact'>
            <Button>Contact me</Button>
            </Link>
        </div>
    </div>
   </section>
  )
}

export default Cta
