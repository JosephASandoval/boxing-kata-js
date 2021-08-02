import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h2 className="link">Starter Boxes</h2>
      </Link>

      <Link to="/refill">
        <h2 className="link">Refill Boxes</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
