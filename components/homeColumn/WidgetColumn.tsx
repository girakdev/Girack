import React from 'react';
import { createStyles, List, makeStyles, ListSubheader, Button } from "@material-ui/core"
import StickyNote from './StickyNote'
import Todolist from './Todolist'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        width: "100%",
    },
    ColumnName: {
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
        padding: "0px",
    },
    SlectButton: {
        width: "100%",
    }

}));

const WidgetColumn = () => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListSubheader className={classes.ColumnName} >
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography className={classes.heading}> ウィジェット</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.SlectButton}>
                            <Button >
                                <div>編集</div>
                            </Button>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ListSubheader>
            <StickyNote />
            <Todolist />
        </List >
    );
}

export default WidgetColumn;