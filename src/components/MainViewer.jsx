import React from 'react';

import styles from './styles/MainViewer.module.scss';
import Mapper from './Mapper';
import Info from './Info';
import LoadMoreButton from './LoadMoreButton';
import PageGenerator from './PageGenerator';
import SimpleSelect from './PokeFilter';


export const MainViewer = (props) => {
    let {
        showFilteredList,
        items,
        currentPage,
        pagesArray,
        pageSize,
        pokeInfo
    } = props.state;
    let pokemonFilter = (typeId) => {
        props.pokemonFilter(typeId)
    }
    let showPokemon = (id) => {
        props.showPokemon(id)
    }
    let loadMore = () => {
        props.loadMore()
    }
    let switchPage = (numberOfPage) => {
        props.switchPage(numberOfPage)
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
                                        <PageGenerator pages={pagesArray} currentPage={currentPage}
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
                                <SimpleSelect filter={pokemonFilter} />
                            </div>
                            <div className={styles.pokemonInfo}>
                                <Info item={pokeInfo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}