import useFetch from "../../hooks/useFetch";
import PersonCard from "../card/PersonCard";
import styles from "./person.module.css";
import axios from "axios";
import { useState } from "react";

const Person = () => {
  const { data, carsData, loading, error } = useFetch(
    "http://194.32.107.29/GaAPI"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  console.log(carsData);
  // const carName = carsData.filter((car) => {
  //   return car.id == index.carsOwned ? car.make : car.id;
  // });
  return (
    <>
      <div className={styles["person-wrapper"]}>
        {data.persons &&
          data.persons.map((index, value) => {
            return (
              <PersonCard
                key={value}
                id={index.id}
                firstName={index.firstName}
                lastName={index.lastName}
                age={index.age}
                carsOwned={index.carsOwned}
              />
            );
          })}
      </div>
    </>
  );
};

export default Person;
// carsData.filter((car) => {
// return car.id == index.carsOwned ? car.make : car.id;
