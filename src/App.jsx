import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainViewer } from './components/MainViewer';
import { thunks } from './redux/thunks';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  let { pageNumber, pageSize } = state;

  useEffect(() => {
    dispatch(thunks.getAllPokemons(pageNumber, pageSize));
  }, [pageNumber]);

  async function pokemonFilter(typeId) {
    dispatch(thunks.pokemonFilter(typeId, pageSize))
  };

  async function showPokemon(id) {
    dispatch(thunks.getSoloPokemonInfo(id))
  }

  const loadMore = () => {
    dispatch(thunks.setPageNumber())
  }

  const switchPage = async (numberOfPage) => {
    dispatch(thunks.setCurrentPage(numberOfPage))
  }

  return (
    <MainViewer state={state}
      pokemonFilter={pokemonFilter}
      showPokemon={showPokemon}
      loadMore={loadMore}
      switchPage={switchPage}
    />
  );
}

export default App;
