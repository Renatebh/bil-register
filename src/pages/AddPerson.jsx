import React from "react";
import Navbar from "../components/nav/Navbar";
import AddPersonForm from "../components/form/AddPersonForm";
import Persons from "../components/persons/Persons";
import BigButtonsBox from "../components/buttons/BigButtonsBox";

const AddPerson = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />
        <div>
          <AddPersonForm />
        </div>
        <Persons />
      </main>
    </>
  );
};

export default AddPerson;
