import React, { useState, useEffect } from "react";
import { dataURL } from "./data/dataURL";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [family, setFamily] = useState([]);

  useEffect(() => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((data) => setFamily(data));
  }, []);

  return (
    <Context.Provider
      value={{
        family,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
