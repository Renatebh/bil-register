// import Car from "../components/cars/Car";
import useFetch from "../hooks/useFetch";
import styles from "./home.module.css";
import Navbar from "../components/nav/Navbar";
import Table from "../components/table/Table";
import { useState, useEffect } from "react";

const Home = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  const [dataTable, setDataTable] = useState();
  const [dataTableCars, setDataTableCars] = useState();
  const [dataTablePersons, setDataTablePersons] = useState();
  console.log(data);
  useEffect(() => {
    setDataTable([data]);
    setDataTableCars(dataTable.cars);
    setDataTablePersons(dataTable.persons);
  }, [data]);
  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  console.log(dataTable);
  const column = [
    { heading: "Id", value: `${dataTableCars.id}` },
    { heading: "Bilmerke", value: `${dataTableCars.make}` },
    { heading: "Model", value: `${dataTableCars.model}` },
    { heading: "Årsmodell", value: `${dataTableCars.year}` },
    { heading: "FirstName", value: `${dataTablePersons.firstName}` },
    { heading: "LastName", value: `${dataTablePersons.lastName}` },
    { heading: "Age", value: `${dataTablePersons.age}` },
    { heading: "Action", value: "" }
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-wrapper"]}>
        <h1>Home Page</h1>
        <Table data={dataTableCars} column={column} />
        {/* <div className={styles.cars}>
          <h3>Cars</h3>
          <Car />
        </div> */}
      </main>
    </>
  );
};

export default Home;
