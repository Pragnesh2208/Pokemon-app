import { Outlet } from "react-router-dom";
import "./Listing.component.scss";

function ListingComponent() {
  return (
    <div className="pokemon-list">
      <div className="pokemon-list__header">
        <h1>Welcome to Pokemon Application</h1>
      </div>
      <Outlet></Outlet>
      {/* <PokemonsInfoContext.Provider value={{ data: pokemonLists }}>
        <Outlet></Outlet>
      </PokemonsInfoContext.Provider> */}
    </div>
  );
}

export default ListingComponent;
