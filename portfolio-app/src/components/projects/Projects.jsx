import React from "react";
import mickeyDHomePage from "./mickey-d-homepage.png";
import strangersThingsHomePage from "./stranger's-things.png";
export default function Projects() {
  return (
    <div id="projects-container">
      <h1>Projects</h1>
      <p>Utilizing React.js, PostgreSQL, and ExpressJS</p>
      <section className="project-card">
        <div className="box">
          <span></span>
          <h2>Mickey D's</h2>
          <p>
            Crafted a robust Full-Stack McDonald's themed website, allowing
            users to log in, register, and place orders with seamless checkout.
            Implemented React, Express, and PostgreSQL in Javascript for a
            dynamic user experience.
          </p>
          <div className="project-image-container">
            <a
              href="https://mickey-d.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="mickey-d"
                src={mickeyDHomePage}
                alt="Mickey-D-HomePage"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="project-card">
        <h2>Stranger's Things</h2>
        <p>
          Leveraged React and AuthProvider to create a powerful front-end
          experience.Implemented an efficient navigation bar, elevating user
          experience and streamlining platform navigation. Developed a robust
          forum application enabling users to create posts, send messages, and
          manage their profiles effortlessly.
        </p>
        <div className="project-image-container">
          <a
            href="https://brandon-strangers-things.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="strangers-things"
              src={strangersThingsHomePage}
              alt="Strangers-Things-HomePage"
            />
          </a>
        </div>
      </section>
      {/* Add more project sections as needed */}
    </div>
  );
}
