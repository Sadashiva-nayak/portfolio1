import React from 'react'
import Image from 'next/image';

const DevImg = ({containerStyles,imgsrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgsrc} height={490} width={490} className='absolute left-3 top-5' priority alt=''/>
    </div>
  )
}

export default DevImg
