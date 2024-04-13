import { Link } from "react-router-dom";

export default function StreetArt() {
  return (
    <div className="project-container" id="section-projects">
      <div className="project-image"> </div>
      <p className="project-description">
        <span>Street-Art Hunters</span> is a project I developed with two
        classmates during my studies. <br />
        This web application features a user interface built with React and
        styled using SCSS. We implemented a REST API using the Express framework
        and Node.js. The database was created using MySQL.
      </p>
      <p className="project-use-description">
        Use your camera to capture the city street art, and cumulate points for
        each discoveries. Track your progress and see how you stack up against
        other players !
      </p>

      <Link
        className="link-streetart"
        to="https://street-art-hunter.laloupe-1.wilders.dev/map"
        target="_blank"
      >
        Start to play!
      </Link>
    </div>
  );
}
