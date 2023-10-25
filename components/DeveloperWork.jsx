import React from 'react'
import Image from 'next/image'

const project = {
    name: "Shenron's Tiny Trinkets",
    languages: 'Html | Javascript | CSS | Vue | Tailwind | Node | Express | mysql | GSAP'
}

function DeveloperWork() {
  return (
    <section className='flex gap-3 mt-5'>
        <div className='flex-1'>
            <div className='flex justify-between'>
                <p className='text-primary'>Iphone? Nah. Iframe!</p>
                <p className='text-secondary'>
                    <a href="#" className=' transition hover:text-white'>Github</a> 
                    <span className='text-primary'> / </span> 
                    <a href="#" className=' transition hover:text-white'>Live</a>
                </p>
            </div>
            <div className='border border-accent p-2 h-60 '>
                <div className='relative w-full h-full'>
                <Image
                src={'https://i.postimg.cc/MGXnp9TC/Screenshot-36-1.jpg'}
                fill={true}
                alt="Shenron's"
                />
                </div>
            </div>
            <div>
                <p className='text-tertiary hover:text-secondary transition'>Html | Javascript | CSS | Vue | Tailwind | Node | Express | mysql | GSAP</p>
            </div>
        </div>
        <div className='flex-1 flex flex-col text-4xl py-6 text-accent'>
            <div className='border border-accent rounded-md'>
                <p>Shenron's Tiny Trinkets</p>
            </div>
            <div className='border border-accent'>
                <p>Another Time</p>
            </div>
            <div className='border border-accent'>
                <p>Javascript shoe store</p>
            </div>
            <div className='border border-accent'>
                <p>First Portfolio</p>
            </div>
        </div>
    </section>
  )
}

export default DeveloperWork