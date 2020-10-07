import Chatwindow from "../components/ChatWindow";
import Sidebar from '../components/SideBar';

import { createStyles, List, makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => createStyles({
    root: {
        /*display: 'flex',*/
    },
}));

const channel = () => {
    //通信するためのSocket
    //const socket = io();
    const classes = useStyles();


    return (
        <div className={classes.root}>

            <Chatwindow />
            <Sidebar />
        </div>

    )

}

export default channel;
