import Navbar from "../components/nav/Navbar";
import UpdatePersonForm from "../components/form/UpdatePersonForm";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import PersonCard from "../components/card/PersonCard";

const UpdatePersonData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />

        <UpdatePersonForm value={id} />
        <PersonCard value={id} />
      </main>
    </>
  );
};

export default UpdatePersonData;
