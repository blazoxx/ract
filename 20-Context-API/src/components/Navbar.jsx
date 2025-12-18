import { useContext } from "react";
import Button from "./Button";
import Nav2 from "./Nav2";
import { themeDataContext } from "../context/ThemeContext";

const Navbar = () => {

  const [theme] = useContext(themeDataContext)

  return (
    <div className= {`nav ${theme}`}>
      <h2>theB</h2>
      <Nav2 />
    </div>
  );
};

export default Navbar;
