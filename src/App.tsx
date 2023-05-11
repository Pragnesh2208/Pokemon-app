import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { UserInfoContextProvider } from "./Context/UserInfoContext";
import GuardRouteComponent from "./routes/GuardedRoute";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <UserInfoContextProvider>
          <GuardRouteComponent></GuardRouteComponent>
        </UserInfoContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
