import Sidebar from '../components/Sideber/SideBar';
import Home from "../components/homeColumn/Home";
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
