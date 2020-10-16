import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Tugas15Provider,Tugas15Context  } from "./Tugas15Contex";


const Nav = () => {
 
  const[theme,setTheme] = useContext(Tugas15Context);

const handleChange = (e) => {
  
  if(theme === "light"){
    setTheme("dark");
  }
  else {
    setTheme("light");
  }
}

  return (
    <nav>
      <ul >
        <li>
          <Link to="/tugas9">Tugas9</Link>
        </li>
        <li>
          <Link to="/tugas10">Tugas10</Link>
        </li>
        <li>
          <Link to="/tugas11">Tugas11</Link>
        </li>
        <li>
          <Link to="/tugas12">Tugas12</Link>
        </li>
        <li>
          <Link to="/tugas13">Tugas13</Link>
        </li>
        <li>
          <Link to="/tugas14">Tugas14</Link>
        </li>
      </ul>

      <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={handleChange} />
          <div className="slider round"></div>
        </label>
        <em>Dark Mode</em>
      </div>
{/* kek button dia */}

    </nav>
  );
};

export default Nav;
