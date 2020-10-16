import { BrowserRouter as Router } from "react-router-dom";
import React, { useContext } from "react";
import Routes from "./routes";
import Nav from "./nav";
import { Tugas15Context  } from "./Tugas15Contex";



const Tugas15Content = () => {

    let [theme] = useContext(Tugas15Context);

  return (        
      <Router>
          <div className={theme}>
        <Nav />
        <Routes />
        </div>
      </Router>      
  );
};
export default Tugas15Content;
