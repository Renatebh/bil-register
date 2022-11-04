import Navbar from "../components/nav/Navbar";
import UpdateCarForm from "../components/form/UpdateCarForm";
import SideBar from "../components/sidebar/SideBar";
import styles from "./updateData.module.css";

const UpdateData = (id) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-container"]}>
        <SideBar />
        <div className={styles["form-container"]}>
          <UpdateCarForm value={id} />
        </div>
      </main>
    </>
  );
};

export default UpdateData;
