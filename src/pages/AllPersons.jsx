import Navbar from "../components/nav/Navbar";

import PersonsList from "../components/persons/Persons";
import BigButtonsBox from "../components/buttons/BigButtonsBox";

const Persons = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />
        <PersonsList />
      </main>
    </>
  );
};

export default Persons;
