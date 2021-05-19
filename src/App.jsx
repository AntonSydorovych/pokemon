import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './app.module.scss';
import Mapper from './components/Mapper';
import Info from './components/Info';
import PokeFilter from './components/PokeFilter';


function App() {

  let [items, setItems] = useState(' ');
  let [pokeInfo, setpokeInfo] = useState(' ');
  let [pageNumber, setpageNumber] = useState(0);

  useEffect(async () => {
    const result = await axios(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}&limit=12`,
    );

    let items = result.data.results;

    let itemsWithId = items.map(item => {
      let numberEnd = item.url.length - 1;
      let id = item.url.slice(34, numberEnd);
      let picture = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

      return { ...item, id, picture }
    })


    let readyPokemons = [];
    let promises = [];
    for (let i = 0; i < 12; i++) {


      promises.push(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${itemsWithId[i].id}/`).then(response => {
          let types = response.data.types;
          let type_1;
          let type_2;
          if(types.length === 1){
           type_1 = types[0].type.name;
           type_2 = 'absent';
          }

          if(types.length === 2){
            type_1 = types[0].type.name;
            type_2 = types[1].type.name;
           }

           itemsWithId[i] = {...itemsWithId[i], type_1, type_2}

          readyPokemons.push(itemsWithId[i]);
        })
      )
    }

    Promise.all(promises).then(() => setItems(readyPokemons.sort(function (a, b) {
          if (+a.id > +b.id) {
            return 1;
          }
          if (+a.id < +b.id) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        })));

  }, [pageNumber]);


  async function pokemonFilter(typeId) {
    const result = await axios(`https://pokeapi.co/api/v2/type/${typeId}/`);
    const data = result.data.pokemon;

    const pokemonsForRender = await data.map(item => {
      let numberEnd = item.pokemon.url.length - 1;
      let id = item.pokemon.url.slice(34, numberEnd);
      let picture = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      return { ...item.pokemon, id, picture }
    })


let readyPokemons = [];
let promises = [];

for (let i = 0; i < pokemonsForRender.length; i++) {
  promises.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonsForRender[i].id}/`).then(response => {
      // do something with response
      let types = response.data.types;
      let type_1;
      let type_2;
      if(types.length === 1){
       type_1 = types[0].type.name;
       type_2 = 'absent';
      }

      if(types.length === 2){
        type_1 = types[0].type.name;
        type_2 = types[1].type.name;
       }

       pokemonsForRender[i] = {...pokemonsForRender[i], type_1, type_2}

      readyPokemons.push(pokemonsForRender[i]);
    })
  )
}

Promise.all(promises).then(() => setItems(readyPokemons.sort(function (a, b) {
      if (+a.id > +b.id) {
        return 1;
      }
      if (+a.id < +b.id) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    })));
  }


  async function showPokemon(id) {
    const result = await axios(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    let data = result.data;

    let types = data.types.map(item => item.type.name);

    let soloPokemon = {
      picture: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
      name: data.name,
      number: '# ' + data.id,
      id: data.id,
      //      type: data.types[0].type.name,
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

  let loadMore = () => {
    setpageNumber(pageNumber + 12)
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
                <div className={styles.pokemonList}>
                  <Mapper setPokemon={showPokemon} items={items} />
                </div>
                <div className={styles.button} onClick={() => loadMore()}>
                  Load More
                </div>
              </div>
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


/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './app.module.scss';
import Mapper from './components/Mapper';
import Info from './components/Info';
import PokeFilter from './components/PokeFilter';


function App() {

  let [items, setItems] = useState(' ');
  let [pokeInfo, setpokeInfo] = useState(' ');
  let [pageNumber, setpageNumber] = useState(0);

  useEffect(async () => {
    const result = await axios(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pageNumber}&limit=12`,
    );

    let items = result.data.results;

    let itemsWithId = items.map(item => {
      let numberEnd = item.url.length - 1;
      let id = item.url.slice(34, numberEnd);
      let picture = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

      return { ...item, id, picture }
    })


    let readyPokemons = [];
    let promises = [];
    for (let i = 0; i < 12; i++) {


      promises.push(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${itemsWithId[i].id}/`).then(response => {
          let types = response.data.types;
          let type_1;
          let type_2;
          if(types.length === 1){
           type_1 = types[0].type.name;
           type_2 = 'absent';
          }

          if(types.length === 2){
            type_1 = types[0].type.name;
            type_2 = types[1].type.name;
           }

           itemsWithId[i] = {...itemsWithId[i], type_1, type_2}

          readyPokemons.push(itemsWithId[i]);
        })
      )
    }

    Promise.all(promises).then(() => setItems(readyPokemons.sort(function (a, b) {
          if (+a.id > +b.id) {
            return 1;
          }
          if (+a.id < +b.id) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        })));

  }, [pageNumber]);


  async function pokemonFilter(typeId) {
    const result = await axios(`https://pokeapi.co/api/v2/type/${typeId}/`);
    const data = result.data.pokemon;

    const pokemonsForRender = await data.map(item => {
      let numberEnd = item.pokemon.url.length - 1;
      let id = item.pokemon.url.slice(34, numberEnd);
      let picture = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      return { ...item.pokemon, id, picture }
    })


let readyPokemons = [];
let promises = [];

for (let i = 0; i < pokemonsForRender.length; i++) {
  promises.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonsForRender[i].id}/`).then(response => {
      // do something with response
      let types = response.data.types;
      let type_1;
      let type_2;
      if(types.length === 1){
       type_1 = types[0].type.name;
       type_2 = 'absent';
      }

      if(types.length === 2){
        type_1 = types[0].type.name;
        type_2 = types[1].type.name;
       }

       pokemonsForRender[i] = {...pokemonsForRender[i], type_1, type_2}

      readyPokemons.push(pokemonsForRender[i]);
    })
  )
}

Promise.all(promises).then(() => setItems(readyPokemons.sort(function (a, b) {
      if (+a.id > +b.id) {
        return 1;
      }
      if (+a.id < +b.id) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    })));
  }


  async function showPokemon(id) {
    const result = await axios(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    let data = result.data;

    let types = data.types.map(item => item.type.name);

    let soloPokemon = {
      picture: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
      name: data.name,
      number: '# ' + data.id,
      id: data.id,
      //      type: data.types[0].type.name,
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

  let loadMore = () => {
    setpageNumber(pageNumber + 12)
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
                <div className={styles.pokemonList}>
                  <Mapper setPokemon={showPokemon} items={items} />
                </div>
                <div className={styles.button} onClick={() => loadMore()}>
                  Load More
                </div>
              </div>
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
*/