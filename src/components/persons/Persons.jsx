import useFetch from "../../hooks/useFetch";
import PersonCard from "../card/PersonCard";
import styles from "./person.module.css";
// import { useState, useEffect } from "react";

const Person = () => {
  const { carsData, personsData, loading, error } = useFetch(
    "http://194.32.107.29/GaAPI"
  );
  // const [userId, setUserId] = useState(null);
  // const [personData, setPersonData] = useState({});

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  let carsArray = [];
  carsArray.push(carsData);
  // carsData.filter((car) => {
  //   return filterCarId.push(car.id);
  // });

  // data.cars.filter((car) => car.id === id, {});

  // useEffect(() => {
  //   if (personsData) {
  //     const { persons } = personsData;
  //     const [person] = persons.filter((person) => person.id === userId);
  //     setPersonData(person);
  //   }
  // }, [personData]);

  return (
    <>
      <div className={styles["person-wrapper"]}>
        {personsData &&
          carsData &&
          personsData.map((value, index) => {
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
