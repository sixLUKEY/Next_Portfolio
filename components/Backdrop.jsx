'use client'
import React from 'react'

function Backdrop() {

    const menuToggle = () => {
        const socials = document.querySelectorAll(".social");
        const backdrop = document.getElementById('backdrop')
    
        socials.forEach(( social ) => {
          social.classList.toggle("shown");
        });
        backdrop.classList.toggle('display')
    }

  return (
    <div className='fixed w-screen h-screen bg-black/30 z-10 hidden' id='backdrop' onClick={menuToggle}>Backdrop</div>
  )
}

export default Backdrop