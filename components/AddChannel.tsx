import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import AddIcon from '@material-ui/icons/Add';


const rand = () => {
    return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);



const addChennelPopup = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [channels, setChannel] = React.useState([]);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addChannel = () => {
        setChannel([...channels, 'test']);

    }


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">チャンネルの作成</h2>
            <TextField style={{ width: "90%", float: "left" }} label="チャンネル名" variant="outlined" />
            <span><Button onClick={addChannel}><AddIcon /></Button></span>
        </div>
    );

    return (
        <span>
            <Button type="button" onClick={handleOpen}>
                +
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </span>
    );
}

export default addChennelPopup;