import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import RegisterComponent from "./components/RegisterComponent/Register.component";
import LoginComponent from "./components/index";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route
            path="/login"
            element={<LoginComponent></LoginComponent>}
          ></Route>
          <Route
            path="/register"
            element={<RegisterComponent></RegisterComponent>}
          ></Route>
          <Route path="/**" element={<Navigate to="/login" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
