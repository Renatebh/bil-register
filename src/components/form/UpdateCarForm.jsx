import { useState, useEffect } from "react";
// import FormInput from "./Forminput";
// import inputs from "./Inputs";
// import styles from "./form.module.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Form = (e) => {
  const { carID } = useParams();
  const { data } = useFetch(`http://194.32.107.29/GaAPI/car/${carID}`);
  const [updateCar, setUpdateCar] = useState({});

  const [updateMake, setUpdateMake] = useState("");
  const [updateModel, setUpdateModel] = useState("");
  const [updateYear, setUpdateYear] = useState("");
  // console.log("Få se:", data);
  useEffect(() => {
    setUpdateCar(data);
  }, [data]);
  // const [values, setValues] = useState({
  //   make: data.make,
  //   model: data.model,
  //   year: data.year
  // });

  // console.log("data", data);
  console.log("id", data);
  // const [values, setValues] = useState(data);

  // console.log("values:" + values);

  // if (data) return data;

  // if (loading) return <h1>Loading...</h1>;
  // if (error) console.log(error);

  // const sendUpdateCar = () => {
  //   axios.put(`http://194.32.107.29/GaAPI/car/${carID}`, {});
  //   //  alert("Data updated");
  // };

  // const onChange = (e) => {
  //   setUpdateMake({ [e.target.name]: e.target.value });
  //   setUpdateModel({ [e.target.name]: e.target.value });
  //   setUpdateYear({ [e.target.name]: e.target.value });
  // };

  const sendData = () => {
    axios.put(`http://194.32.107.29/GaAPI/car/${carID}`, {
      make: updateMake,
      model: updateModel,
      year: updateYear
    });
    alert("Ny bil er lagt til!");
    console.log("Car added");
  };

  return (
    <div>
      <form>
        <fieldset>
          <h3>
            Oppdater {updateCar.make} {updateCar.model}
          </h3>
          <p>ID:{updateCar.id}</p>
          <label htmlFor="">Make</label>
          <input
            type="text"
            name="make"
            value={updateMake}
            // placeholder={updateCar.make}
            onChange={(e) => setUpdateMake(e.target.value)}
          />

          <label htmlFor="">Model</label>
          <input
            type="text"
            name="model"
            value={updateModel}
            // placeholder={updateCar.model}
            // onChange={onChange}
            onChange={(e) => setUpdateModel(e.target.value)}
          />

          <label htmlFor="">Year</label>
          <input
            type="text"
            name="year"
            value={updateYear}
            // placeholder={updateCar.year}
            // onChange={onChange}
            onChange={(e) => setUpdateYear(e.target.value)}
          />
          <input type="submit" value="Oppdater Bil" onClick={sendData} />
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
