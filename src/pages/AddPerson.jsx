import Navbar from "../components/nav/Navbar";
import AddPersonForm from "../components/form/AddPersonForm";
import PersonsList from "../components/persons/PersonsList";
import style from "./addPerson.module.css";
import SideBar from "../components/sidebar/SideBar";

const AddPerson = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={style.wrapper}>
        <div className={style.sidebar}>
          <SideBar />
        </div>
        <div className={style.addPersonForm}>
          <AddPersonForm />
        </div>
        <div className={style.personsList}>
          <PersonsList />
        </div>
      </main>
    </>
  );
};

export default AddPerson;
