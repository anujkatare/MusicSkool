"use client"

import { Card } from "@/components/Card";
import Navbar from "@/components/Navbar";
import courses from "@/data/music_courses.json";


const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
        <Navbar />
        
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl
            font-bold bg-clip-text text-transparent bg-linear-to-b
             from-neutral-50 to-neutral-400 flex justify-center ">All Courses ({courses.courses.length})</h1>
             <div>
             <div className='grid  grid-cold-1 sm:grid-cols-2 lg:grid-cols-3 rounded gap-8 justify-center py-6 px-6'>
              {courses.courses.map((course) => (
                              <div 
                              key={course.id} 
                              className='rounded'
                              >
                              <Card title={course.title} description={course.description} price={course.price} image={course.image}/>      
                              </div>
                          ))}
             </div>
             </div>
    </div>
  )
}

export default page