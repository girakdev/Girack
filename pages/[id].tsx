// pages/index.js

import Layout from '../components/MyLayout';
import Cbar from '../components/SideBar';
import Chatw from "../components/chatWindow";

import io from 'socket.io-client';
import Sidebar, { Item } from '../components/SideBar';

import { createStyles, List, makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
    },
}));

const Blog = () => {
    //通信するためのSocket
    //const socket = io();
    console.log("<<< page loaded >>>");
    const classes = useStyles();
    const item1: Item = { text: 'Hello' };

    return (
        <>
            <div className={classes.root}>
                <Sidebar items={[item1]} />
                <Chatw />
            </div>
        </>
    )

}

export default Blog;
