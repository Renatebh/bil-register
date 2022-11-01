import { useState, useContext, useEffect } from "react";
import FormInput from "./Forminput";
import inputs from "./Inputs";
import styles from "./form.module.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Form = (props) => {
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

  // console.log("Få se:", data);
  // console.log("values:", values);

  const updateData = () => {
    axios.put(`http://194.32.107.29/GaAPI/car/${carID}`, {
      make: make,
      model: model,
      year: year
    });
    alert("Data updated");
  };

  // const sendData = () => {
  //   axios.post("http://194.32.107.29/GaAPI/car", {
  //     ...values
  //   });
  //   alert("Ny bil er lagt til!");
  //   console.log("Car added");
  // };

  return (
    <div>
      <form>
        <fieldset>
          <h3>Oppdater bil</h3>
          {/* {inputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                className={styles["form-input"]}
              />
            );
          })} */}
          <input
            type="text"
            name="make"
            // value={make}
            placeholder={updateCar.make}
            onChange={(e) => setMake(e.target.value)}
          />

          <label htmlFor="">Model</label>
          <input
            type="text"
            name="model"
            // value={model}
            placeholder={updateCar.model}
            onChange={(e) => setModel(e.target.value)}
          />

          <label htmlFor="">Year</label>
          <input
            type="text"
            name="year"
            // value={year}
            placeholder={updateCar.year}
            onChange={(e) => setYear(e.target.value)}
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
