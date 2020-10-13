import React from 'react';
import { createStyles, List, makeStyles, ListSubheader } from "@material-ui/core"
import Item from './Item'

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        width: theme.spacing(32),
        padding: '0px',
        height: '100%',
        display: 'inline-block',
        overflowY: 'auto',
        flexDirection: 'column',
    },
    ColumnName: {
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
    }

}));

const Column = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListSubheader className={classes.ColumnName} >I'm sticky </ListSubheader>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </List>


    );
}

export default Column;
