import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HomeSection></HomeSection>
      <div id="#section-presentation">Contenu de la page Présentation</div>
      <div id="#section-projects">Contenu de la page Projects</div>
      <div id="#section-contact">Contenu de la page Contact</div>
    </>
  );
}
