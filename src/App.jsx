import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cars from "./pages/AllCars";
import AddCar from "./pages/AddCar";
import Persons from "./pages/AllPersons";
import AddPerson from "./pages/AddPerson";
import UpdateData from "./pages/UpdateData";
import UpdatePersonData from "./pages/UpdatePersonData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/persons" element={<Persons />} />
      <Route path="/addPerson" element={<AddPerson />} />
      <Route path="/addCar" element={<AddCar />} />
      <Route path="/updateData/:carID" element={<UpdateData />} />
      <Route
        path="/updatePersonData/:personID"
        element={<UpdatePersonData />}
      />
    </Routes>
  );
}

export default App;
