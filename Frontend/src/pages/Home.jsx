import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";
import PresentationSection from "../components/PresentationSection";
import StackImages from "../components/StackImages";
import TechnicalSkills from "../components/TechnicalSkills";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData.json";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HomeSection menuOpen={menuOpen} />
      <div className="grid-container">
        <PresentationSection />
        <TechnicalSkills />
        <StackImages />
      </div>
      <div className="projects-introduction-title">MY PROJECTS</div>
      <div className="grid-container-projects">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Contact />
    </>
  );
}
