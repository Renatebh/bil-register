import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import AddCarForm from "../components/form/AddCarForm";
import CarList from "../components/cars/Car";
import styles from "./addCar.module.css";

const AddCar = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />
        <div className={styles["main-container"]}>
        <div className={styles["addCar-form-container"]}>
          <AddCarForm />
        </div>
        <div className={styles["carCards-container"]}>
          <CarList />
        </div>
        </div>
      </main>
    </>
  );
};

export default AddCar;
