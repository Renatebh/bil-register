import { useState, useEffect } from "react";
import { useFetch } from "../components/Fetch/useFetch";

const Home = () => {
  const { info, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) return console.log(error);

  return (
    <>
      {info.cars &&
        info.cars.map((car, index) => {
          return (
            <ul>
              <li>{car.id}</li>
              <li>{car.model}</li>
              <li>{car.make}</li>
              <li>{car.year}</li>
            </ul>
          );
        })}
    </>
  );
};

export default Home;
