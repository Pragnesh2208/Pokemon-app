import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonById } from "../../../APIs/PokemonInfo.api";
import { pokemonInfo } from "../../../models/PokemonInfo.model";
import "./PokemonDetails.component.scss";

function PokemonDetailsComponent() {
  let currentPokemonIndex: number = window.history?.state?.usr?.id;
  currentPokemonIndex = currentPokemonIndex ? currentPokemonIndex : -1;
  const [pokemonInfo, updatePokemonInfo] = useState({} as pokemonInfo);
  useEffect(() => {
    getPokemonById(currentPokemonIndex)
      .then((res) => {
        updatePokemonInfo(res as pokemonInfo);
      })
      .catch(() => {});
  }, [currentPokemonIndex]);

  return (
    pokemonInfo && (
      <div className="details">
        <div className="details__header">
          <h1>Pokemon Details</h1>
          <Link to={"/list"}>
            <button type="button">go back</button>
          </Link>
          <img src={pokemonInfo?.imageUrl} />
        </div>
        <div className="details__content">
          <ul>
            <li>
              <p>
                <span>
                  <b>Name</b>
                </span>
                :{pokemonInfo?.name}
              </p>
            </li>
            <li>
              <p>
                <span>
                  <b>Height</b>
                </span>
                :{pokemonInfo?.height}
              </p>
            </li>
            <li>
              <p>
                <span>
                  <b>Weight</b>
                </span>
                :{pokemonInfo?.weight}
              </p>
            </li>
            <li>
              <p>
                <span>
                  <b>Base Experience</b>
                </span>
                :{pokemonInfo?.baseExperience}
              </p>
            </li>
            <li>
              <p>
                <span>
                  <b>Order</b>
                </span>
                :{pokemonInfo?.order}
              </p>
            </li>
            <li>
              <p>
                <span>
                  <b>List of abilities</b>
                </span>
                :
              </p>
              <ol>
                {pokemonInfo?.abilites?.map((ability) => {
                  return <li> {ability}</li>;
                })}
              </ol>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

export default PokemonDetailsComponent;
