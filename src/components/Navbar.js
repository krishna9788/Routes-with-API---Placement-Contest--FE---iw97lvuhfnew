import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link className="site-title" to="/">
        Site Name
      </Link>
      <ul>
        <li>
          <Link className="top-ten" to="/top-10">
            Top 10
          </Link>
        </li>
        <li>
          <Link className="contact" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
