import React from "react";
import Person from "../components/persons/Persons";
import AddPersonForm from "../components/form/AddPersonForm";
import Car from "../components/cars/Car";
import AddCarForm from "../components/form/AddCarForm";

const AddData = () => {
  return (
    <>
      <div>
        <AddPersonForm />
      </div>
      <div>
        <AddCarForm />
      </div>
      <div>
        <Person />
      </div>
      <div>
        <Car />
      </div>
    </>
  );
};

export default AddData;
