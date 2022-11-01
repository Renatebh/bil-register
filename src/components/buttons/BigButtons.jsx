import styles from "./button.module.css";

const BigButtons = (props) => {
  return <button className={styles["big-btn"]}>{props.text}</button>;
};

export default BigButtons;
