// pages/index.js

import Sidebar, { Item } from '../components/SideBar';
import Chatw from "../components/chatWindow";
import Home from "../components/Home";
import { createStyles, List, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
    },
}));


const Blog = () => {
    //通信するためのSocket
    //const socket = io();
    const classes = useStyles();
    console.log("<<< page loaded >>>");
    const item1: Item = { text: 'Hello' };


    return (
        <div className={classes.root}>
            <Sidebar items={[item1]} />
            <Home />
        </div>
    );

}

export default Blog;
