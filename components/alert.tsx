import React from 'react';
import { Alert } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import io from 'socket.io-client';
import Header from './Header';

const Popalert = (props) => {
    console.log("alert pop up");
    return (
        <>
            <Alert severity="warning"
                action={
                    <Button onClick={() => {
                        // setOpen(false);
                    }} color="inherit" size="small">CLOSE</Button>
                }
            >
                {props.children}
            </Alert>
        </>
    );
}

export default Popalert;
