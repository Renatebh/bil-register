// import Car from "../components/cars/Car";
import useFetch from "../hooks/useFetch";
import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";
import Table from "../components/table/Table";
import { useState, useEffect } from "react";
import TablePersonMap from "../components/table/TablePersonMap";

const Home = () => {
  const { carsData, personsData, loading, error } = useFetch(
    "http://194.32.107.29/GaAPI"
  );
  const [tableData, setTableData] = useState([]);
  console.log(personsData);
  console.log(tableData);

  useEffect(() => {
    setTableData(carsData);
  }, [carsData]);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  const column = [
    { heading: "Id", value: 'id' },
    { heading: "Bilmerke", value: 'make' },
    { heading: "Model", value: 'model' },
    { heading: "Årsmodell", value: 'year' },
    { heading: "FirstName", value: 'firstName' },
    { heading: "LastName", value: 'lastName' },
    { heading: "Age", value: 'age' },
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
        <TablePersonMap/>
      </main>
    </>
  );
};

export default Home;
