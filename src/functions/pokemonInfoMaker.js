export const pokemonInfoMaker = (data, id) => {
    return {
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
}