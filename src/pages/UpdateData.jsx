import Navbar from "../components/nav/Navbar";
import UpdateCarForm from "../components/form/UpdateCarForm";
import BigButtonsBox from "../components/buttons/BigButtonsBox";
import Card from "../components/card/Card";

const UpdateData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <BigButtonsBox />

        <UpdateCarForm value={id} />
        <Card value={id} />
      </main>
    </>
  );
};

export default UpdateData;
