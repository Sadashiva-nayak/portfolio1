'use client';

import React from 'react'
import Countup from 'react-countup'

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText
}) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl font-bold leading-none text-primary'>
          <Countup end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className='text-[15px] max-w-[70px] leading-none font-medium text-black'>{badgeText}</div>
      </div>
    </div>
  )
}

export default Badge
