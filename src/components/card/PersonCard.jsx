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
    navigate(`/updateData/${id}`);
  };

  const getUpdatedData = () => {
    window.location.reload();
  };

  return (
    <div className={styles.card}>
      <img src={picture} alt="Dawood" className={styles["person-image"]} />
      <ul>
        <li>Id: {props.id}</li>
        <li>FirstName: {props.firstName}</li>
        <li>LastName: {props.lastName}</li>
        <li>Age: {props.age}</li>
        <li>carsOwned: {props.carsOwned}</li>
      </ul>
      <div className={styles["button-container"]}>
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
