import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    chatW: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
}));
  

export default function chatWin() {
    const cls = useStyles();
    return (
        <div className={cls.chatW}>
            <p>asdf</p>
        </div>
    )
}