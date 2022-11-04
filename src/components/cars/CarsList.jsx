import useFetch from "../../hooks/useFetch";
import styles from "./car.module.css";
import image from "../../components/card/car.jpg";
import { FaCar } from "react-icons/fa";

const CarsList = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);
  return (
    <>
      <div className={styles["car-tabel"]}>
        <ul className={styles["car-list-header"]}>
          <li className={styles["car-item-icon"]}>
            <FaCar size={20} />
          </li>
          <li className={styles["car-item-header"]}>ID</li>
          <li className={styles["car-item-header"]}>Merke</li>
          <li className={styles["car-item-header"]}>Modell</li>
          <li className={styles["car-item-header"]}>Årsmodell</li>
        </ul>
        <div className={styles["list-wrapper"]}>
          {data.cars &&
            data.cars.map((car) => {
              return (
                <ul key={car.id} className={styles["car-list"]}>
                  <li>
                    <img
                      className={styles["car-image"]}
                      src={image}
                      alt="Bildet av en Audi"
                    />
                  </li>
                  <li className={styles["car-item"]}> {car.id}</li>
                  <li className={styles["car-item"]}>{car.make}</li>
                  <li className={styles["car-item"]}>{car.model}</li>
                  <li className={styles["car-item"]}>{car.year}</li>
                </ul>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CarsList;
