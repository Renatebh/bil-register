import { useState, useEffect } from "react";
import styles from "./form.module.css";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

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
    navigateToPerson();
  };

  const navigateToPerson = () => {
    navigate("/persons");
  };

  return (
    <div>
      <form className={styles["form-update"]}>
        <fieldset>
          <h3 className={styles["text-form"]}>Oppdater person</h3>
          <label className={styles["label"]} htmlFor="">
            Fornavn
          </label>
          <input
            className={styles["form-input"]}
            type="text"
            name="firstName"
            placeholder={updatePerson.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className={styles["label"]} htmlFor="">
            Etternavn
          </label>
          <input
            className={styles["form-input"]}
            type="text"
            name="lastName"
            placeholder={updatePerson.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className={styles["label"]} htmlFor="">
            Alder
          </label>
          <input
            className={styles["form-input"]}
            type="number"
            name="age"
            placeholder={updatePerson.age}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <label className={styles["label"]} htmlFor="">
            Velg bil
          </label>
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
