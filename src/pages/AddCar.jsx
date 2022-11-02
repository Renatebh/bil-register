import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import AddCarForm from "../components/form/AddCarForm";
import CarList from "../components/cars/Car";

const AddCar = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />
        <AddCarForm />
        <CarList />
      </main>
    </>
  );
};

export default AddCar;
