import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Searchbar = () => {
  const { data } = useFetch(`http://194.32.107.29/GaAPI`);
  console.log([data]);
  const [searchData, setSearchData] = useState("");

  const findData = (array, searchData) => {
    //   // console.log(
    //   // //   array.filter((el) => el.includes(searchData))
    //   //   //   data.filter(el),
    //   //   //   el.toLowerCase().includes(query.toLowerCase())
    //   // );
    console.log(
      "filtered results: ",
      array.map((element) => {
        return {
          ...element,
          cars: array.cars.filter((car) => car.includes(searchData))
        };
      })
    );
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
