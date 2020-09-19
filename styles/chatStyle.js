//chatW.js

import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const BsButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 18,
        paddingTop: '3px',
        paddingBottom: '3px',
        marginLeft: 0,
        border: '4px solid rgba(0,0,0,0)',
        BorderRadiusRight: "10ch",
        borderLeft: 0,
        lineHeight: 0.2,
        width: "90%",
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#33bbff',
            boxShadow: '2',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

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