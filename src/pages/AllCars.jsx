import CarList from "../components/cars/Car";
import Navbar from "../components/nav/Navbar";
import SideBar from "../components/sidebar/SideBar";
import styles from "./allCarsAndPersons.module.css";

const Cars = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-container"]}>
        <SideBar />
        <div className={styles["allCars-container"]}>
          <CarList />
        </div>
      </main>
    </>
  );
};

export default Cars;
