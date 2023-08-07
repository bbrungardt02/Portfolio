import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

export default function HomePage() {
  return (
    <div>
      <header>
        <h1>Brandon Brungardt</h1>
      </header>
      <main>
        <section>
          <p>
            Greetings! I'm a recent FullStack Academy graduate. My journey
            commenced at Labette Community College, where I earned an
            associate's degree in General Studies, uncertain of the path ahead.
            <br />
            However, upon joining FullStack Academy, I discovered my true
            passion. The coding world's boundless creativity and possibilities
            captivated me. Throughout the bootcamp, I honed my skills in
            crafting clean, efficient code, while also exploring and pushing my
            abilities to new heights.
          </p>
        </section>
        <section>
          <h2>Skills</h2>
          <p>
            Javascript • React • PostgreSQL • github • git
            <br />
            HTML • CSS • Node • Express
          </p>
        </section>
      </main>
    </div>
  );
}
