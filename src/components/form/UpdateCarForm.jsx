import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Form = (e) => {
  const { carID } = useParams();
  const { data } = useFetch(`http://194.32.107.29/GaAPI/car/${carID}`);
  const [car, setCar] = useState({});
  const [updateMake, setUpdateMake] = useState("");
  const [updateModel, setUpdateModel] = useState("");
  const [updateYear, setUpdateYear] = useState("");

  useEffect(() => {
    setCar(data);
    setUpdateMake(data.make);
    setUpdateModel(data.model);
    setUpdateYear(data.year);
  }, [data]);

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
            Oppdater {car.make} {car.model}
          </h3>
          <p>ID:{car.id}</p>
          <label htmlFor="">Make</label>
          <input
            type="text"
            name="make"
            placeholder={car.make}
            onChange={(e) => setUpdateMake(e.target.value)}
          />

          <label htmlFor="">Model</label>
          <input
            type="text"
            name="model"
            placeholder={car.model}
            onChange={(e) => setUpdateModel(e.target.value)}
          />

          <label htmlFor="">Year</label>
          <input
            type="text"
            name="year"
            placeholder={car.year}
            onChange={(e) => setUpdateYear(e.target.value)}
          />
          <input type="submit" value="Oppdater Bil" onClick={sendData} />
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
