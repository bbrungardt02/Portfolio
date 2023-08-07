import React from "react";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        Welcome to my projects page. Below are some of the projects I've worked
        on. Each project showcases my skills and expertise in web development.
      </p>
      <section>
        <h2>Mickey D's</h2>
        <p>
          Crafted a robust Full Stack McDonald's themed website, allowing users
          to log in, register, and place orders with seamless checkout.
          Implemented React, Express, and PostgreSQL in Javascript for a dynamic
          user experience. Demonstrated strong leadership, fostering teamwork to
          optimize formats and efficiencies within the group.
        </p>
        {/* Add images or links to project demos here */}
      </section>

      <section>
        <h2>Stranger's Things</h2>
        <p>
          Implemented an efficient navigation bar, elevating user experience and
          streamlining platform navigation. Developed a robust forum application
          enabling users to create posts, send messages, and manage their
          profiles effortlessly. Demonstrated strong leadership, optimizing team
          organization and task delegation. Exhibited excellent communication
          skills to prevent merge conflicts and enhance efficiency. Leveraged
          React and AuthProvider to create a powerful front-end experience.
        </p>
        {/* Add images or links to project demos here */}
      </section>

      {/* Add more project sections as needed */}
    </div>
  );
}
