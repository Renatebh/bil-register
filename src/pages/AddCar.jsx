import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import AddCarForm from "../components/form/AddCarForm";
import CarsList from "../components/cars/CarsList";
import style from "./addCar.module.css";
import SideBar from "../components/sidebar/SideBar";

const AddCar = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={style.wrapper}>
        <div className={style.bigButtonsBox}>
          <BigButtonsBox />
        </div>
        <div className={style.sidebar}>
          <SideBar />
        </div>
        <div className={style.addCarForm}>
          <AddCarForm />
        </div>
        <div className={style.carsList}>
          <CarsList />
        </div>
      </main>
    </>
  );
};

export default AddCar;
