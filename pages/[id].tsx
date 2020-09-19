// pages/index.js

import Layout from '../components/MyLayout';
import Cbar from '../components/Cbar';
import Chatw from "../components/chatW";
import InsertS from "../styles/style";
import io from 'socket.io-client';
import useStyles from '../styles/useStyles';

const Blog = () => {
    //通信するためのSocket
    //const socket = io();
    console.log("<<< page loaded >>>");
    const classes = useStyles();

    return (
        <>
            <InsertS />
            <div className={classes.bar}>
                <Cbar />
            </div>
            <div className={classes.window}>
                <Chatw />
            </div>
        </>
    )

}

export default Blog;
