import React from 'react';
import { createStyles, List, makeStyles } from "@material-ui/core"
import Column from "../components/Column"

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: '100vh',
        padding: 0,
        paddingLeft: theme.spacing(1),
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
    },
}));

const ColumnList = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </List>
    );
}

export default ColumnList;
