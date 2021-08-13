import React, { useState, useEffect } from "react";
// import { dataURL } from "./data/dataURL";
import { test } from "./data/test";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [family, setFamily] = useState([]);
  const [numBrushes, setNumBrushes] = useState(0);
  const [numStarterBoxes, setNumStarterBoxes] = useState(0);
  const [numRefillBoxes, setNumRefillBoxes] = useState(0);

  // useEffect(() => {
  //   fetch(dataURL)
  //     .then((res) => res.json())
  //     .then((data) => setFamily(data))
  //     .catch((err) =>
  //       console.log("Error: Could not receive family preferences")
  //     );
  // }, []);

  useEffect(() => {
    setFamily(test);
  }, []);

  useEffect(() => {
    const numFamily = family.length;
    setNumBrushes(numFamily);
    setNumStarterBoxes(Math.ceil(numFamily / 2));
    setNumRefillBoxes(Math.ceil(numFamily / 4));
  }, [family]);

  return (
    <Context.Provider
      value={{
        family,
        numBrushes,
        numStarterBoxes,
        numRefillBoxes,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
