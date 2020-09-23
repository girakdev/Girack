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

const chatWindow = (s) => {
    return (
        <>
            <div style={chatHead}>
                <title style={{ margin: 0 }}>{/*{location.pathname.split("/")[1]}*/}</title>
                <Typography variant="overline" style={{ color: "rgba(0, 0, 0, 0.6)", marginTop: "2px" }}>これが説明</Typography>
            </div>
            <Divider />
            <div style={chatWL}>
            </div>
            <Divider />
            <div style={chatInputStyle}>
                <span style={{ float: "left", marginRight: "3%", width: "85%" }}><TextField style={{ width: "100%", float: "left" }} onChange={e => setMsgText(e.target.value)} label="メッセージ" variant="outlined" /></span>
                <Button style={{ height: '100%' }} onClick={() => { chatSend(socket) }} variant="outlined">送信</Button>
            </div>
        </>
    );

}

export default chatWindow;

