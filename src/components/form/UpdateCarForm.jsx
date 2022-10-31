import { useState, useContext } from "react";
import FormInput from "./Forminput";
import inputs from "./Inputs";
import styles from "./form.module.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Form = () => {
  const { carID } = useParams();
  const { data } = useFetch(`http://194.32.107.29/GaAPI/car/${carID}`);
  const [car, setCar] = useState([data]);
  console.log("Få se:", data);

  const [values, setValues] = useState({
    make: data.make,
    model: data.model,
    year: data.year
  });

  // console.log("data", data);
  console.log("id", data);
  // const [values, setValues] = useState(data);

  console.log("values:" + values);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // if (data) return data;

  // if (loading) return <h1>Loading...</h1>;
  // if (error) console.log(error);

  const updateData = () => {
    axios.put(`http://194.32.107.29/GaAPI/car/${carID}`);
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
          {data &&
            car.map((car) =>
              inputs.map((input) => {
                return (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[car.name]}
                    onChange={onChange}
                    className={styles["form-input"]}
                  />
                );
              })
            )}
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
