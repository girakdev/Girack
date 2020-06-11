//settings.js

import Layout from '../components/MyLayout.js';
import io from 'socket.io-client';
import InsertS from "../styles/style.js";

export default function settings() {
    return (
<>
    <InsertS />
    <div style={forBar}>
        <Cbar />
    </div>
    <div style={forWindow}>
        <Chatw />
    </div>
</>
          
    );

}