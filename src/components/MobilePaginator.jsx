import React from 'react';
import styles from './styles/MobilePaginator.module.scss';
import Button from './Button';
import arrow from '../assets/arrow.jpg';

const MobilePaginator = (props) => {
    const {currentPage, showFilteredList} = props;
    const pagesCount = props.pages.length;

    const prevPage = (pageNumber) => {
        if (pageNumber === 1) return;
        props.setcurrentPage(pageNumber - 1);
    }
    const nextPage = (pageNumber) => {
        if (pageNumber === pagesCount) return;
        props.setcurrentPage(pageNumber + 1);
    }
    const loadMore = () => {
        props.loadMore()
    }
    return (
        <div>
            { showFilteredList ? <div className={styles.generator} >
                <div className={styles.prevPage} onClick={() => prevPage(currentPage)}>
                    <img src={arrow} />
                </div>
                <div className={styles.currentPage}>{currentPage}</div>
                <div className={styles.nextPage} onClick={() => nextPage(currentPage)}>
                    <img src={arrow} />
                </div>
            </div >
                : <div className={styles.button}>
                    <Button loadMore={loadMore} />
                </div>
            }
        </div>
    )
}

export default MobilePaginator;

