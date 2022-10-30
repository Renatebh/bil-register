// import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddData from "./pages/AddData";
import UpdateData from "./pages/UpdateData";

function App() {
  const params = useParams();

  console.log(params);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addData" element={<AddData />} />
      <Route path="/updateData" element={<UpdateData />} />
    </Routes>
  );
}

export default App;
