import Navbar from "../components/nav/Navbar";
import UpdatePersonForm from "../components/form/UpdatePersonForm";
import PersonCard from "../components/card/PersonCard";
import SideBar from "../components/sidebar/SideBar";
import styles from "./updateData.module.css";

const UpdatePersonData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-container"]}>
        <SideBar />
        <div className={styles["form-container"]}>
          <UpdatePersonForm value={id} />
        </div>
        <div className={styles["data-container"]}>
          <PersonCard value={id} />
        </div>
      </main>
    </>
  );
};

export default UpdatePersonData;
