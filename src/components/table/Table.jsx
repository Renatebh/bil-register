// import useFetch from "../../hooks/useFetch";
import styles from "./table.module.css";

const Table = ({ carsData, personsData, column }) => {

  return (
    <table className={styles["table"]}>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem key={index} item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {carsData &&
          personsData &&
          carsData.map((item, index) =>
            personsData.map((item, index) => (
              <TableRow key={index} item={item} column={column} />
            ))
          )}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      return <td>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);

export default Table;
