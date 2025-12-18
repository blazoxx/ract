import React from "react";

const Navbar = (props) => {

  const changeTheme = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>Theme is {props.theme}</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
