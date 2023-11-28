import { getPokemonLocalStorage, savePokemonLocalStorage } from "../../utils/savePoke";
import { useEffect, useState } from "react";

import Layout from "../../components/layout";
import MyPokeCard from "../../components/mypokemon-card";
import { PokemonDetail } from "../../utils/apis/pokemon";

const Mypokemon = () => {
  const [poke, setPoke] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    const pokemons = getPokemonLocalStorage();
    setPoke(pokemons);
  }, []);

  const onRemovePokemon = (nickname: string) => {
    const pokemons = getPokemonLocalStorage();

    const updatedPokemons = pokemons.filter((pokemon) => pokemon.nickname !== nickname);

    savePokemonLocalStorage(updatedPokemons);
    setPoke(updatedPokemons);
  };

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        {poke.map((item, index) => (
          <MyPokeCard data={item} key={index} onRemove={onRemovePokemon} />
        ))}
      </div>
    </Layout>
  );
};

export default Mypokemon;
