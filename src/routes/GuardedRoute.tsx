import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { userInfoContext } from "../Context/UserInfoContext";
import LoginComponent from "../components";
import ListingComponent from "../components/ListingComponent/Listing.component";
import PokemonDetailsComponent from "../components/ListingComponent/Pokemon-details/PokemonDetails.component";
import PokemonListingComponent from "../components/ListingComponent/Pokemon-listing/PokemonListing.component";
import RegisterComponent from "../components/RegisterComponent/Register.component";

function GuardRouteComponent() {
  const userToken = useContext(userInfoContext);
  const [isLoggedIn, updateLogin] = useState(userToken?.state);

  useEffect(() => {
    updateLogin(userToken?.state);
  }, [userToken]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/list" /> : <Navigate to="/login" />
        }
      ></Route>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/list" />
          ) : (
            <LoginComponent
              updateLogin={(newToken: boolean) => {
                updateLogin(newToken);
              }}
            ></LoginComponent>
          )
        }
      ></Route>
      <Route
        path="/register"
        element={
          isLoggedIn ? (
            <Navigate to="/list" />
          ) : (
            <RegisterComponent></RegisterComponent>
          )
        }
      ></Route>
      <Route
        path="/list"
        element={
          isLoggedIn ? (
            <ListingComponent></ListingComponent>
          ) : (
            <Navigate to="/login" />
          )
        }
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
      <Route path="*" element={<Navigate to="/login" />}></Route>
    </Routes>
  );
}

export default GuardRouteComponent;
