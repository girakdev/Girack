// pages/index.js

import Cbar from '../components/Cbar';
import Sidebar, { Item } from '../components/SideBar';
import Chatw from "../components/chatWindow";
import InsertS from "../styles/style";
import useStyles from '../styles/useStyles';


const Blog = () => {
    //通信するためのSocket
    //const socket = io();
    console.log("<<< page loaded >>>");
    const classes = useStyles();
    const item1: Item = { text: 'Hello' };

    return (
        <>
            <InsertS />
            <Sidebar items={[item1]} />
            <div className={classes.window}>
                <Chatw />
            </div>
        </>
    );

}

export default Blog;
