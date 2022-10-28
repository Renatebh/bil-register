import React from "react";
import Car from "../components/cars/Car";
import AddCarForm from "../components/form/AddCarForm"

const AddData = () => {
  return (
    <>
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
