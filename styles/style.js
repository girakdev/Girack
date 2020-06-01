// THIS IS A STYLE FILE FOR index.js !!!

import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function insertStyle() {
    return (
<style jsx global> {`

.forWin 
{
    height: 100%;
    width: 80%;
    position: absolute;
    right: 0;
    top: 0;
    border-left: solid 4px #000;
    padding: 0;
    margin: 0;
}

.forBar {
    height: 100%;
    width: 20%;
    maxWidth : 200px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #DDD;
}

`}</style>

    )
}