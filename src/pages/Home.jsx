// import Car from "../components/cars/Car";
import useFetch from "../hooks/useFetch";
import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";
import Table from "../components/table/Table";
import { useState, useEffect } from "react";

const Home = () => {
  const { carsData, personsData, loading, error } = useFetch(
    "http://194.32.107.29/GaAPI"
  );
  const [tableData, setTableData] = useState();
  console.log(carsData);
  console.log(personsData);

  useEffect(() => {
    setTableData(carsData);
  }, [carsData]);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  const column = [
    { heading: "Id", value: 'dataCars.id' },
    { heading: "Bilmerke", value: 'dataCars.make' },
    { heading: "Model", value: 'dataCars.model' },
    { heading: "Årsmodell", value: 'dataCars.year' },
    { heading: "FirstName", value: 'dataPersons.firstName' },
    { heading: "LastName", value: 'dataPersons.lastName' },
    { heading: "Age", value: 'dataPersons.age' },
    { heading: "Action", value: "" }
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-wrapper"]}>
        <h1>Home Page</h1>
        <Table data={tableData} column={column} />
        {/* <div className={styles.cars}>
          <h3>Cars</h3>
          <Car />
        </div> */}
      </main>
    </>
  );
};

export default Home;
