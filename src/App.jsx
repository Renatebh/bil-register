// import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddCar from "./pages/AddCar";
import UpdateData from "./pages/UpdateData";
import useFetch from "./hooks/useFetch";
import Car from "./components/cars/Car";
import Persons from "./components/persons/Persons";
import AddPerson from "./pages/AddPerson";

function App() {
  const { carID } = useParams();
  const params = useParams();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cars" element={<Car />} />
      <Route path="/persons" element={<Persons />} />
      <Route path="/addCar" element={<AddCar />} />
      <Route path="/addPerson" element={<AddPerson />} />
      <Route path="/updateData/:carID" element={<UpdateData />} />
    </Routes>
  );
}

export default App;
