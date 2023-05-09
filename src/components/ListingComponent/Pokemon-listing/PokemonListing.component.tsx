import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonsInfoContext } from "../../../context/getPokemonInfo";
import { pokemonInfo } from "../../../models/PokemonInfo.model";
import CardComponent from "../../../stories/components/Card/Card.component";
import CustomSearchComponent from "../../../stories/components/CustomSearch/CustomSearch.component";
import CustomSelectComponent from "../../../stories/components/CustomSelect/CustomSelect.component";

function PokemonListingComponent() {
  const pokemonInfoContext = useContext(PokemonsInfoContext);
  const pokemonLists = pokemonInfoContext.data;
  const [SearchValue, updateSearchValue] = useState("");

  const searchInputProps = {
    name: "Search",
    placeholder: "Search...",
    error: false,
    helperText: "",
    variant: "outlined",
    type: "text",
    autoFocus: true,
    label: "Search",
    value: SearchValue,
    disableUnderline: true,
    searchButtonPosition: "inside",
  };

  return (
    <>
      <div className="pokemon-list__search">
        <CustomSearchComponent
          searchInputProps={searchInputProps}
          updateField={(newValue: string) => {
            updateSearchValue(newValue);
          }}
        />
        <CustomSelectComponent></CustomSelectComponent>
      </div>
      <div className="pokemon-list__cards">
        {pokemonLists.map((x: pokemonInfo) => {
          return (
            <div className="pokemon-list__card">
              <Link to={`${x.id}`} key={x.id} state={{ id: x.id }}>
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
