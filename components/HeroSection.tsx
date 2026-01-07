import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'


const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40-rem] w-full rounded-md flex flex-col  
    item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
    
        <div className='p-4 relative  mt-60 mb-40 z-10 w-full text-center '>

            <h1
            className='mt-20 md:mt-0 text-4xl md:text-7xl
            font-bold bg-clip-text text-transparent bg-linear-to-b
             from-neutral-50 to-neutral-400'
            >Master the Art of Music</h1>
            <p
            className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
            >Join our comprehensive courses and elevate your musical skills to new heights.
                Become part of a growing music community built for learners and creators. 
                Enroll in structured courses, collaborate with like-minded musicians,
                 and develop your skills with guidance from industry professionals.
                 
            </p>
            <div className='mt-4'>
                <Link href="/courses">
                   <Button
        borderRadius="5rem"
        className="bg-white dark:bg-gray-950 text-black dark:text-white border-neutral-200 dark:border-gray-500"
      >        Explore Courses
                  </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection