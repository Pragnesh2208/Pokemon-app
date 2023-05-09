import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getPokemons } from "../../APIs/PokemonInfo.api";
import { PokemonsInfoContext } from "../../context/getPokemonInfo";
import { pokemonInfo } from "../../models/PokemonInfo.model";
import "./Listing.component.scss";
async function getPokemonLists() {
  try {
    return await getPokemons(10).then((res) => {
      return res;
    });
  } catch (err) {
    console.log(err);
  }
}

function ListingComponent() {
  const [pokemonLists, setPokemonLists] = useState([]);

  const [indexOfPokemon, setIndexOfPokemon] = useState(-1);
  useEffect(() => {
    getPokemonLists().then((res) => {
      setPokemonLists(res as unknown as pokemonInfo[]);
    });
  }, []);

  return (
    <div className="pokemon-list">
      <div className="pokemon-list__header">
        <h1>Welcome to Pokemon Application</h1>
      </div>
      <PokemonsInfoContext.Provider value={{ data: pokemonLists }}>
        <Outlet></Outlet>
      </PokemonsInfoContext.Provider>
    </div>
  );
}

export default ListingComponent;
