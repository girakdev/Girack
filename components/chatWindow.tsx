import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button } from '@material-ui/core';
import io from 'socket.io-client';
import { useRouter } from 'next/router';
import theme from '../src/theme';
import HomeIcon from '@material-ui/icons/Home';
//import Alrt from '../components/alert.js';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: '100%',
        height: '100vh',
        position: 'relative',

    },
    channelText: {
        margin: '0px',
    },
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
    chatHead: {
        marginTop: "10px",
        marginLeft: "20px",
        fontSize: "10px",

    },
    topicText: {
        paddingLeft: '10px',
        fontSize: "15px",
    },
    chatWL: {
        width: "100%",
        height: "75%",
        marginTop: "30px",
        paddingLeft: "2%",
        overflow: "auto",
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
    },
    bottomPosition: {
        width: '100%',
        position: 'absolute',
        bottom: '20px',
    },
    chatInputStyle: {
        marginLeft: "20px",

    },
}));

const chatWindow = () => {
    const classes = useStyles();
    const router = useRouter();
    const channelID = router.query.id;
    const topicText = "testtest"
    return (
        <div className={classes.root}>
            <div className={classes.chatHead}>
                <title style={{ margin: 0 }}>{router.query.id}</title>
                <h2 className={classes.channelText}>{channelID}</h2>
                <div className={classes.topicText}>topic:{topicText}</div>
            </div>

            <Divider />
            <div className={classes.chatWL}>
                <div className={classes.postText}>
                    <div className={classes.userPostIcon}><HomeIcon /></div>
                    <div>
                        <div className={classes.userPostname} >user1
                        <span className={classes.postTime}>00:00</span>
                        </div>
                        <div className={classes.chatStyle}>testtesttest adsfadsfadsfasdfasdfadsfffffffffffffffffffffffffffffffffffffffffffffffffffasdfasdfadfadsfajekhrasejfaheajefakejaekfa</div>
                    </div>
                </div>
            </div>
            <div className={classes.bottomPosition}>
                <div className={classes.chatInputStyle}>
                    <span style={{ float: "left", marginRight: "3px", width: "100%" }}>
                        <TextField style={{ width: "90%", float: "left" }} label="メッセージ" variant="outlined" />
                    </span>
                </div>
            </div>
        </div>
    );

}

export default chatWindow;

