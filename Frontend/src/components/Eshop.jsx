import { Link } from "react-router-dom";

export default function Eshop() {
  return (
    <div className="project-container" id="section-projects">
      <div className="project-image"> </div>
      <p className="project-description">
        <span>Eshop</span> is a project I am currently developping and still in
        process. It allows me to practice skills and to gain more skills. This
        web application features a user interface built with React and styled
        using SCSS. We implemented a REST API using the Express framework and
        Node.js. The database was created using MySQL.
      </p>
      <p className="project-use-description">
        You can browse through the articles and almost purchase them !
      </p>

      <Link
        className="link-streetart"
        to="https://street-art-hunter.laloupe-1.wilders.dev/map"
        target="_blank"
      >
        Enjoy window shopping!
      </Link>
    </div>
  );
}
