import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
