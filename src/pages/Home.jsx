import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: car, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  console.log(car);

  return (
    <div>
      <h1>{car}</h1>
    </div>
  );
};

export default Home;
