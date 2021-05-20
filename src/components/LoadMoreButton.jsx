import React from 'react';
import styles from './styles/loadMore.module.scss'

let LoadMoreButton = (props) => {
    let onClickAction = () => {
        props.loadMore();
    }
    return (
        <div className={styles.button} onClick={() => onClickAction()}>
            Load More
        </div>
    )
}

export default LoadMoreButton;
