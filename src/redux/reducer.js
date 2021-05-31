import { actionTypes } from './actionTypes';




const initialState = {
    items: ' ',
    pokeInfo: ' ',
    pageNumber: 0,
    showFilteredList: false,
    currentPage: 0,
    pagesCount: 0,
    pagesArray: ' ',
    pageSize: 12
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ALL_POKEMONS:
            return {
                ...state,
                items: action.payload
            }

        case actionTypes.SET_SOLO_POKEMON:
            return {
                ...state,
                pokeInfo: action.payload
            }

        case actionTypes.SET_PAGES_COUNT:
            return {
                ...state,
                pagesCount: action.payload
            }

        case actionTypes.SET_SHOW_FILTERED_LIST:
            return {
                ...state,
                showFilteredList: action.payload
            }

        case actionTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case actionTypes.SET_PAGES_ARRAY:
            return {
                ...state,
                pagesArray: action.payload
            }

        case actionTypes.SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: state.pageNumber + state.pageSize
            }

        default:
            return state;
    }
} 

export const setAllPokemons = (payload) => {
    return {
        type: actionTypes.SET_ALL_POKEMONS,
        payload
    }
}

export const setSoloPokemon = (payload) => {
    return {
        type: actionTypes.SET_SOLO_POKEMON,
        payload
    }
}

export const setPagesCount = (payload) => {
    return {
        type: actionTypes.SET_PAGES_COUNT,
        payload
    }
}

export const setShowFilteredList = (payload) => {
    return {
        type: actionTypes.SET_SHOW_FILTERED_LIST,
        payload
    }
}

export const setcurrentPage = (payload) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE,
        payload
    }
}

export const setPagesArray = (payload) => {
    return {
        type: actionTypes.SET_PAGES_ARRAY,
        payload
    }
}

export const setPageNumber = () => {
    return { type: actionTypes.SET_PAGE_NUMBER }
}
