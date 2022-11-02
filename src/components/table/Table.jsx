// import useFetch from "../../hooks/useFetch";
import styles from "./table.module.css";

const Table = ({ data, column }) => {
  return (
    <table className={styles["table"]}>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.cars &&
          data.persons &&
          data.cars.map((item, index) =>
            data.persons.map((item, index) => (
              <TableRow item={item} column={column} />
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
