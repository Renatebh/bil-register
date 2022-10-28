import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
// import styles from "./car.module.css";

const Person = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div className={styles["#"]}>
        {data.persons &&
          data.persons.map((index, value) => {
            return (
              <Card
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
