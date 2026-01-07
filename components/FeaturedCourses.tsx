import React from 'react'
import {BackgroundRippleEffect} from './ui/background-ripple-effect';
import Link from 'next/dist/client/link';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import coursesData from '@/data/music_courses.json';
import { Card } from './Card';


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}


const FeaturedCourses = () => {

    const featuredCourses = coursesData.courses.filter((course: Course) => course.isFeatured).slice(0, 6);

  return (
    <div className='p-6'>
        <div className='relative  flex h-100 w-full flex-col items-start justify-start overflow-hidden' >
            <BackgroundRippleEffect />
            <div className='mt-35 mb-0 w-full px-4 text-center  '>
                 
                <h1 className='relative z-10 mx-auto mt-4 max-w-xl text-center text-teal-800 dark:text-teal-500'>Featured Courses</h1>
                <p className='relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100'>
                    Start with the Best.</p>
                     
            </div>
        </div>
        <div className='mt-0 my-10 gap-6 rounded  '>
           <div className='grid  grid-cold-1 sm:grid-cols-2 lg:grid-cols-3 rounded gap-8 justify-center'>
            {featuredCourses.map((course: Course) => (
                <div 
                key={course.id} 
                className='rounded'
                >
                <Card title={course.title} description={course.description} price={course.price} image={course.image}/>      
                </div>
            ))}
           </div>
        </div>
        <div className=' flex justify-center text-center mb-10'>
            <Link
             href={"/courses"}
             className='border-none'
            >
           <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black m-1 cursor-pointer border-none bg-white text-black dark:text-white flex items-center space-x-2">
                    <span>All Courses</span>
            </HoverBorderGradient>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses 