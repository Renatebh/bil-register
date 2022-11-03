import useFetch from "../../hooks/useFetch";
import PersonCard from "../card/PersonCard";
import styles from "./person.module.css";
import axios from "axios";
import { useState } from "react";

const Person = () => {
  const { personsData, loading, error } = useFetch(
    "http://194.32.107.29/GaAPI"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div className={styles["person-wrapper"]}>
        {personsData &&
          personsData.map((index, value) => {
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
