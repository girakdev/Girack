import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import theme from '../../src/theme';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        padding: '20px',
    },
    postText: {
        width: '100%',
        display: 'flex',
    },
    userPostIcon: {
        padding: '20px',
        paddingTop: '10px',
        paddingRight: '6px',
    },
    userPostname: {
        fontSize: '17px',
    },
    postTime: {
        fontSize: '10px',
        paddingLeft: '10px',
    },
    chatStyle: {
        fontSize: '15px',
        width: "100%",
        padding: "20px",
        paddingLeft: "0px",
        paddingTop: "5px",
        paddingBottom: "5px",
        display: 'flex',
    },
}));


const NoteStyle = () => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <div className={classes.root}>
            <div className={classes.postText}>
                <div className={classes.userPostIcon}><HomeIcon /></div>
                <div>
                    <div className={classes.userPostname} >user1
                        <span className={classes.postTime}>00:00</span>
                    </div>
                    <div className={classes.chatStyle}></div>
                </div>
            </div>
        </div>
    );

}

export default NoteStyle;
