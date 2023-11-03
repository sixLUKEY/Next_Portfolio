import React from 'react'

const projects = [
    {
        name: "Shenron's Tiny Trinkets",
    languages: 'Html | Javascript | CSS | Vue | Tailwind | Node | Express | mysql | GSAP',
    id: 1
    },
    {
        name: "Another Time",
        languages: 'Html | Javascript | CSS | Vue | Tailwind | Node',
        id: 2
    }
]
    

function WorkList() {

    const listItems = projects.map( project => 
            <li
            key={project.id}
            className='border border-accent rounded-sm p-2 hover:text-primary hover:border-primary hover:bg-primaryalt transition'
            >
                { project.name }
            </li>
        )

  return (
    <ul className='flex-1 flex flex-col gap-2 text-4xl my-6 text-accent overflow-scroll max-h-64 developerList pe-2'>
    { listItems }
</ul>
  )
}

export default WorkList