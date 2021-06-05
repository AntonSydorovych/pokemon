import React from 'react';
import styles from './styles/Info.module.scss';

let Info = (props) => {

    if(props.item.name === undefined){
        return <div></div>
    }

    let { item } = props;

    return (
        <div className={styles.item} >
            <div className={styles.picture}><img src={item.picture}/></div>
            <div className={styles.nameWrapper}>
                <div className={styles.name}>{`${item.name.charAt(0).toUpperCase() + item.name.slice(1)} # ${item.id}`}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>Type</div>
                <div className={styles.infoBoxRight}>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>Attack</div>
                <div className={styles.infoBoxRight}>{item.attack}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>Defense</div>
                <div className={styles.infoBoxRight}>{item.defense}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>HP</div>
                <div className={styles.infoBoxRight}>{item.hp}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>SP Attack</div>
                <div className={styles.infoBoxRight}>{item.spAttack}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>SP Defense</div>
                <div className={styles.infoBoxRight}>{item.spDefense}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>Speed</div>
                <div className={styles.infoBoxRight}>{item.speed}</div>
            </div>
            <div className={styles.infoBox}>
                <div className={styles.infoBoxLeft}>Weight</div>
                <div className={styles.infoBoxRight}>{item.weight}</div>
            </div>
            <div className={styles.lastInfoBox}>
                <div className={styles.infoBoxLeft}>Total Moves</div>
                <div className={styles.infoBoxRight}>{item.totalMoves}</div>
            </div>
        </div>
    )
};

export default Info;
