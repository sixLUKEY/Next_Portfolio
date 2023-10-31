'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {

  const pathname = usePathname()

  return (
    <header>
      <nav className="text-secondary flex justify-between">
        <div className="logo">
            <Link href={'/'}>
        <h1 className="text-white text-[100px] leading-none">
          <span className="text-primary text-2xl">six</span>LUKEY
        </h1>
            </Link>
        </div>
        <ul className="flex gap-5 items-end text-2xl navLinks">
          <li className="hover:text-white transition">
            <Link href={"/about"} className={`link ${pathname === '/about' ? 'activeNav' : ''}`}>About.<span className="text-sm">me</span></Link>
          </li>
          <li className="hover:text-white transition">
            <Link href={"/skills"} className={`link ${pathname === '/skills' ? 'activeNav' : ''}`}><span className="text-sm">my</span>.Skills</Link>
          </li>
          <li className="hover:text-white transition">
            <Link href={"/work"} className={`link ${pathname === '/work' ? 'activeNav' : ''}`}><span className="text-sm">my</span>.Work</Link>
          </li>
          <li className="hover:text-white transition">
            <Link href={"/contact"} className={`link ${pathname === '/contact' ? 'activeNav' : ''}`}>Contact.<span className="text-sm">me</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
