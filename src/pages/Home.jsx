import Car from "../components/cars/Car";
import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";
import BigButtons from "../components/buttons/BigButtons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-wrapper"]}>
        <div>
          <Link to="/cars" className={styles["link-item"]}>
            <BigButtons text={"Se alle biler"} />
          </Link>
          <Link to="/persons" className={styles["link-item"]}>
            <BigButtons text={"Se alle personer"} />
          </Link>
          <Link to="/addCar" className={styles["link-item"]}>
            <BigButtons text={"Legg til ny bil"} />
          </Link>
          <Link to="/addPerson" className={styles["link-item"]}>
            <BigButtons text={"Legg til ny person"} />
          </Link>
        </div>
        <h1>Cars with owner list...</h1>
        <div className={styles.cars}>
          <h3>Cars</h3>
          <Car />
        </div>
      </main>
    </>
  );
};

export default Home;
