import React, { useState, createContext,useEffect } from "react";






export const Tugas15Context = createContext();

export const Tugas15Provider = (props) => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        console.log(theme);
    }, [theme]);
 
  
  return (
    <Tugas15Context.Provider value={[theme, setTheme]}>
     {props.children}
    </Tugas15Context.Provider>
  );
};

