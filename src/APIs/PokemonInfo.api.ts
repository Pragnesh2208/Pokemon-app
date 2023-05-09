import axios from "axios";
import { pokemonInfo } from "../models/PokemonInfo.model";

export async function getPokemons(
  limit: number
): Promise<pokemonInfo[] | void> {
  const pokemonsInfo: pokemonInfo[] = [];

  const res = await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0undefined`)
    .then(async function (res) {
      const pokemonList = res.data.results;
      for (const pokemon of pokemonList) {
        const name: string = pokemon.name;
        const url: string = pokemon.url;
        const arraryOfurl = url.split("/");
        const indexOfPokemon = arraryOfurl[arraryOfurl.length - 2];
        const pokemonInfo: pokemonInfo = {} as pokemonInfo;
        pokemonInfo.name = name;
        pokemonInfo.id = indexOfPokemon as unknown as number;
        pokemonInfo.abilites = [];
        pokemonInfo.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${indexOfPokemon}.svg`;

        const temp = await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then((response) => {
            pokemonInfo.height = response.data.height;
            pokemonInfo.weight = response.data.weight;
            pokemonInfo.baseExperience = response.data.base_experience;
            pokemonInfo.order = response.data.order;
            const abilities = response.data.abilities;
            for (const ability of abilities) {
              pokemonInfo.abilites.push(ability.ability.name);
            }
            return pokemonInfo;
          });
        pokemonsInfo.push(temp);
      }
      return pokemonsInfo;
    })
    .catch((err) => console.log(err));
  return res;
}
