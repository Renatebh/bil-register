import React from "react";
import Car from "../components/cars/Car";
import AddCarForm from "../components/form/AddCarForm";
import Navbar from "../components/nav/Navbar";

const AddData = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <AddCarForm />
      </div>
      <div>
        <Car />
      </div>
    </>
  );
};

export default AddData;
