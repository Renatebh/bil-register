import React, { useState, useRef } from "react";
import FormInput from "./Forminput";
import inputs from "./Inputs";
import styles from "../cars/car.module.css";
import axios from "axios";

const Form = () => {
  const [values, setValues] = useState({
    make: "",
    model: "",
    year: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const form = useRef();

  const sendData = () => {
    axios.post("http://194.32.107.29/GaAPI/car", {
      ...values,
    });
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <fieldset>
          <h3>Legg til bil</h3>
          {inputs.map((input) => {
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
