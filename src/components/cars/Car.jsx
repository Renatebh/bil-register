import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import { useState, useEffect } from "react";

const Car = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div>
        <h1>Car</h1>
      </div>
      <div></div>
      {data.cars &&
        data.persons &&
        data.cars.map((index, value) => {
          return (
            <Card
              key={value}
              id={index.id}
              make={index.make}
              model={index.model}
              year={index.year}
            />
          );
        })}
    </>
  );
};

export default Car;
