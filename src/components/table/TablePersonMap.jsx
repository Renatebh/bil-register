import React from "react";
import useFetch from "../../hooks/useFetch";

const TablePersonMap = () => {
  const { carsData, personsData } = useFetch("http://194.32.107.29/GaAPI");
  console.log(personsData);

  return (
    <div>
      {personsData.map((person) => {
        return (
          <>
            <tr>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
              <td>{person.carsOwned}</td>
            </tr>
          </>
        );
      })}
    </div>
  );
};

export default TablePersonMap;
