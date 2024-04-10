import { Link } from "react-router-dom";

export default function StreetArt() {
  return (
    <div className="project-container" id="section-projects">
      <div className="project-image"> </div>
      <p className="project-description">
        Street-Art Hunters is a project I developed with two classmates during
        my studies. The application features a user interface built with React
        and styled using SCSS. We implemented a REST API using the Express
        framework on Node.js. The project utilizes a MySQL database for data
        storage.
      </p>

      <p className="project-use-description">
        Use your camera to capture the city's street art, and rack up points for
        your discoveries. Track your progress and see how you stack up against
        other players on the global leaderboard!
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
