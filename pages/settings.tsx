//settings.js

import Cbar from '../components/Cbar';
import Chatw from "../components/chatWindow";
import Layout from '../components/MyLayout';
import io from 'socket.io-client';
import InsertS from "../styles/style";
import useStyles from '../styles/useStyles';

const settings = () => {
    const classes = useStyles();

    return (
        <>
            <h1>設定ページ</h1>
        </>

    );

}

export default settings;
