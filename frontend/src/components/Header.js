import React, { useContext } from "react";
import { Context } from "../Context";

function Header() {
  const { family } = useContext(Context);

  let handleError =
    family.length > 0 ? (
      <div></div>
    ) : (
      <p className="error">Error: Could not receive family preferences</p>
    );

  return (
    <header>
      <h1>Shipping</h1>
      {handleError}
    </header>
  );
}

export default Header;
