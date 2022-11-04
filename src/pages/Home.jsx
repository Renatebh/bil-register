import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";
import Cars from "../components/cars/Car";
import Persons from "../components/persons/Persons";
import SideBar from "../components/sidebar/SideBar";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-wrapper"]}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles["cars-container"]}>
          <div className={styles["header-container"]}>
            <h3>Biler</h3>
          </div>
          <div className={styles["cars-list-container"]}>
            <Cars />
          </div>
        </div>
        <div className={styles["persons-container"]}>
          <div className={styles["header-container"]}>
            <h3>Personer</h3>
          </div>
          <div className={styles["persons-list-container"]}>
            <Persons />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
