import React from 'react'
import Image from 'next/image'

function DesignerWork() {
  return (
    <section className='flex gap-3 my-5'>
      <div className='flex-[5] border border-accent p-2 rounded-sm'>
        <div className='w-full h-full relative'>
        <Image
        src={'https://i.postimg.cc/XJPvGKKj/Rectangle-72.jpg'}
        alt='marlboro'
        fill={true}
        className='rounded-sm'
        />
        </div>
      </div>
      <div className='flex-[4] flex flex-col gap-3 h-64 max-h-64'>
        <select name="designs" id="designs" className='flex-1 border border-accent bg-dark text-white text-4xl px-2 rounded-sm'>
          <option value="marlboro">Marlboro red Beyond</option>
        </select>
        <div className='flex-[4] flex gap-3'>
          <div className='flex-[5] border border-accent rounded-sm p-2'>
            <div className="w-full h-full relative">
              <Image
              src={'https://i.postimg.cc/05f83nVW/Screenshot-2023-10-06-114501-1.jpg'}
              alt='marlboro 2'
              fill={true}
              className='rounded-sm'
              />
            </div>
          </div>
          <div className='flex-[4] flex flex-col gap-3'>
            <div className='flex-[4] border border-accent rounded-sm p-2'>
            <div className="w-full h-full relative">
              <Image
              src={'https://i.postimg.cc/8zcxZBY6/Screenshot-2023-10-06-114645-1.jpg'}
              alt='marlboro 3'
              fill={true}
              className='rounded-sm'
              />
            </div>
            </div>
            <div className='flex-1 border border-accent rounded-sm flex items-center px-2  hover:text-white'>
              <p className='text-secondary transition text-xl'>Full design here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignerWork