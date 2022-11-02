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
        <table className={styles["card-info-container"]}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Merke</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.id}</td>
              <td>{props.make}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Model</th>
              <th>Årsmodell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.model}</td>
              <td>{props.year}</td>
            </tr>
          </tbody>
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
