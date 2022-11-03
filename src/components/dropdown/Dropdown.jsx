import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
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
  console.log([data]);
  // const carsAvailable = data.cars.map((car) => {
  //   return car.id !== data.persons.carsOwned;
  // });
  // console.log("carsAvailable", carsAvailable);
  return (
    <>
      <select onChange={handleChange}>
        <option value="">Choose a Car</option>
        {/* {carsAvailable &&
          carsAvailable.map((index, value) => (
            <option value={index.id} key={index.id}>
              {index.id}
              {index.make} {index.model}
            </option>
          ))} */}
        {data.cars &&
          data.cars.map((index, value) => (
            <option value={index.name} key={index.id}>
              {index.make} {index.model}
            </option>
          ))}
      </select>
    </>
  );
};

export default Dropdown;
