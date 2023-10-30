import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import LukeyLogo from "@/components/LukeyLogo";

function Home() {
  return (
    <div className="landing grid grid-cols-12 grid-rows-6 h-screen font-bebas p-3 gap-3">
      <div className="logo">
        <h1 className="text-white text-[120px] leading-none">
          <span className="text-primary text-2xl">six</span>LUKEY
        </h1>
      </div>
      <Hero/>
      <LukeyLogo/>
      <Link href={"/contact"} className="contact hover:bg-secondary transition text-7xl text-accent hover:text-dark">
        Contact<span className="text-4xl">.me</span>
      </Link>
      <Link href={"/about"} className="about hover:bg-tertiary transition text-7xl text-accent hover:text-white">
        About<span className="text-4xl">.me</span>
      </Link>
      <Link href={"/skills"} className="skills hover:bg-secondary transition text-7xl text-accent hover:text-accent">
      <span className="text-4xl">my.</span>SKILLS
      </Link>
      <Link href={"/work"} className="work hover:bg-primary transition text-7xl text-accent hover:text-white">
      <span className="text-4xl">my.</span>CV
      </Link>
      <Link href={"/"} className="experience hover:bg-white transition text-7xl text-accent hover:text-dark">
      <span className="text-4xl">my.</span>WORK
      </Link>
      <div className="copyright text-white text-xl">
        Copyright &copy; 2023
        <br />
        Luke Evertson
      </div>
    </div>
  );
}

export default Home;
