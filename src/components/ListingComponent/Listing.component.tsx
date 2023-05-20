import { Outlet, useNavigate } from "react-router-dom";
import "./Listing.component.scss";
import { removeToken } from "../../APIs/Storage.api";
import { useContext, useState } from "react";
import { UserInfoContextProvider, userInfoContext } from "../../Context/UserInfoContext";

function ListingComponent() {
  const [logedIn , setLogedIn] = useState(true);
  const {disPatch} = useContext(userInfoContext);
  return (
    <div className="pokemon-list">
      <div className="pokemon-list__header">
        <h1>Welcome to Pokemon Application</h1>
        <button type="button" onClick={() => {removeToken();
        disPatch(false);
      }}
        >Logout</button>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default ListingComponent;
