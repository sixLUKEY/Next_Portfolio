import React from "react";
import Navbar from "@/components/Navbar";
import DeveloperSection from "@/components/DeveloperSection";
import './skills.css'
import Wings from "@/components/WIngs";
import DesignerSection from "@/components/DesignerSection";

function Skills() {
  return (
    <main>
      <Navbar />
        <DeveloperSection/>
        <Wings/>
        <DesignerSection/>
    </main>
  );
}

export default Skills;
