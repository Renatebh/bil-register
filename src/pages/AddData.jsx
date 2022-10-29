import React from "react";
import Person from "../components/persons/Persons";
import AddPersonForm from "../components/form/AddPersonForm";
import Car from "../components/cars/Car";
import AddCarForm from "../components/form/AddCarForm";

import Navbar from "../components/nav/Navbar";

const AddData = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AddCarForm />
        <div>
          <AddPersonForm />
        </div>
        <div>
          <AddCarForm />
        </div>
        <div>
          <Person />
        </div>
        <Car />
      </main>
    </>
  );
};

export default AddData;
