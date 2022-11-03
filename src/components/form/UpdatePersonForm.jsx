import { useState, useEffect } from "react";
import styles from "./form.module.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Form = () => {
  const { personID } = useParams();
  const { data } = useFetch(`http://194.32.107.29/GaAPI/car/${personID}`);
  const [updatePerson, setUpdatePerson] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [carsOwned, setCarsOwned] = useState("");

  useEffect(() => {
    setUpdatePerson(data);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);
    setCarsOwned(data.carsOwned);
  }, [data]);

  const updateData = () => {
    axios.put(`http://194.32.107.29/GaAPI/car/${personID}`, {
      firstName: firstName,
      lastName: lastName,
      age: age,
      carsOwned: carsOwned
    });
    alert("Data updated");
  };

  return (
    <div>
      <form>
        <fieldset>
          <h3>Oppdater person</h3>
          <label htmlFor="">Fornavn</label>
          <input
            type="text"
            name="firstName"
            placeholder={updatePerson.firstName}
            onChange={(e) => setMake(e.target.value)}
          />
          <label htmlFor="">Etternavn</label>
          <input
            type="text"
            name="lastName"
            placeholder={updatePerson.lastName}
            onChange={(e) => setModel(e.target.value)}
          />
          <label htmlFor="">Alder</label>
          <input
            type="number"
            name="age"
            placeholder={updatePerson.age}
            onChange={(e) => setYear(e.target.valueAsNumber)}
          />
          <label htmlFor="">carsOwned</label>
          <input
            type="text"
            name="carsOwned"
            placeholder={updatePerson.carsOwned}
            onChange={(e) => setMake(e.target.value)}
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
