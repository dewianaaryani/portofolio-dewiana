import React from 'react'
import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
           Kind words from
            <span className='text-purple'> satisfied clients and valued partners</span>
        </h1>
        <div className=' flex flex-col items-center mt-14'>
            
            <InfiniteMovingCards 
                items={testimonials}
                direction='left'
                speed='slow'
            />
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-16'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img src={img} alt={name} className='md:w-10 w-5' />
                        <img src={nameImg} alt={name} className='md:w-24 w-20' /> 
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Clients