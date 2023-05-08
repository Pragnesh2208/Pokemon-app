import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemons } from "../../../APIs/PokemonInfo.api";
import { pokemonInfo } from "../../../models/PokemonInfo.model";
import CardComponent from "../../../stories/components/Card/Card.component";

async function getPokemonLists() {
  try {
    return await getPokemons(10).then((res) => {
      return res;
    });
  } catch (err) {
    console.log(err);
  }
}

function PokemonListingComponent() {
  const [pokemonLists, setPokemonLists] = useState([]);

  useEffect(() => {
    getPokemonLists().then((res) => {
      setPokemonLists(res as unknown as pokemonInfo[]);
    });
  }, []);
  return (
    <>
      <div className="pokemon-list__search"></div>
      <div className="pokemon-list__cards">
        {pokemonLists.map((x: pokemonInfo) => {
          return (
            <div className="pokemon-list__card">
              <Link to={`${x.id}`} key={x.id} state={x.id}>
                <CardComponent pokemonInfo={x} key={x.id}></CardComponent>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PokemonListingComponent;
