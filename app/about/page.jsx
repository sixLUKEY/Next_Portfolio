'use client'
import React from 'react'
// import CanvasComp from '@/components/CanvasComp'
// import CarouselComp from '@/components/CarouselComp'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

function About() {
  return (
    <main>
      <Navbar/>
      <section className='bg-primaryalt border border-primary p-5'>
        <h3 className='text-center text-white text-3xl'>Hello World, I am</h3>
        <h1 className='text-[10rem] text-primary text-center leading-[1]'>Luke Evertson</h1>
        <p className='text-center text-secondary my-5 text-lg'><span className='hover:text-white transition'>Web Developer</span> &nbsp;&nbsp; | &nbsp;&nbsp; <span className='hover:text-white transition'>UI / UX Designer</span> &nbsp;&nbsp; | &nbsp;&nbsp; <span className='hover:text-white transition'>Problem Solver</span> &nbsp;&nbsp; | &nbsp;&nbsp; <span className='hover:text-white transition'>CSS Connoisseur</span> &nbsp;&nbsp; | &nbsp;&nbsp; <span className='hover:text-white transition'>Pizza Enjoyer</span> &nbsp;&nbsp;</p>
        <div className='flex justify-between'>
        <div className='flex'></div>
        <Image
        src={'https://i.postimg.cc/gr9FnK9Q/Ellipse-13.png'}
        alt='Luke Evertson'
        width={300}
        height={300}
        // className='mx-auto'
        />
        <div></div>
        </div>
        <div className='flex justify-evenly mt-5'>
          <div></div>
          <div className=' max-w-lg text-center flex flex-col gap-5 text-white'>
            <p>An upcoming <span className='text-primary'>web developer</span> and <span className='text-primary'>Ui / Ux designer</span> who prides himself in delivering the user a fun and interactive experience.</p>
          <p>
          Making things look nice is most important to me, which is why i love designing User interfaces. Don’t be fooled though, We tackle backend out here too!
          </p>
          </div>
          <div></div>
        </div>
      </section>
        
    </main>
  )
}

export default About