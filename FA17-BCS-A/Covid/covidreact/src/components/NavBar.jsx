import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul id="menu">
      <li>
        <Link to="/add">Add</Link>
      </li>
      <li>
        <Link to="/">List</Link>
      </li>
    </ul>
  );
};

export default NavBar;
