import { useState, useEffect } from "react";
import styles from "./form.module.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Form = () => {
  const { carID } = useParams();
  const { data } = useFetch(`http://194.32.107.29/GaAPI/car/${carID}`);
  const [updateCar, setUpdateCar] = useState({});
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setUpdateCar(data);
    setMake(data.make);
    setModel(data.model);
    setYear(data.year);
  }, [data]);

  const updateData = () => {
    axios.put(`http://194.32.107.29/GaAPI/car/${carID}`, {
      make: make,
      model: model,
      year: year
    });
    alert("Data updated");
  };

  return (
    <div>
      <form className={styles["form-update"]}>
        <fieldset>
          <h3 className={styles["text-form"]}>Oppdater bil</h3>
          <label className={styles["label"]} htmlFor="">
            Merke
          </label>
          <input
            className={styles["form-input"]}
            type="text"
            name="make"
            placeholder={updateCar.make}
            onChange={(e) => setMake(e.target.value)}
          />
          <label className={styles["label"]} htmlFor="">
            Model
          </label>
          <input
            className={styles["form-input"]}
            type="text"
            name="model"
            placeholder={updateCar.model}
            onChange={(e) => setModel(e.target.value)}
          />
          <label className={styles["label"]} htmlFor="">
            Årsmodell
          </label>
          <input
            className={styles["form-input"]}
            type="number"
            name="year"
            placeholder={updateCar.year}
            onChange={(e) => setYear(e.target.valueAsNumber)}
          />
          <input
            type="submit"
            value="Oppdater"
            className={styles["form-btn"]}
            onClick={updateData}
          />
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
