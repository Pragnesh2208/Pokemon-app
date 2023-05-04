import { useState } from "react";
import "./App.css";
import { LoginComponent } from "./components/login/components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginComponent />
    </>
  );
}

export default App;
