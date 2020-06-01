import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Link from 'next/link';
import InsertS from "../styles/chatStyle.js";

/*
const btStyle = {
    width: "100%",
    border: "solid #DDD 2px",
}*/

function checkLoc(Clink) {
    if ( location.search.indexOf(Clink) != -1 ) {
        return "outlined";

    } else {
        return null;

    }
    console.log("checked with " + Clink);

}

export default function chatWin() {
    return (
<>
<InsertS />
<Grid
    
    container
    direction="column"
    justify="center"
    alignItems="flex-start"
    spacing={1}
    style={{textAlign:"left"}}
>
    <Grid item style={{width: "100%"}}>
        <Link href="/"><button className="butCh">general</button></Link>
    </Grid>
    <Grid item fluid="true">
        <Link href="/?=random"><button>random</button></Link>
    </Grid>
    <Grid item>
        <button>devs</button>
    </Grid>

</Grid>
</>
    )
}