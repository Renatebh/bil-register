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
      <main className={styles["main-wrapper"]}>
        <BigButtonsBox />
        <AddCarForm />
        <CarList />
      </main>
    </>
  );
};

export default AddCar;
