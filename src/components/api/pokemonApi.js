import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const pokemonAPI = {
    getAllPokemons: (pageNumber, pageSize) => {
        return instance.get(`pokemon/?offset=${pageNumber}&limit=${pageSize}`)
    },

    getFilteredPokemons: (typeId) => {
        return instance.get(`type/${typeId}/`)
    },

    getSoloPokemonInfo: (pokemonId) => {
        return instance.get(`pokemon/${pokemonId}`)
    }
};


