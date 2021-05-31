import { pokemonAPI } from '../components/api/pokemonApi';
import { idExtractor } from '../functionsForThunk/idExtractor';
import { typeExtractor } from '../functionsForThunk/typeExtractor';
import { pokemonInfoMaker } from '../functions/pokemonInfoMaker';
import { makePageArray } from '../functions/makePageArray';
import {
    setAllPokemons,
    setSoloPokemon,
    setPagesCount,
    setShowFilteredList,
    setcurrentPage,
    setPagesArray,
    setPageNumber
} from './reducer';

export const thunks = {
    getAllPokemons: (pageNumber, pageSize) => {
        return (dispatch) => {
            pokemonAPI.getAllPokemons(pageNumber, pageSize)
                .then(response => idExtractor(response.data.results))
                .then(items => typeExtractor(items))
                .then(items => dispatch(setAllPokemons(items)))
        }

    },

    getSoloPokemonInfo: (pokemonId) => {
        return (dispatch) => {
            pokemonAPI.getSoloPokemonInfo(pokemonId)
                .then(response => pokemonInfoMaker(response.data, pokemonId))
                .then(item => dispatch(setSoloPokemon(item)))
        }
    },

    pokemonFilter: (typeId, pageSize) => {
        return (dispatch) => {
            pokemonAPI.getFilteredPokemons(typeId)
                .then(response => {
                    const data = response.data.pokemon.map(item => item.pokemon)
                    const pagesCount = Math.ceil(data.length / pageSize)
                    dispatch(setPagesCount(pagesCount))
                    const pagesArray = makePageArray(pagesCount)
                    dispatch(setPagesArray(pagesArray))

                    return data;
                })
                .then(response => idExtractor(response))
                .then(items => typeExtractor(items))
                .then(items => {
                    dispatch(setAllPokemons(items))
                    dispatch(setShowFilteredList(true))
                    dispatch(setcurrentPage(1))
                })
        }
    },

    setCurrentPage: (pageNumber) => {
        return (dispatch) => dispatch(setcurrentPage(pageNumber))
    },

    setPageNumber: () => {
        return (dispatch) => dispatch(setPageNumber())
    }
}
