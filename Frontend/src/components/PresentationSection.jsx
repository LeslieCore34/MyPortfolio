/* eslint-disable react/no-unescaped-entities */
export default function PresentationSection() {
  return (
    <>
      <section
        id="section-presentation"
        className="presentation-main-container"
      >
        <h1 className="presentation-title">Hi there !</h1>
        <p className="presentation-second-container">
          <p className="presentation-one">
            I'm a Web Developer who graduated in March 2024. During my studies,
            I've built several projects, and since graduating, I've continued to
            expand my skills by working on personal projects.
          </p>
          <p className="presentation-two">
            I'm always eager to learn more about web development. Currently, I'm
            focusing on mastering Typescript and the Angular framework to
            further enhance my skills and tackle new challenges.
          </p>
          <p className="presentation-three">
            {" "}
            I am proficient in front-end development (HTML, CSS, JavaScript),
            back-end development (Node.js), and database management (MySQL) :{" "}
          </p>
        </p>
      </section>
    </>
  );
}
