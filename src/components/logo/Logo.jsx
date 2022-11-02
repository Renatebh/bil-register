import styles from "./logo.module.css";
import bilregisterLogo from "./bilregister_logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <p className={styles.logo}>
        <Link to="./home">
          <img
            src={bilregisterLogo}
            alt="Bilregister logo"
            className={styles["bilregister-logo"]}
          />
        </Link>
      </p>
    </>
  );
};

export default Logo;
