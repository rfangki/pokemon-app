import { PokemonDetail } from "./apis/pokemon";

export const getPokemonLocalStorage = (): PokemonDetail[] => {
  const pokemonsJSON = localStorage.getItem("pokemons");
  return pokemonsJSON ? JSON.parse(pokemonsJSON) : [];
};

export const savePokemonLocalStorage = (pokemons: PokemonDetail[]): void => {
  localStorage.setItem("pokemons", JSON.stringify(pokemons));
};

export const nicknameUsed = (pokemons: PokemonDetail[], nickname: string): boolean => {
  return pokemons.some((pokemon) => pokemon.nickname === nickname);
};
