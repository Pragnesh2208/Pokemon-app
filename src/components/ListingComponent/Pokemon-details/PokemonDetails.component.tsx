import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonsInfoContext } from "../../../context/getPokemonInfo";
import "./PokemonDetails.component.scss";

function PokemonDetailsComponent() {
  const pokemonInfoContext = useContext(PokemonsInfoContext);
  const currentPokemonIndex = window.history.state.usr.id;
  console.log(currentPokemonIndex);
  const pokemonInfo = pokemonInfoContext.data.find((val) => {
    return val.id === currentPokemonIndex;
  });
  console.log(pokemonInfo);
  return (
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
              {pokemonInfo?.abilites.map((ability) => {
                return <li> {ability}</li>;
              })}
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetailsComponent;
