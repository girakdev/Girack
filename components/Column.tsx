import React from 'react';
import { createStyles, List, makeStyles } from "@material-ui/core"
import Item from './Item'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        width: theme.spacing(32),
        height: '100%',
        flexDirection: 'column',
        display: 'inline-block',
        overflowY: 'auto',
    },
    clumnName: {
        fontSize: '20px',
        margin: '0px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
    },
}));

const Column = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <h3 className={classes.clumnName}>test</h3>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </List>
    );
}

export default Column;
