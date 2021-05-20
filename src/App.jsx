import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './app.module.scss';
import Mapper from './components/Mapper';
import Info from './components/Info';
import PokeFilter from './components/PokeFilter';
import LoadMoreButton from './components/LoadMoreButton';
import typeExtractor from './functions/typeExtractor';
import PageGenerator from './components/PageGenerator';

function App() {
  const [items, setItems] = useState(' ');
  const [pokeInfo, setpokeInfo] = useState(' ');
  const [pageNumber, setpageNumber] = useState(0);
  const [showFilteredList, setShowFilteredList] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [pages, setPages] = useState(' ');
  const pageSize = 12;

  useEffect(async () => {
    const result = await axios(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}&limit=12`,
    );
    const items = result.data.results;
    const itemsWithId = items.map(item => {
      const numberEnd = item.url.length - 1;
      const id = item.url.slice(34, numberEnd);
      const picture = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      return { ...item, id, picture }
    })
    typeExtractor(itemsWithId, setItems);
  }, [pageNumber]);

  useEffect(() => {
    let pagesArray = [];
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i)
    }
    setPages(pagesArray)
  }, [pagesCount]);

  async function pokemonFilter(typeId) {
    const result = await axios(`https://pokeapi.co/api/v2/type/${typeId}/`);
    const data = result.data.pokemon;

    setPagesCount(Math.ceil(data.length / pageSize));

    const pokemonsForRender = await data.map(item => {
      let numberEnd = item.pokemon.url.length - 1;
      let id = item.pokemon.url.slice(34, numberEnd);
      let picture = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      return { ...item.pokemon, id, picture }
    })
    typeExtractor(pokemonsForRender, setItems);
    setShowFilteredList(true);
    setcurrentPage(1);
  };

  async function showPokemon(id) {
    const result = await axios(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    let data = result.data;
    const soloPokemon = {
      picture: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
      name: data.name,
      number: '# ' + data.id,
      id: data.id,
      type: data.types[0].type.name,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      hp: data.stats[0].base_stat,
      spAttack: data.stats[3].base_stat,
      spDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      weight: data.weight,
      totalMoves: data.moves.length
    }
    setpokeInfo(soloPokemon);
  }

  const loadMore = () => {
    setpageNumber(pageNumber + 12)
  }

  const switchPage = async(numberOfPage) =>{
    setcurrentPage(numberOfPage);
  }

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.appWrapper}>
        <div className={styles.app}>
          <div className={styles.headerWrapper}>
            <div className={styles.header}>
              Pokedex
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.listWrapper}>
                {showFilteredList ?
                  <div>
                    <div className={styles.pokemonList}>
                      <Mapper setPokemon={showPokemon} 
                      items={items.slice((currentPage - 1) * pageSize, currentPage * pageSize)} />
                    </div>
                    <PageGenerator pages={pages} currentPage={currentPage}
                      setcurrentPage={switchPage} />
                  </div>
                  : <div>
                    <div className={styles.pokemonList}>
                      <Mapper setPokemon={showPokemon} items={items} />
                    </div>
                    <LoadMoreButton loadMore={loadMore} />
                  </div>
                }</div>
              <div className={styles.pokeFilter}>
                <PokeFilter filter={pokemonFilter} />
              </div>
              <div className={styles.pokemonInfo}>
                <Info item={pokeInfo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
