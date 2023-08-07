import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <p>
          Want to collaborate on a project or have any questions? Feel free to
          reach out!
        </p>
        <Link to="/contact">Contact Me</Link>
      </footer>
    </div>
  );
}
