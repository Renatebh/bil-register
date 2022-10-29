import style from "./logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <p className={style.logo}>
        <Link to="./home">BIL-REGISTER.</Link>
      </p>
    </>
  );
};

export default Logo;
