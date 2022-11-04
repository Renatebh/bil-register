import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import styles from "../form/form.module.css";

const Dropdown = ({ changeCarId }) => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");
  const [carSelected, setCarSelected] = useState([]);

  // Når vi legger inn changeCarId så får vi infinite loop
  useEffect(() => {
    changeCarId(carSelected);
  }, [carSelected]);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  const handleChange = (e) => {
    setCarSelected(e.target.value);
  };

  return (
    <>
      <select className={styles.dropdown} onChange={handleChange}>
        <option value="">Choose a Car</option>
        {data.cars &&
          data.cars.map((car) => (
            <option value={[car.id]} key={car.id}>
              {car.id}
              {car.make} {car.model}
            </option>
          ))}
      </select>
    </>
  );
};

export default Dropdown;
