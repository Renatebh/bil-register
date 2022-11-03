import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./card.module.css";
import picture from "../card/dawood.jpg";

const Card = (props) => {
  const navigate = useNavigate();

  const deletePerson = (id) => {
    axios.delete(`http://194.32.107.29/GaAPI/person/${id}`);
    alert(id);
  };

  const updatePerson = (id) => {
    navigate(`/updatePersonData/${id}`);
  };

  const getUpdatedData = () => {
    window.location.reload();
  };

  return (
    <div className={styles["persons-card"]}>
      <div className={styles["image-container"]}>
        <img src={picture} alt="Dawood" />
      </div>
      <ul className={styles["person-info"]}>
        <li>Id: {props.id}</li>
        <li>FirstName: {props.firstName}</li>
        <li>LastName: {props.lastName}</li>
        <li>Age: {props.age}</li>
        <li>carsOwned: {props.carsOwned}</li>
      </ul>
      <div className={styles["button-container-persons"]}>
        <button
          onClick={() => {
            deletePerson(props.id);
            getUpdatedData();
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            updatePerson(props.id);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Card;
