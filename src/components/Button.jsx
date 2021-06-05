import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles/button.module.scss'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
             width: '100%',
             height: '100%',
             margin: '0',
             fontSize: '20px',
             color: 'rgb(0, 0, 0)',
             background: 'rgb(255, 255, 255)'
             // height: '45px',
            // background: 'rgb(255, 255, 255)',
            // color: 'rgb(0, 0, 0)',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // fontSize: '24px',
            // fontWeight: 'bold',
            // boxShadow: '5px 5px 5px black',
            // borderRadius: '10px',
        },
    },
}));

export default function LoadButton(props) {
    const classes = useStyles();
    let onClickAction = () => {
        props.loadMore();
    }

    return (
        <div className={`${classes.root} ${styles.button}`}>
            <Button variant="contained"  onClick={() => onClickAction()}>
                Load More
      </Button>
        </div>
    );
}



/*
import React from 'react';
import styles from './styles/button.module.scss'

let Button = (props) => {
    let onClickAction = () => {
        props.loadMore();
    }
    return (
        <div className={styles.button} onClick={() => onClickAction()}>
            Load More
        </div>
    )
}

export default Button;
*/