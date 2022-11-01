import React from "react";
import BigButtons from "./BigButtons";
import { Link } from "react-router-dom";
import styles from "./button.module.css";

const BigButtonsBox = () => {
  return (
    <div className={styles["button-wrapper"]}>
      <Link to="/cars" className={styles["button-link"]}>
        <BigButtons text={"Se alle biler"} />
      </Link>
      <Link to="/persons" className={styles["button-link"]}>
        <BigButtons text={"Se alle personer"} />
      </Link>
      <Link to="/addCar" className={styles["button-link"]}>
        <BigButtons text={"Legg til ny bil"} />
      </Link>
      <Link to="/addPerson" className={styles["button-link"]}>
        <BigButtons text={"Legg til ny person"} />
      </Link>
    </div>
  );
};

export default BigButtonsBox;
