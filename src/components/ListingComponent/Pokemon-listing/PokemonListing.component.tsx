import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getPokemonLists,
  getSearchPokemonLists,
} from "../../../APIs/PokemonInfo.api";
import { pokemonInfo } from "../../../models/PokemonInfo.model";
import CardComponent from "../../../stories/components/Card/Card.component";
import CustomSearchComponent from "../../../stories/components/CustomSearch/CustomSearch.component";
import CustomSelectComponent from "../../../stories/components/CustomSelect/CustomSelect.component";
interface MenuInfo {
  key: string;
  value: number;
}

function PokemonListingComponent() {
  const [SearchValue, updateSearchValue] = useState("");
  const [paginationValue, updatePaginationValue] = useState(10);

  const [pokemonLists, updatePokemonLists] = useState([]);
  const [searchPokemonLists, updateSearchPokemonLists] = useState([]);
  useEffect(() => {
    getPokemonLists(paginationValue).then((res) => {
      updatePokemonLists(res as never[]);
    });
  }, []);

  const searchInputProps = {
    name: "Search",
    placeholder: "Search...",
    error: false,
    variant: "outlined",
    type: "text",
    autoFocus: true,
    label: "Search",
    value: SearchValue,
    disableUnderline: true,
  };
  const menuInfo: MenuInfo[] = [
    {
      key: "10",
      value: 10,
    },
    {
      key: "20",
      value: 20,
    },
    {
      key: "50",
      value: 50,
    },
  ];

  return (
    <>
      <div className="pokemon-list__search">
        <CustomSearchComponent
          searchInputProps={searchInputProps}
          updateField={(newValue: string) => {
            newValue = newValue.trim();
            updateSearchValue(newValue);

            if (newValue.length > 0) {
              getSearchPokemonLists(newValue).then((res) => {
                updateSearchPokemonLists(res);
              });
            } else {
              updateSearchPokemonLists([]);
            }
          }}
        />
        <CustomSelectComponent
          updateValue={(newValue: number) => {
            getPokemonLists(newValue).then((res) => {
              updatePokemonLists(res as never[]);
              getSearchPokemonLists(SearchValue).then((res) => {
                updateSearchPokemonLists(res);
              });
            });
          }}
          defaultValue={paginationValue}
          menuInfo={menuInfo}
        ></CustomSelectComponent>
      </div>
      <div className="pokemon-list__cards">
        {searchPokemonLists?.length == 0
          ? pokemonLists.map((x: pokemonInfo) => {
              return (
                <div className="pokemon-list__card">
                  <Link to={`${x.id}`} key={x.id} state={{ id: x.id }}>
                    <CardComponent pokemonInfo={x} key={x.id}></CardComponent>
                  </Link>
                </div>
              );
            })
          : searchPokemonLists.map((x: pokemonInfo) => {
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
