import Car from "../components/cars/Car";
import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-wrapper"]}>
        <h1>Home Page</h1>
        <div className={styles.cars}>
          <h3>Cars</h3>
          <Car />
        </div>
      </main>
    </>
  );
};

export default Home;
