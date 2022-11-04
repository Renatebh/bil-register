import { FaHome, FaUser, FaCar, FaUserPlus } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import style from "./sidebar.module.css";

const SideBar = () => {
  return (
    <>
      <div className={style["sidebar-wrapper"]}>
        <ul className={style["sidebar-list"]}>
          <li className={style["sidebar-item"]}>
            <Link className={style["sidebar-link"]} to="/home">
              <p className={style["sidebar-text"]}>
                <FaHome size={30} />
                Hjem
              </p>
            </Link>
          </li>

          <li className={style["sidebar-item"]}>
            <Link to="/persons" className={style["sidebar-link"]}>
              <p className={style["sidebar-text"]}>
                <FaUser size={30} />
                Personer
              </p>
            </Link>
          </li>

          <li className={style["sidebar-item"]}>
            <Link to="/addperson" className={style["sidebar-link"]}>
              <p className={style["sidebar-text"]}>
                <FaUserPlus size={30} />
                Legg til person
              </p>
            </Link>
          </li>

          <li className={style["sidebar-item"]}>
            <Link to="/cars" className={style["sidebar-link"]}>
              <p className={style["sidebar-text"]}>
                <FaCar size={30} />
                Biler
              </p>
            </Link>
          </li>

          <li className={style["sidebar-item"]}>
            <Link to="/addcar" className={style["sidebar-link"]}>
              <p className={style["sidebar-text"]}>
                <AiFillFolderAdd size={30} />
                Legg til bil
              </p>
            </Link>
          </li>

          <li className={style["sidebar-item"]}>
            <Link to="/" className={style["sidebar-link"]}>
              <p className={style["sidebar-text"]}>
                <BiLogOut size={30} />
                Logg ut
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
