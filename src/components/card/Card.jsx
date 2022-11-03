import axios from "axios";
import styles from "./card.module.css";
import picture from "../card/car.jpg";

import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate();

  const deleteCar = (id) => {
    axios.delete(`http://194.32.107.29/GaAPI/car/${id}`);
    alert(id);
  };

  const updateCar = (id) => {
    navigate(`/updateData/${id}`);
  };

  const getUpdatedData = () => {
    window.location.reload();
  };

  return (
    <>
      <div className={styles.card}>
        <img
          src={picture}
          alt="A black Audi car"
          className={styles["car-image"]}
        />
        <ul className={styles["card-info-container"]}>
          <div className={styles["info-seperator"]}>
            <li>Id: {props.id}</li>
            <hr />
            <li>Merke: {props.make}</li>
          </div>
          <hr className={styles["middle-line"]} />
          <div className={styles["info-seperator"]}>
            <li>Model: {props.model}</li>
            <hr />
            <li>Årsmodell: {props.year}</li>
          </div>
        </ul>
        <div className={styles["button-container"]}>
          <button
            onClick={() => {
              deleteCar(props.id);
              getUpdatedData(props.id);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              updateCar(props.id);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
