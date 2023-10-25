'use client'
import React from 'react'
import CanvasComp from '@/components/CanvasComp'
import CarouselComp from '@/components/CarouselComp'
import Navbar from '@/components/Navbar'

function About() {
  return (
    <main className='text-primary'>
      <Navbar/>
      About
        <CanvasComp/>
        {/* <CarouselComp/> */}
    </main>
  )
}

export default About