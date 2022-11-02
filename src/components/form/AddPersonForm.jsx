import { useEffect, useState } from "react";
import FormInput from "./Forminput";
import Dropdown from "../dropdown/Dropdown";
import inputsPersons from "./InputsPersons";
import styles from "./form.module.css";
import axios from "axios";

const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: ""
  });

  const [carId, setCarId] = useState({ carsOwned: "" });
  const [postData, setPostData] = useState({});
  useEffect(() => {
    console.log("parent: " + carId);
    setPostData(jointData);
  }, [carId]);

  const changeCarId = (carId) => {
    setCarId({ carsOwned: carId });
    // console.log("parent: " + carId);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const jointData = { ...values, ...carId };
  console.log("joint", jointData);

  console.log("postdata", postData);
  const sendData = () => {
    setPostData(jointData);
    console.log("postdata", postData);
    axios.post("http://194.32.107.29/GaAPI/person", {
      postData
    });
    // console.log("posted data", ...postData);
    alert("Ny person er registrert!");
    console.log("Person er lagt til");
  };

  const getCars = () => {
    axios.get("http://194.32.107.29/GaAPI");
  };
  console.log(getCars);

  return (
    <div>
      <form>
        <fieldset>
          <h3>Registrer ny person</h3>
          {inputsPersons.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                className={styles["form-input"]}
              />
            );
          })}

          <Dropdown changeCarId={changeCarId} />
          <input
            type="submit"
            value="Legg til"
            className={styles["form-btn"]}
            onClick={sendData}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
