import React from "react";
import Navbar from "@/components/Navbar";
import "./contact.css";

function Contact() {
  return (
    <main>
      <Navbar />
      <h1 className="text-white text-[100px]">
        Lets<span className="text-primary">'</span>s get in{" "}
        <span className=" touch text-transparent hover:text-primary">
          contact
        </span>{" "}
        <span className="text-5xl text-[#222222]">|</span>{" "}
        <a href='mailto:marcoslukerojo@gmail.com?subject=Contact%20via%20Portfolio' className="text-[#222222] contact transition">touch</a>
      </h1>
      <form action="" className="flex flex-col gap-3">
        <div className="flex gap-3 flex-1">
          <div className="flex-[5] border border-accent flex text-3xl text-white">
            <input type="text" className="bg-transparent p-3 flex-1" placeholder="Your first name"/>
            <div className="w-px h-full bg-accent mx-1"></div>
            <input type="text" className="bg-transparent p-3 flex-1" placeholder="Your last name"/>
          </div>
          <div className="flex-[3] border border-accent flex  justify-between text-3xl text-white">
            <button className="flex-1 hover:text-primary hover:bg-primaryalt transition">Develop
              </button>
              <div className="w-px h-full bg-accent"></div>
              <button className="flex-1 hover:text-primary hover:bg-primaryalt transition">Design</button>
              <div className="w-px h-full bg-accent"></div>
              <button className="flex-1 hover:text-primary hover:bg-primaryalt transition">Both</button>
          </div>
        </div>
        <div className="flex gap-3 flex-[3]">
          <textarea name="" id="" cols="30" rows="5" className="flex-[4] bg-transparent border border-accent p-3 text-white text-xl" placeholder="leave a message"></textarea>
          
          <div className="flex-[3] flex flex-col gap-3 ">
            <input type="email" placeholder="Your email address" className="bg-transparent text-3xl w-full border border-accent p-3 text-white"/>
          <button className=" text-primary text-3xl border border-primary p-3 hover:bg-primaryalt transition hover:text-white">
            " &nbsp;<span className="text-white font-serif">Submit</span>&nbsp; "
          </button>
            <p className="text-xl text-accent"><span className="text-primary">*</span> required fields</p>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Contact;
