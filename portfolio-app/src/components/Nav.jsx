import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">About</Link>
        <Link to="/projects"> Projects</Link>
      </nav>
    </div>
  );
}
