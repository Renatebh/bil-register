import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Searchbar = () => {
  const { data } = useFetch(`http://194.32.107.29/GaAPI`);
  console.log([data]);
  const [searchData, setSearchData] = useState("");

  const findData = (array, searchData) => {
    const result = array
      .flatMap((item) => item.cars)
      .filter((item) => item.id === 31); //working with id number
    // reference: https://stackoverflow.com/questions/72348956/how-to-map-through-a-deeply-nested-array-of-objects
   
   
   // tried this but not working
       // .filter((item) => item.make.includes(searchData));
    console.log("result", result);

    const result2 = array.flatMap((item) => item.id === 1);
    console.log("result 2 :", result2);
  };

  const onChange = (e) => {
    // setSearchData({ [e.target.value] });
    setSearchData({ ...searchData, [e.target.name]: e.target.value });

    console.log("searchData", searchData);
    findData([data], searchData);
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
