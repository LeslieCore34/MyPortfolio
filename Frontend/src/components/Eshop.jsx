import { Link } from "react-router-dom";

export default function Eshop() {
  return (
    <div className="project-container" id="section-projects">
      <h1 className="project-title">E-shop</h1>
      <div className="image-container">
        <div className="project-image"></div>
      </div>

      <div className="list-container">
        <h2 className="project-description">Project description :</h2>

        <ul className="functionnalities">
          <li>Multiple products pages</li>
          <li>Stripe for (fake) payment</li>
          <li>Secured authentication with Tokens</li>
          <li>Password stored using bcrypt</li>
          <li>Download of images in database</li>
          <li>Relational Database with MySQL</li>
          <li>MVC architecture</li>
        </ul>
        <div className="project-use-description">
          <p>
            <span>Eshop</span> is a project I am currently developping. This web
            application features a user interface built with React and styled
            using SCSS. I implemented a REST API using the Express framework and
            Node.js.
            <p className="how-to-use">
              You can browse through the articles and (almost) purchase them !
            </p>
          </p>
          <Link
            className="link-eshop"
            to="https://github.com/LeslieCore34/Eshop"
            target="_blank"
          >
            Checkout my code!
          </Link>
        </div>
      </div>
    </div>
  );
}
