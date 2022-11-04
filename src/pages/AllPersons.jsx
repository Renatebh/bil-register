import Navbar from "../components/nav/Navbar";
import PersonsList from "../components/persons/Persons";
import SideBar from "../components/sidebar/SideBar";
import styles from "./allCarsAndPersons.module.css";

const Persons = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-container"]}>
        <SideBar />
        <div className={styles["allPersons-container"]}>
          <PersonsList />
        </div>
      </main>
    </>
  );
};

export default Persons;
