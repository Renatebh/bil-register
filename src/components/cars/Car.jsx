import axios from "axios";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import Form from "../form/Form";

const Car = () => {
  const { data, loading, error } = useFetch("http://194.32.107.29/GaAPI/car/2");

  let info = [];
  info.push(data);

  if (loading) return <h1>Loading...</h1>;
  if (error) console.log(error);

  console.log("info", info);

  return (
    <>
      <div>
        <h1>Car</h1>
      </div>
      <div>
        <Form />
      </div>
      {info.map((index, value) => {
        return (
          <Card
            key={value}
            id={index.id}
            make={index.make}
            model={index.model}
            year={index.year}
          />
        );
      })}
    </>
  );
};

export default Car;
