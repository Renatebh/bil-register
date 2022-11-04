import Navbar from "../components/nav/Navbar";
import UpdateCarForm from "../components/form/UpdateCarForm";
import BigButtonsBox from "../components/buttons/BigButtonsBox";

const UpdateData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />

        <UpdateCarForm value={id} />
      </main>
    </>
  );
};

export default UpdateData;
