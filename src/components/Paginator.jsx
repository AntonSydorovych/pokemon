import React from 'react';
import styles from './styles/Paginator.module.scss'

const Paginator = (props) => {
const setcurrentPage = (pageNumber) => {
        props.setcurrentPage(pageNumber);
    }

    const mappedPages = props.pages.map(page => {
        if (page === props.currentPage) {
            return <div className={styles.currentPage}>{page}</div>
        }
        return <div className={styles.page} onClick={() => setcurrentPage(page)}>{page}</div>
    })

    return (
        <div className={styles.generator}>
            {mappedPages}
        </div>
    )
}

export default Paginator;
