import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button, Badge, Avatar } from '@material-ui/core';
import { useRouter } from 'next/router';
import theme from '../../src/theme';
import HomeIcon from '@material-ui/icons/Home';


import PostNote from './PostStyle'
import axios from 'axios';
import { get } from 'http';





const useStyles = makeStyles((theme) => createStyles({
    root: {
    },
    /*消去予定--------------------------------------------------------------*/
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
        display: 'flex',
    },

}));

const chatWindow = () => {
    const classes = useStyles();
    const router = useRouter();
    const [MessageDate, setMessageDate] = React.useState([]);
    const ref = React.createRef<HTMLDivElement>()
    const scrollToBottomOfList = React.useCallback(() => {
        ref!.current!.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
    }, [ref])

    React.useEffect(() => {
        if (router.asPath !== router.route) {
            axios.get('http://localhost:3001/v1/message', {
                params: {
                    channel: router.query.id,
                }
            }).then(function (response) {
                console.log(response.data);
                setMessageDate(response.data.messages);
            })
        }
        scrollToBottomOfList()
    }, [router])

    return (
        <div className={classes.root}>
            {MessageDate.map((message, index) => (
                <div key={index}>
                    <div className={classes.postText}>
                        <div className={classes.userPostIcon}>
                            <Avatar alt="Remy Sharp" src="" />
                        </div>
                        <div>
                            <div className={classes.userPostname} >user1
                            <span className={classes.postTime}>{message.timestamp}</span>
                            </div>
                            <div className={classes.chatStyle}>{message.text}</div>
                        </div>
                    </div>
                </div>
            ))
            }
            <div ref={ref} />

        </div >
    );

}

export default chatWindow;

