import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import axios from "axios";
import Car from "../cars/Car";

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
    <div className="card">
      <ul>
        <li>{props.id}</li>
        <li>{props.make}</li>
        <li>{props.model}</li>
        <li>{props.year}</li>
      </ul>
      <button onClick={() => deleteCar(props.id)}>Delete</button>
    </div>
  );
};

export default Card;
