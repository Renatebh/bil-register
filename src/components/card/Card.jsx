import { useEffect } from "react";
import axios from "axios";
import styles from "./card.module.css";

const Card = (props) => {

  const deleteCar = (id) => {
    axios.delete(`http://194.32.107.29/GaAPI/car/${id}`);
    alert(id);
  };

  // const getUpdatedData = () => {};

  useEffect(() => {
    // window.location.reload();
  });

  return (
    <div className={styles.card}>
      <ul>
        <li>Id: {props.id}</li>
        <li>Merke: {props.make}</li>
        <li>Model: {props.model}</li>
        <li>Årsmodell: {props.year}</li>
      </ul>
      <button onClick={() => deleteCar(props.id)}>Delete</button>
    </div>
  );
};

export default Card;
