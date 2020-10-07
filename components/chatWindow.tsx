import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button } from '@material-ui/core';
import io from 'socket.io-client';
import { useRouter } from 'next/router';
//import Alrt from '../components/alert.js';

const layoutStyle = {
    border: '1px solid #DDD',
    width: "100%",
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
    width: "100%",
    height: "75%",
    paddingLeft: "2%",
    overflow: "auto",
}

const useStyles = makeStyles((theme) => createStyles({
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
}));

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
    const router = useRouter();
    const channelID = router.query.id;
    return (
        <>
            <div style={chatHead}>
                <title style={{ margin: 0 }}>{router.query.id}</title>
                <h2>{channelID}</h2>
            </div>

            <Divider />
            <div style={chatWL}>
                <Paper style={chatPaperStyle} variant="outlined">test</Paper>
            </div>
            <Divider />
            <div style={chatInputStyle}>
                <span style={{ float: "left", marginRight: "3%", width: "85%" }}><TextField style={{ width: "100%", float: "left" }} label="メッセージ" variant="outlined" /></span>
                <Button style={{ height: '100%' }} variant="outlined">送信</Button>
            </div>
        </>
    );

}

export default chatWindow;

