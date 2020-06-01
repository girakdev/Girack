import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

const layoutStyle = {
    border: '1px solid #DDD',
    width: "80%",
    height: "70%"

}


//メッセージを放り込む部分
const chatWL = {
    width: "100%",
    height: "70%",
    position: "relative",
    border: "solid 3px red"

}

const useStyles =createStyles({
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
});
  

export default function chatWin() {
    //const classes = useStyles();
    return (
        <>
        <div style={chatWL}>
            <p>asdf</p>
        </div>
        </>
    )
}