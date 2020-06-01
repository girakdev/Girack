import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

const layoutStyle = {
    border: '1px solid #DDD',
    width: "80%",
    height: "70%"

}

const chatW_msgList = {
    width: "80%",
    height: "70%",
    position: "relative"

}

const useStyles = makeStyles(() => ({
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
}));
  

export default function chatWin() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.cw}>
            <p>asdf</p>
        </div>
        </>
    )
}