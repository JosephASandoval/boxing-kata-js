import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h3>Starter Boxes</h3>
      </Link>

      <Link to="/refill">
        <h3>Refill Boxes</h3>
      </Link>
    </nav>
  );
}

export default Navbar;
