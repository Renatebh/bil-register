import Navbar from "../components/nav/Navbar";
import UpdatePersonForm from "../components/form/UpdatePersonForm";
import PersonCard from "../components/card/PersonCard";
import SideBar from "../components/sidebar/SideBar";

const UpdatePersonData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <SideBar />
        <UpdatePersonForm value={id} />
        <PersonCard value={id} />
      </main>
    </>
  );
};

export default UpdatePersonData;
