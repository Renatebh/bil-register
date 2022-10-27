import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  const params = useParams();

  console.log(params);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/id" element={<Home />} />
    </Routes>
  );
}

export default App;
