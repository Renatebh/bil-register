import React from "react";
import Navbar from "../components/nav/Navbar";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import AddPersonForm from "../components/form/AddPersonForm";
import PersonsList from "../components/persons/Persons";

const AddPerson = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />
        <AddPersonForm />
        <PersonsList />
      </main>
    </>
  );
};

export default AddPerson;
