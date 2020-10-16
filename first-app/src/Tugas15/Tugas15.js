import { BrowserRouter as Router } from "react-router-dom";
import React, { useContext } from "react";
import Routes from "./routes";
import Nav from "./nav";
import { Tugas15Provider,Tugas15Context  } from "./Tugas15Contex";
import Tugas15Content from './Tugas15Wrap';



const Tugas15 = () => {

    
    // let [theme] = useContext(Tugas15Context)

  return (
    <Tugas15Provider>        
        <Tugas15Content/>
    </Tugas15Provider>
  );
};
export default Tugas15;
