// pages/index.js
import Layout from '../components/MyLayout.js';
import Cbar from '../components/Cbar.js';
import Chatw from "../components/chatW.js";
import InsertS from "../styles/style.js";
import { makeStyles } from '@material-ui/core/styles';
//import { TextField, Container, Grid } from '@material-ui/core';
import io from 'socket.io-client';

export default function Blog() {
  //通信するためのSocket
  const socket = io();
  console.log("page loaded");

  //初期メッセージ
    socket.on("now", data => {
        console.log(data.message);

    });

  return (
<>
    <InsertS />
    <div className="forBar">
        <Cbar></Cbar>
    </div>
    <div className="forWin">
        <Chatw />
    </div>
</>
  )
  
}
