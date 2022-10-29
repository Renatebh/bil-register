// import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddData from "./pages/AddData";

function App() {
  const params = useParams();

  console.log(params);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addData" element={<AddData />} />
    </Routes>
  );
}

export default App;
