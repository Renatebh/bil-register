import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Searchbar = () => {
  const { data } = useFetch(`http://194.32.107.29/GaAPI`);
  console.log([data]);
  const [searchData, setSearchData] = useState("");

  const findData = (props, searchData) => {
    console.log(
      props.car.filter((el) => el.includes(searchData))
      //   data.filter(el),
      //   el.toLowerCase().includes(query.toLowerCase())
    );
  };

  const onChange = (e) => {
    // setSearchData({ [e.target.value] });
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
    findData(data, searchData);
    console.log("searchData", searchData);
  };
  return (
    <div>
      <input placeholder="Search here " onChange={onChange}></input>
      {/* <div>{searchData}</div> */}
    </div>
  );
};

export default Searchbar;
