import React from "react";
import Navbar from "../components/nav/Navbar";
import AddPersonForm from "../components/form/AddPersonForm"
import Persons from "../components/persons/Persons";

const AddPerson = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <AddPersonForm />
        </div>
        <Persons />
      </main>
    </>
  );
};

export default AddPerson