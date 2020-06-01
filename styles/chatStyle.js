//chatW.js

import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function insertStyle() {
    return (
<style jsx global> {`

.butCh
{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border: 0;
    margin: 0;
}

button
{
    background-color: rgba(0, 0, 0, 0.0);
    width: 100%;
    border: 0;
    margin: 0;
    padding: 3px;
    padding-left: 1ch;
    text-align: left;
    font-size: 18px;
}

`}</style>

    )

}