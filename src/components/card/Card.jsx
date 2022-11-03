import { createContext } from "react";
import axios from "axios";
import styles from "./card.module.css";
import picture from "../card/car.jpg";


import { useNavigate, useParams } from "react-router-dom";
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
        <div>
          <li>Id: {props.id}</li>
          <hr />
          <li>Merke: {props.make}</li>
        </div>
        <hr className={styles["middle-line"]} />
        <div>
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
        {/* update car data */}
        <button
          onClick={() => {
            updateCar(props.id);
            // getUpdatedData();
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
