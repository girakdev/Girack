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
    paddingTop: "5px",
    paddingBottom: "5px",
    border: "solid 1px",
    borderColor: "rgba(0,0,0,0.13)",
    borderRadius: "3px",
    marginTop: "2%",
}

//チャットの送信
function chatSend(s) {
    var msg = document.getElementById("outlined-basic msgBox")._valueTracker.getValue();
    console.log(msg);
    s.emit("msgS", msg);

}

var msgListShown = "";

//受信したメッセージの格納場所（現在は試験用にダミーを追加）
var msgList = ["===This is start of BODY===","and second"];
function msgLists() {
    return (
    <>
    {/*この↓のチャンネルの部分はサーバーより受け取る*/}
    {["msgList","uh"].map((text, index) => (
        <div key={text} style={chatPaperStyle}>{text}</div>
    ))}
    </>);
    //return msgListShown;

}

function msgMaker(m) {
    return (<div key={m} style={chatPaperStyle}>{m}</div>);
    //console.log(<><div key={m} style={chatPaperStyle}>{m}</div></>);
}

export default function chatWin() {
    //const classes = useStyles();
    const socket = io();
    socket.on("now", data => {
        console.log(data.message);

    });
    socket.on("msgR", data => {
        //document.getElementById("chatW").children[0].innerHTML+=(<div key={data.message} style={chatPaperStyle}>{data.message}}</div>);
        //console.log(<div key={data.message} style={chatPaperStyle}>{data.message}}</div>);
        msgList += data.message;
        //msgLists();
        var magCont = document.getElementById("chatW").children[0]
        magCont.appendChild(msgMaker(data.message));

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
                    {msgLists()}
                </span>
            </div>
            <Divider />
            <div style={chatInputStyle}>
                <span style={{float:"left", marginRight:"3%", width:"85%"}}><TextField style={{width:"100%",float:"left"}} id="outlined-basic msgBox" label="メッセージ" variant="outlined" /></span>
                <Button onClick={()=>{chatSend(socket)}} variant="outlined">送信</Button>
            </div>
        </>
    );
}

