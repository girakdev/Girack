//chatW.js

import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function insertStyle() {
    return (
<style jsx global> {`

li
{
    margin: 0;
    padding: 0;
    border: none;
}

`}</style>

    )

}