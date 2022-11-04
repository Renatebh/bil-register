import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import styles from "../form/form.module.css";

const Dropdown = ({ changeCarId }) => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");
  const [carSelected, setCarSelected] = useState([]);

  useEffect(() => {
    changeCarId(carSelected);
  }, [carSelected]);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  const handleChange = (e) => {
    setCarSelected(e.target.value);
  };
  // console.log([data]);

  return (
    <>
      <select className={styles.dropdown} onChange={handleChange}>
        <option value="">Choose a Car</option>
        {data.cars &&
          data.cars.map((index, value) => (
            <option value={[index.id]} key={index.id}>
              {index.id}
              {index.make} {index.model}
            </option>
          ))}
      </select>
    </>
  );
};

export default Dropdown;
