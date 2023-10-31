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
      <div className='flex-[4] border border-accent h-64 max-h-64'>

      </div>
    </section>
  )
}

export default DesignerWork