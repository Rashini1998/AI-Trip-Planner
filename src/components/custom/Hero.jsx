import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[40px] text-center mt-16'>
        <span className='text-[#333237]'>Discover Your Next Adventure with AI:</span><span className='text-[#fb8351]'>Personalized Itineraries at Your Fingertips</span> 
        <p className='text-lg font-medium text-gray-500 text-center mt-10 mb-10'>Your personal trip planner & travel curator, creating custom itineraries tailored to your interests & budget.</p>

        <Button>Get Started, It's Free</Button>
      </h1>
    </div>
  )
}

export default Hero