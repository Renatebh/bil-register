// import { createContext } from "react";
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
        <table className={styles["card-info-container"]}>
          <tr>
            <th>ID:</th>
            <td>{props.id}</td>
          </tr>
          <tr>
            <th>Merke:</th>
            <td>{props.make}</td>
          </tr>
          <tr>
            <th>Model:</th>
            <td>{props.model}</td>
          </tr>
          <tr>
            <th>Årsmodell:</th>
            <td>{props.year}</td>
          </tr>
        </table>
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
