import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import Cars from "../components/cars/Car";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-wrapper"]}>
        <BigButtonsBox />
        <div className={styles.cars}>
          <h3>Cars</h3>
          <Cars />
        </div>
      </main>
    </>
  );
};

export default Home;
