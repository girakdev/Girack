import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
    },
    note: {
        width: '100%',
        paddingTop: '0px',
        paddingBottom: '0px',
    }
}));

const StickeyNote = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <ListItem>
                <ListItemText primary="付箋" />
            </ListItem>
            <Divider />

            <TextField className={classes.note}
                id="filled-basic"
                variant="filled"
                multiline
                rows={7}
                defaultValue=""
            />
        </Card>
    );
}

export default StickeyNote;
