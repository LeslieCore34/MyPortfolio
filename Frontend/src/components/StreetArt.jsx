import { Link } from "react-router-dom";

export default function StreetArt() {
  return (
    <div className="project-container" id="section-projects">
      <h1 className="project-title">Street-art-Hunters</h1>
      <div className="image-container">
        <div className="project-image"></div>
      </div>
      <div className="list-container">
        <h2 className="project-description">Project description :</h2>
        <ul className="functionnalities">
          <li>Google Maps Integration</li>
          <li>Real-time Geolocation</li>
          <li>Photo functionality to take pictures</li>
          <li>Secured authentication with Tokens</li>
          <li>Password stored using bcrypt</li>
          <li>Relational Database with MySQL</li>
          <li>MVC architecture</li>
        </ul>
        <div className="project-use-description">
          <p className="description-text-project">
            <span>Street-Art Hunters</span> is a project I developed with two
            classmates during my studies. <br />
            <p className="how-to-use">
              Use your camera to capture city street art, and accumulate points
              for each discovery!
            </p>
          </p>
          <Link
            className="link-streetart"
            to="https://street-art-hunter.laloupe-1.wilders.dev/map"
            target="_blank"
          >
            Start to play!
          </Link>
        </div>
      </div>
    </div>
  );
}
