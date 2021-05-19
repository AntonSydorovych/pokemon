import React from 'react';
import styles from './styles/Mapper.module.scss';

let Mapper = (props) => {

    if (props.items === ' ') {
        return <div>
            Data is not downloaded
        </div>
    }

    let setPokemon = (id) => {
        props.setPokemon(id);
    }

    let colorOfAttack = [
        { type: 'normal', color: 'white' },
        { type: 'fighting', color: 'brown' },
        { type: 'flying', color: 'white' },
        { type: 'poison', color: 'violet' },
        { type: 'ground', color: 'brown' },
        { type: 'rock', color: 'gray' },
        { type: 'bug', color: '#339966' },
        { type: 'ghost', color: 'gray' },
        { type: 'steel', color: 'gray' },
        { type: 'fire', color: '#f98080' },
        { type: 'water', color: '#6287ac' },
        { type: 'grass', color: '#79b48d' },
        { type: 'electric', color: 'yellow' },
        { type: 'psychic', color: 'brown' },
        { type: 'ice', color: 'white' },
        { type: 'dragon', color: 'red' },
        { type: 'dark', color: 'white' },
        { type: 'shadow', color: 'gray' },
        { type: 'unknown', color: 'white' }
    ]


    let mappedItems = props.items.map(item => {

        for (let i = 0; i < colorOfAttack.length; i++) {
            if (item.type_1 === colorOfAttack[i].type) {
                item.color_1 = colorOfAttack[i].color;
            }
        }

        for (let i = 0; i < colorOfAttack.length; i++) {
            if (item.type_2 === colorOfAttack[i].type) {
                item.color_2 = colorOfAttack[i].color;
            }
        }


        return (
            <div className={styles.item} onClick={() => setPokemon(item.id)}>
                <div className={styles.picture}><img src={item.picture} /></div>
                <div className={styles.nameWrapper}>
                    <div className={styles.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
                </div>
                <div className={styles.typeWrapper}>
                    <span className={styles.attackTypes}
                        style={{ backgroundColor: item.color_1 }}>
                        {item.type_1.charAt(0).toUpperCase() + item.type_1.slice(1)}
                    </span>
                    {item.type_2 === 'absent' ? <span></span> :
                        <span className={styles.attackTypes}
                            style={{ backgroundColor: item.color_2 }}>
                            {item.type_2.charAt(0).toUpperCase() + item.type_2.slice(1)}
                        </span>
                    }
                </div>
            </div>
        )
    })

    return mappedItems
};

export default Mapper;
