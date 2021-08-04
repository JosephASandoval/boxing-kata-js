import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isStarterDisabled, setIsStarterDisabled] = useState(true);
  const [isRefillDisabled, setIsRefillDisabled] = useState(false);

  function disableStarterLink() {
    setIsStarterDisabled(true);
    setIsRefillDisabled(false);
  }

  function disableRefillLink() {
    setIsRefillDisabled(true);
    setIsStarterDisabled(false);
  }

  const styleStarterLink = isStarterDisabled ? "link-disabled" : "";
  const styleRefillLink = isRefillDisabled ? "link-disabled" : "";

  return (
    <nav>
      <Link className={styleStarterLink} to="/">
        <h2
          className={isStarterDisabled ? "link-disabled" : "link"}
          onClick={disableStarterLink}
        >
          Starter Boxes
        </h2>
      </Link>

      <Link className={styleRefillLink} to="/refill">
        <h2
          className={isRefillDisabled ? "link-disabled" : "link"}
          onClick={disableRefillLink}
        >
          Refill Boxes
        </h2>
      </Link>
    </nav>
  );
}

export default Navbar;
