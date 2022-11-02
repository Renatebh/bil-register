import useFetch from "../../hooks/useFetch";
import PersonCard from "../card/PersonCard";
import styles from "./person.module.css";
import axios from "axios";

const Person = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  // const getCars = () => {
  //   axios.get("http://194.32.107.29/GaAPI");
  // };
  // console.log(getCars);
  const carNames = () => {
    data.cars.map((car) => {
      const names = car.make;
      const models = car.model;
      const ids = car.id;
      console.log(names + models + ids);
    });
  };
  carNames();
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
