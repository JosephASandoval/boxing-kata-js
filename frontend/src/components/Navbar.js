import React from "react";
import { Link } from "react-router-dom";
import useDisable from "../hooks/useDisable";

function Navbar() {
  const {
    isStarterDisabled,
    isRefillDisabled,
    disableStarterLink,
    disableRefillLink,
  } = useDisable();

  const styleStarterLink = isStarterDisabled ? "link-disabled" : "";
  const styleRefillLink = isRefillDisabled ? "link-disabled" : "";

  return (
    <nav>
      <Link className={styleStarterLink} to="/starter">
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
