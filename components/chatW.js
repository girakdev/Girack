import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button } from '@material-ui/core';
import io from 'socket.io-client';

const layoutStyle = {
    border: '1px solid #DDD',
    width: "80%",
    height: "70%"

}

//チャンネルのヘッダー
const chatHead = {
    fontSize: "20px",
    height: "10%",
    paddingLeft: "1%"
}

//メッセージを放り込む部分
const chatWL = {
    width: "100%",
    height: "75%",
    position: "relative",
    paddingLeft: "2%",
}

const useStyles = createStyles({
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
});

const chatInputStyle = {
    width: "75%",
    marginLeft: "3%",
    marginTop: "5%",
}

const chatPaperStyle = {
    width: "90%",
    padding: "20px",
}

function chatSend() {
    //var msg = document.getElementById("msgBox");
    io.emit("test", "asdf");

}


export default function chatWin() {
    //const classes = useStyles();
    const socket = io();
    socket.on("now", data => {
        console.log(data.message);

    });

    return (
        <>
            <div style={chatHead}>
                <p style={{margin:0}}>これがチャンネルヘッダ</p>
                <Typography variant="overline" style={{ color:"rgba(0, 0, 0, 0.6)",marginTop:"2px" }}>これが説明</Typography>
            </div>
            <Divider />
            <div id="chatW" style={chatWL}>
                <span style={{margin:"2%", width:"95%"}}>
                    <Paper style={chatPaperStyle} variant="outlined">asdf</Paper>
                </span>
            </div>
            <Divider />
            <div style={chatInputStyle}>
                <span style={{float:"left", marginRight:"3%", width:"85%"}}><TextField style={{width:"100%",float:"left"}} id="outlined-basic msgBox" label="メッセージ" variant="outlined" /></span>
                <Button onClick={chatSend()} variant="outlined">送信</Button>
            </div>
        </>
    )
}