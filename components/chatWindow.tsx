import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button } from '@material-ui/core';
import io from 'socket.io-client';
import { useRouter } from 'next/router';
import theme from '../src/theme';
//import Alrt from '../components/alert.js';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: '100%',
        height: '100vh',
        position: 'relative',

    },
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
    chatHead: {
        fontSize: "20px",
        height: "10%",
        paddingLeft: "1%",
        marginTop: "2%",
    },
    chatWL: {
        width: "100%",
        height: "75%",
        paddingLeft: "2%",
        overflow: "auto",

    },
    chatPaperStyle: {
        width: "90%",
        padding: "20px",
        paddingTop: "5px",
        paddingBottom: "5px",
        border: "solid 1px",
        borderColor: "rgba(0,0,0,0.13)",
        borderRadius: "3px",
        marginTop: "2%",
    },
    bottomPosition: {
        width: '100%',
        position: 'absolute',
        bottom: '0px',
    },
    chatInputStyle: {
        width: "75%",
        marginLeft: "3%",
        marginTop: "5%",
    },


}));

const chatWindow = () => {
    const classes = useStyles();
    const router = useRouter();
    const channelID = router.query.id;
    return (
        <div className={classes.root}>
            <div className={classes.chatHead}>
                <title style={{ margin: 0 }}>{router.query.id}</title>
                <h2>{channelID}</h2>
            </div>

            <Divider />
            <div className={classes.chatWL}>
                <Paper className={classes.chatPaperStyle} variant="outlined">test</Paper>
            </div>
            <div className={classes.bottomPosition}>
                <Divider />
                <div className={classes.chatInputStyle}>
                    <span style={{ float: "left", marginRight: "3%", width: "85%" }}><TextField style={{ width: "100%", float: "left" }} label="メッセージ" variant="outlined" /></span>
                    <Button style={{ height: '100%' }} variant="outlined">送信</Button>
                </div>
            </div>
        </div>

    );

}

export default chatWindow;

