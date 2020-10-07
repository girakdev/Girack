// pages/index.js

import Sidebar from '../components/SideBar';
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




    return (
        <div className={classes.root}>
            <Sidebar />
            <Home />
        </div>
    );

}

export default Blog;
