import { InformationEvent } from "http";
import { useState, useEffect } from "react";
import { useFetch, BASE_URL } from "../components/Fetch/useFetch";

interface CarsType {
  id: number;
  model: string;
  make: string;
  year: number;
}

const Home = () => {
  const { info, loading, error } = useFetch(`${BASE_URL}`);
  // const [allCars, setAllCars] = useState<CarsType[]>([info.cars]);

  console.log(info);
  // setAllCars(info);

  // useFetch(BASE_URL);
  // console.log(allCars);
  // console.log(data);

  return (
    <>
      {/* <button onClick={useFetch}>Klikk her</button> */}
      {/* {allCars.map((props, index) => { */}
        {/* return ( */}
          <ul>
            <li>{info?.cars}</li>
            {/* <li>{props.model}</li> */}
            {/* <li>{props.make}</li> */}
            {/* <li>{props.year}</li> */}
          </ul>
        {/* ); */}
      {/* })} */}
    </>
  );
};

export default Home;
