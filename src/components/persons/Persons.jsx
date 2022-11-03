import useFetch from "../../hooks/useFetch";
import PersonCard from "../card/PersonCard";
import styles from "./person.module.css";

const Person = () => {
  const { personsData, carsData, loading, error } = useFetch(
    "http://194.32.107.29/GaAPI"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  console.log(carsData);
  console.log(personsData);
  return (
    <>
      <div className={styles["person-wrapper"]}>
        {personsData &&
          carsData &&
          personsData.map((value, index) => {
            return (
              <PersonCard
                key={index}
                id={value.id}
                firstName={value.firstName}
                lastName={value.lastName}
                age={value.age}
                carsOwned={value.carsOwned}
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
