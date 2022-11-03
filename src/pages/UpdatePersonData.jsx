import Navbar from "../components/nav/Navbar";
import UpdatePersonForm from "../components/form/UpdatePersonForm";
import BigButtonsBox from "../components/buttons/BigButtonsBox";

const UpdatePersonData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />

        <UpdatePersonForm value={id} />
      </main>
    </>
  );
};

export default UpdatePersonData;
