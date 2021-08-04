import React, { useState, useEffect } from "react";
import { dataURL } from "./data/dataURL";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [family, setFamily] = useState([]);
  const [numBrushes, setNumBrushes] = useState(0);
  const [numStarter, setNumStarter] = useState(0);
  const [numRefill, setNumRefill] = useState(0);

  useEffect(() => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((data) => setFamily(data));
  }, []);

  useEffect(() => {
    const numFamily = family.length;
    setNumBrushes(numFamily);
    setNumStarter(Math.ceil(numFamily / 2));
    setNumRefill(Math.ceil(numFamily / 4));
  }, [family]);

  return (
    <Context.Provider
      value={{
        family,
        numBrushes,
        numStarter,
        numRefill,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
