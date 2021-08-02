import React, { useState, useEffect } from "react";
import { dataURL } from "./data/dataURL";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  return (
    <Context.Provider
      value={{
        allUsers,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
