import React from "react";
import Image from "next/image";

const projects = [
  {
    name: "Shenron's Tiny Trinkets",
    languages:
      "Html | Javascript | CSS | Vue | Tailwind | Node | Express | mysql | GSAP",
      id: 1
  },
  {
    name: "Another Time",
    languages: "Html | Javascript | CSS | Vue | Tailwind | Node ",
    id: 2
  },
];

function DeveloperWork() {
  const listItems = projects.map((project) => (
    <li
      key={project.id}
      className="border border-accent rounded-sm p-2 hover:text-primary hover:border-primary hover:bg-primaryalt transition"
    >
      {project.name}
    </li>
  ));

  return (
    <section className="flex gap-3 mt-5">
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="text-primary">Iphone? Nah. Iframe!</p>
          <p className="text-secondary">
            <a href="#" className=" transition hover:text-white">
              Github
            </a>
            <span className="text-primary"> / </span>
            <a href="#" className=" transition hover:text-white">
              Live
            </a>
          </p>
        </div>
        <div className="border border-accent p-2 h-60 ">
          <div className="relative w-full h-full">
            <Image
              src={"https://i.postimg.cc/MGXnp9TC/Screenshot-36-1.jpg"}
              fill={true}
              alt="Shenron's"
            />
          </div>
        </div>
        <div>
          <p className="text-tertiary hover:text-secondary transition">
            Html | Javascript | CSS | Vue | Tailwind | Node | Express | mysql |
            GSAP
          </p>
        </div>
      </div>
      <ul className="flex-1 flex flex-col gap-2 text-4xl my-6 text-accent overflow-scroll max-h-64 developerList pe-2">
        {listItems}
      </ul>
    </section>
  );
}

export default DeveloperWork;
