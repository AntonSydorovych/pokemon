import axios from 'axios';


export const  typeExtractor = (array) => {
    let readyPokemons = [];
    let promises = [];
    for (let i = 0; i < array.length; i++) {
      promises.push(
        axios.get(`https://pokeapi.co/api/v2/pokemon/${array[i].id}/`).then(response => {
          let types = response.data.types;
          let type_1;
          let type_2;
          if (types.length === 1) {
            type_1 = types[0].type.name;
            type_2 = 'absent';
          }
          if (types.length === 2) {
            type_1 = types[0].type.name;
            type_2 = types[1].type.name;
          }
          array[i] = { ...array[i], type_1, type_2 }
          readyPokemons.push(array[i]);
        })
      )
    }

  return   Promise.all(promises).then(() =>  readyPokemons.sort(function (a, b) {
      if (+a.id > +b.id) {
        return 1;
      }
      if (+a.id < +b.id) {
        return -1;
      }
      return 0;
    }));
  }