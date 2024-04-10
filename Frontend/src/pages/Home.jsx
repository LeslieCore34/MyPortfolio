import NavBar from "../components/NavBar";
import HomeSection from "../components/HomeSection";
import PresentationSection from "../components/PresentationSection";
import StackImages from "../components/StackImages";
import TechnicalSkills from "../components/TechnicalSkills";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <div className="grid-container">
        <PresentationSection />
        <TechnicalSkills />
        <StackImages />
      </div>

      <div id="#section-projects">Contenu de la page Projects</div>
      <div id="#section-contact">Contenu de la page Contact</div>
    </>
  );
}
