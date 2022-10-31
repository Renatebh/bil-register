// import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddData from "./pages/AddData";
import UpdateData from "./pages/UpdateData";
import useFetch from "./hooks/useFetch";

function App() {
  const { carID } = useParams();
  const { data, loading, error } = useFetch(
    `http://194.32.107.29/GaAPI/car/${carID}`
  );
  const params = useParams();
  // props.id = useParams();
  console.log(params);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addData" element={<AddData />} />
      <Route path="/updateData/:carID" element={<UpdateData />} />
    </Routes>
  );
}

export default App;
