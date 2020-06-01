// pages/index.js
import Layout from '../components/MyLayout.js';
import Cbar from '../components/Cbar.js';
import Chatw from "../components/chatW.js";
import InsertS from "../styles/style.js";
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
//import { TextField, Container, Grid } from '@material-ui/core';
import io from 'socket.io-client';

const useStyles = makeStyles((theme) => ({
  forWin: {
    height: "100%",
    width: "80%",
    position: "absolute",
    right: 0,
    top: 0,
    borderLeft: "solid 4px #000",
    padding: 0,
    margin: 0,
  },
  forBar: {
    height: "100%",
    width: "20%",
    maxWidth : "200px",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#DDD"
  }
}));


export default function Blog() {
  //通信するためのSocket
  const socket = io();
  const cls= useStyles();

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
