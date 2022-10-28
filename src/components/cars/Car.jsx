import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import styles from "./car.module.css";

const Car = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  return (
    <>
      <div className={styles["car-wrapper"]}>
        {data.cars &&
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
      </div>
    </>
  );
};

export default Car;
