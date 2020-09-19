import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button } from '@material-ui/core';
import io from 'socket.io-client';
import Header from './Header';
//import Alrt from '../components/alert.js';

const layoutStyle = {
    border: '1px solid #DDD',
    width: "80%",
    height: "70%"

}

//チャンネルのヘッダー
const chatHead = {
    fontSize: "20px",
    height: "10%",
    paddingLeft: "1%",
    marginTop: "2%",
}

//メッセージを放り込む部分
const chatWL = {
    width: "95%",
    height: "75%",
    position: "relative",
    paddingLeft: "2%",
    overflow: "auto",
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
const chatSend = (s) => {
    var msg = document.getElementById("outlined-basic msgBox")._valueTracker.getValue();
    s.emit("msgS", msg);

}


//受信したメッセージの格納場所（現在は試験用にダミーを追加）
var msgList = [];
const msgLists = () => {
    return (
        <>
            {/*この↓のチャンネルの部分はサーバーより受け取る*/}
            {["msgList", "uh"].map((text, index) => (
                <div key={text} style={chatPaperStyle}>{text}</div>
            ))}
        </>);
    //return msgListShown;

}

const msgMaker = (m) => {
    return (<div key={m} style={chatPaperStyle}>{m}</div>);
    //console.log(<><div key={m} style={chatPaperStyle}>{m}</div></>);
}

const chatWin = () => {
    //const classes = useStyles();
    const socket = io();

    //テスト受信用
    socket.on("now", data => {
        console.log(data.message);

    });

    //メッセージの受信用
    socket.on("msgR", data => {
        //メッセージの配列に追加
        msgList += data.message;

        //メッセージを出力するためにchatWのウィンドウを取得
        var magCont = document.getElementById("chatW");
        //出力
        magCont.innerHTML += ('<div style="width:90%;padding:20px;padding-top:5px;padding-bottom:5px;border:solid 1px;border-color:rgba(0,0,0,0.13);border-radius:3px;margin-top:2%">' + data.message + '</div>');
        /*
        var element = document.getElementById("chatW");
        var positionY = element.offsetTop; // 変更点
        element.scrollTo(0, positionY);
        */

        var element = document.getElementById('chatW'); // 移動させたい位置の要素を取得
        var rect = element.getBoundingClientRect(); //スクロールするために要素の情報を取得
        var position = rect.top;    // 一番上からの位置を取得
        element.scrollTo(0, position); //一番下にスクロールする（できないけどな！）

    });

    return (
        <>
            <div style={chatHead}>
                <title style={{ margin: 0 }}>{/*{location.pathname.split("/")[1]}*/}</title>
                <Typography variant="overline" style={{ color: "rgba(0, 0, 0, 0.6)", marginTop: "2px" }}>これが説明</Typography>
            </div>
            <Divider />
            <div style={chatWL}>
                <span id="chatW" style={{ margin: "2%", width: "100%" }}>
                    <Paper style={chatPaperStyle} variant="outlined">asdf</Paper>
                    {msgLists()}
                </span>
            </div>
            <Divider />
            <div style={chatInputStyle}>
                <span style={{ float: "left", marginRight: "3%", width: "85%" }}><TextField style={{ width: "100%", float: "left" }} id="outlined-basic msgBox" label="メッセージ" variant="outlined" /></span>
                <Button style={{ height: '100%' }} onClick={() => { chatSend(socket) }} variant="outlined">送信</Button>
            </div>
        </>
    );
}

export default chatWin;
