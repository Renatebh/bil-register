import Navbar from "../components/nav/Navbar";
import UpdateCarForm from "../components/form/UpdateCarForm";
import Card from "../components/card/Card";
import SideBar from "../components/sidebar/SideBar";

const UpdateData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <SideBar />
        <UpdateCarForm value={id} />
        <Card value={id} />
      </main>
    </>
  );
};

export default UpdateData;
