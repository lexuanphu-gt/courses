import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./authentication/Login";
import  Register  from "./authentication/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
