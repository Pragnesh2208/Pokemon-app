import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import ListingComponent from "./components/ListingComponent/Listing.component";
import PokemonDetailsComponent from "./components/ListingComponent/Pokemon-details/PokemonDetails.component";
import PokemonListingComponent from "./components/ListingComponent/Pokemon-listing/PokemonListing.component";
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
          <Route
            path="/list"
            element={<ListingComponent></ListingComponent>}
            children={
              <>
                <Route
                  path=""
                  element={<PokemonListingComponent></PokemonListingComponent>}
                ></Route>
                <Route
                  path=":id"
                  element={<PokemonDetailsComponent></PokemonDetailsComponent>}
                ></Route>
              </>
            }
          ></Route>
          <Route path="/**" element={<Navigate to="/login" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
