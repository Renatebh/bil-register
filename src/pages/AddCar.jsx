import React from "react";
// import Person from "../components/persons/Persons";
// import AddPersonForm from "../components/form/AddPersonForm";
import Car from "../components/cars/Car";
import AddCarForm from "../components/form/AddCarForm";
import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";

const AddData = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />
        <div>
          <AddCarForm />
        </div>
        <Car />
      </main>
    </>
  );
};

export default AddData;
