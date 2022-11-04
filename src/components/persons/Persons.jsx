import useFetch from "../../hooks/useFetch";
import PersonCard from "../card/PersonCard";
import styles from "./person.module.css";

const Person = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div className={styles["person-wrapper"]}>
        {data.persons &&
          data.persons.map((person, index) => {
            return (
              <PersonCard
                key={index}
                id={person.id}
                firstName={person.firstName}
                lastName={person.lastName}
                age={person.age}
                carsOwned={data.cars.map((car) => {
                  if (car.id === parseInt(person.carsOwned)) {
                    return (
                      <div className={styles["cars-owned"]} key={car.id}>
                        <p>{car.make}</p>
                        <p>{car.model}</p>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
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
