import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./person.module.css";
import image from "../../image/dawood.jpg";
import { FaUser } from "react-icons/fa";

const PersonsList = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);
  return (
    <>
      <div className={styles["person-tabel"]}>
        <ul className={styles["person-list-header"]}>
          <li className={styles["person-item-icon"]}>
            <FaUser size={20} />
          </li>
          <li className={styles["person-item-header"]}>ID</li>
          <li className={styles["person-item-header"]}>Navn</li>
          <li className={styles["person-item-header"]}>Etternavn</li>
          <li className={styles["person-item-header"]}>Bil</li>
        </ul>
        <div className={styles["list-wrapper"]}>
          {data.persons &&
            data.persons.map((person) => {
              return (
                <ul key={person.id} className={styles["person-list"]}>
                  <li>
                    <img
                      className={styles["person-image"]}
                      src={image}
                      alt="Bildet av en person"
                    />
                  </li>
                  <li className={styles["person-item"]}> {person.id}</li>
                  <li className={styles["person-item"]}>{person.firstName}</li>
                  <li className={styles["person-item"]}>{person.lastName}</li>
                  <li className={styles["person-item"]}>
                    {data.cars &&
                      data.cars.map((car, index) => {
                        if (index.id === parseInt(person.carsOwned)) {
                          return (
                            <div key={index.id}>
                              <p className={styles["cars-owned"]}>{car.make}</p>
                              <p>{car.model}</p>
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}
                  </li>
                </ul>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PersonsList;
