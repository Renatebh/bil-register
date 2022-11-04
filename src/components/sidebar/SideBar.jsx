import { FaHome, FaUser, FaCar, FaUserPlus } from "react-icons/fa";
import { AiFillSetting, AiFillFolderAdd } from "react-icons/ai";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "./sidebar.module.css";

const SideBar = () => {
  return (
    <div className={style["sidebar-wrapper"]}>
      <ul className={style["sidebar-list"]}>
        <li className={style["sidebar-item"]}>
          <Link className={style["sidebar-link"]} to="/home">
            <FaHome size={30} className={style["sidebar-icon"]} />
            <p className={style["sidebar-text"]}>Hjem</p>
          </Link>
        </li>

        <li className={style["sidebar-item"]}>
          <Link to="/persons" className={style["sidebar-link"]}>
            <FaUser size={30} className={style["sidebar-icon"]} />
            <p className={style["sidebar-text"]}>Personer</p>
          </Link>
        </li>

        <li className={style["sidebar-item"]}>
          <Link to="/addperson" className={style["sidebar-link"]}>
            <FaUserPlus size={30} className={style["sidebar-icon"]} />
            <p className={style["sidebar-text"]}>Legg til person</p>
          </Link>
        </li>

        <li className={style["sidebar-item"]}>
          <Link to="/cars" className={style["sidebar-link"]}>
            <FaCar size={30} className={style["sidebar-icon"]} />
            <p className={style["sidebar-text"]}>Biler</p>
          </Link>
        </li>

        <li className={style["sidebar-item"]}>
          <Link to="/addcar" className={style["sidebar-link"]}>
            <AiFillFolderAdd size={30} className={style["sidebar-icon"]} />
            <p className={style["sidebar-text"]}>Legg til bil</p>
          </Link>
        </li>

        <li className={style["sidebar-item"]}>
          <Link to="/" className={style["sidebar-link"]}>
            <MdAdminPanelSettings size={30} className={style["sidebar-icon"]} />
            <p className={style["sidebar-text"]}>Admin</p>
          </Link>
        </li>

        <li className={style["sidebar-item"]}>
          <Link to="/" className={style["sidebar-link"]}>
            <AiFillSetting size={30} className={style["sidebar-icon"]} />
            <p className={style["sidebar-text"]}>Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
