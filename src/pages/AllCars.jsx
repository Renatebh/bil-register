import CarList from "../components/cars/Car";
import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";

const Cars = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />
        <CarList />
      </main>
    </>
  );
};

export default Cars;
