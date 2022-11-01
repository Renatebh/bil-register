import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import Logo from "../logo/Logo";
import Searchbar from "../searchbar/Searchbar.jsx";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <Logo />
      </div>
      <ul className={style["links-list"]}>
        <li>
          <Link to="/home" className={style["link-item"]}>
            Hjem
          </Link>
        </li>
        <li>
          <Link to="/addData" className={style["link-item"]}>
            Legg til data
          </Link>
        </li>
        <li>
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
