import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Searchbar = () => {
  const { data } = useFetch(`http://194.32.107.29/GaAPI`);
  console.log([data]);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    console.log("searchData", searchData);
  }, [searchData]);

  const onChange = (e) => {
    setSearchData(e.target.value);
    console.log("searchData", searchData);
    findData([data], searchData);
  };

  const findData = (array, searchData) => {
    console.log("searchdata", searchData);
    const result = array
      .flatMap((item) => item.cars)
      // .filter((item) => item.make == searchData);
      .filter((item) => item.make.includes(searchData));
    //working with id number
    // reference: https://stackoverflow.com/questions/72348956/how-to-map-through-a-deeply-nested-array-of-objects

    console.log("result", result);
  };

  return (
    <div>
      <input placeholder="Search here " onChange={onChange}></input>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul> */}
      {/* <div>{searchData}</div> */}
    </div>
  );
};

export default Searchbar;
