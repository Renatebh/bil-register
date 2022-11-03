// import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import AddCar from "./pages/AddCar";
import Persons from "./pages/Persons";
import AddPerson from "./pages/AddPerson";
import UpdateData from "./pages/UpdateData";

function App() {
  // const { carID } = useParams();
  // const params = useParams();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/persons" element={<Persons />} />
      <Route path="/addPerson" element={<AddPerson />} />
      <Route path="/addCar" element={<AddCar />} />
      <Route path="/updateData/:carID" element={<UpdateData />} />
    </Routes>
  );
}

export default App;
