import axios from "axios";
import { pokemonInfo } from "../models/PokemonInfo.model";

async function getPokemons(limit: number): Promise<pokemonInfo[] | void> {
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

export async function getPokemonLists(paginationInfo: number) {
  try {
    return await getPokemons(paginationInfo).then((res) => {
      return res;
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getSearchPokemonLists(
  searchPokemon: string,
  pokemonLists: pokemonInfo[]
) {
  try {
    const newPokemonLists: pokemonInfo[] = [];

    for await (const pokemonInfo of pokemonLists) {
      const name = pokemonInfo.name;
      if (longestCommonSubsequence(searchPokemon, name)) {
        newPokemonLists.push(pokemonInfo);
      }
    }
    return newPokemonLists;
  } catch (err) {
    console.log(err);
  }
}

function longestCommonSubsequence(s1: string, s2: string) {
  const n = s1.length;
  const m = s2.length;
  const storeState: Array<Array<number>> = [];

  for (let i = 0; i <= n; i++) {
    storeState[i] = [] as Array<number>;
    for (let j = 0; j <= m; j++) {
      storeState[i][j] = 0;
    }
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] == s2[j - 1])
        storeState[i][j] = 1 + storeState[i - 1][j - 1];
      else
        storeState[i][j] = Math.max(storeState[i - 1][j], storeState[i][j - 1]);
    }
  }
  return storeState[n][m];
}
