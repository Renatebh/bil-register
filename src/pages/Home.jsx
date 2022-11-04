import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import Cars from "../components/cars/Car";
import Persons from "../components/persons/Persons";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
        <BigButtonsBox />
      <main className={styles["main-wrapper"]}>
        <div className={styles["cars-container"]}>
          <h3>Cars</h3>
          <Cars />
        </div>
        <div className={styles["persons-container"]}>
          <h3>Personer</h3>
          <Persons />
        </div>
      </main>
    </>
  );
};

export default Home;
