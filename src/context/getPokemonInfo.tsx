import { createContext } from "react";
import { pokemonInfo } from "../models/PokemonInfo.model";

export const PokemonsInfoContext = createContext<{
  data: pokemonInfo[];
}>({ data: [] });
