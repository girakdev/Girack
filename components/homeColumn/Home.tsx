import React from 'react';
import { createStyles, List, makeStyles, Button, ListSubheader } from "@material-ui/core"
import Column from './Column'
import WidgetColumn from './WidgetColumn'
import AddIcon from '@material-ui/icons/Add';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: '100vh',
        padding: 0,
        paddingLeft: theme.spacing(1),
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
    },
    addColumn: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        width: theme.spacing(32),
        padding: '0px',
        height: '100%',
        display: 'inline-block',
        overflowY: 'auto',
        flexDirection: 'column',
    },
    AddColumnButton: {
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
    }
}));

const ColumnList = () => {
    const classes = useStyles();
    const [Columns, setColumn] = React.useState([]);

    const addColumn = () => {
        setColumn([...Columns, '1']);
    }

    return (
        <List className={classes.root}>
            <WidgetColumn />
            {Columns.map((post, index) => (
                <Column key={(index)} />
            ))}

            <List className={classes.addColumn}>
                <ListSubheader className={classes.AddColumnButton}><Button onClick={addColumn}> <AddIcon /></Button> </ListSubheader>
            </List>
        </List>
    );
}

export default ColumnList;
