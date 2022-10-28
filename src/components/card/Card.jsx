import styles from "./card.module.css";
import EditBtn from "../buttons/EditBtn";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <ul>
        <li>Id: {props.id}</li>
        <li>Merke: {props.make}</li>
        <li>Model: {props.model}</li>
        <li>Årsmodell: {props.year}</li>
      </ul>
      <div className={styles["btns-wrapper"]}>
        <EditBtn />
      </div>
    </div>
  );
};

export default Card;
