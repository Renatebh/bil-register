import { useState, useEffect } from "react";
import styles from "./form.module.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

const Form = () => {
  const { personID } = useParams();
  const { data } = useFetch(`http://194.32.107.29/GaAPI/person/${personID}`);
  const [updatePerson, setUpdatePerson] = useState({});
  const [firstName, setFirstName] = useState({ firstName: "" });
  const [lastName, setLastName] = useState({ lastName: "" });
  const [age, setAge] = useState({ age: "" });

  const [carId, setCarId] = useState({ carsOwned: "" });
  const [postData, setPostData] = useState({});
  const joinedData = { ...firstName, ...lastName, ...age, ...carId };

  useEffect(() => {
    setPostData(joinedData);
  }, [carId]);

  const changeCarId = (carId) => {
    setCarId({ carsOwned: carId });
  };

  useEffect(() => {
    setUpdatePerson(data);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);
  }, [data]);

  const updatePersonData = () => {
    axios.put(`http://194.32.107.29/GaAPI/person/${personID}`, {
      firstName: firstName,
      lastName: lastName,
      age: age,
      ...postData
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
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="">Etternavn</label>
          <input
            type="text"
            name="lastName"
            placeholder={updatePerson.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="">Alder</label>
          <input
            type="number"
            name="age"
            placeholder={updatePerson.age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <label htmlFor="">Velg bil</label>
          <Dropdown changeCarId={changeCarId} />
          <input
            type="submit"
            value="Oppdater"
            className={styles["form-btn"]}
            onClick={updatePersonData}
          />
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
