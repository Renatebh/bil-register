import { createContext } from "react";
import axios from "axios";
import styles from "./card.module.css";

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
    <div className={styles.card}>
      <ul>
        <li>Id: {props.id}</li>
        <li>Merke: {props.make}</li>
        <li>Model: {props.model}</li>
        <li>Årsmodell: {props.year}</li>
      </ul>
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
  );
};

export default Card;
