//settings.js

import Cbar from '../components/Cbar';
import Chatw from "../components/chatW";
import Layout from '../components/MyLayout';
import io from 'socket.io-client';
import InsertS from "../styles/style";
import useStyles from '../styles/useStyles';

const settings = () => {
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

    );

}

export default settings;
