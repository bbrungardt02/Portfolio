import React from "react";
import mickeyDHomePage from "./mickey-d-homepage.png";
import strangersThingsHomePage from "./stranger's-things.png";
export default function Projects() {
  return (
    <div id="projects-container">
      <h1>Projects</h1>
      <p>Utilizing React.js, PostgreSQL, and ExpressJS</p>
      <section className="project-card">
        <h2>
          <a
            href="https://mickey-d.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mickey D's
          </a>
        </h2>
        <p>
          Crafted a robust Full-Stack McDonald's themed website, allowing users
          to log in, register, and place orders with seamless checkout.
          Implemented React, Express, and PostgreSQL in Javascript for a dynamic
          user experience.
        </p>
        <div className="project-image-container">
          <img id="mickey-d" src={mickeyDHomePage} alt="Mickey-D-HomePage" />
        </div>
      </section>
      <section className="project-card">
        <h2>
          <a
            href="https://brandon-strangers-things.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stranger's Things
          </a>
        </h2>
        <p>
          Leveraged React and AuthProvider to create a powerful front-end
          experience.Implemented an efficient navigation bar, elevating user
          experience and streamlining platform navigation. Developed a robust
          forum application enabling users to create posts, send messages, and
          manage their profiles effortlessly.
        </p>
        <div className="project-image-container">
          <img
            id="strangers-things"
            src={strangersThingsHomePage}
            alt="Strangers-Things-HomePage"
          />
        </div>
      </section>
      {/* Add more project sections as needed */}
    </div>
  );
}
