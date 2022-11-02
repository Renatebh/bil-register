import React from "react";
import useFetch from "../../hooks/useFetch";
const Dropdown = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");
  console.log(data);
  console.log(data.cars);
  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);
  return (
    <>
      <select>
        <option value="">Choose a Car</option>
        {data.cars &&
          data.cars.map((index, value) => (
            <option value={index.make} key={index.id}>
              {index.make}
            </option>
          ))}
      </select>
    </>
  );
};

export default Dropdown;
