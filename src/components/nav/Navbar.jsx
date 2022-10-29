import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <p className={style.logo}>
          <Link to="./home">LOGO.</Link>
        </p>
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
      </ul>
    </nav>
  );
};

export default Navbar;
