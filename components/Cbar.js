import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/MyLayout.js';
import { Grid, Button } from '@material-ui/core';
import Link from 'next/link';

const btStyle = {
    width: "100%",
    backgroundColor: "gray",
    border: "solid #DDD 2px",
    borderRadius: "10ch",
}

function checkLoc(Clink) {
    if ( location.search.indexOf(Clink) != -1 ) {
        return "outlined";

    } else {
        return null;

    }

}

export default function chatWin() {
    return (
        <Layout>
<Grid
    
    container
    direction="column"
    justify="center"
    alignItems="flex-start"
    spacing={1}
    style={{textAlign:"left"}}
>
    <Grid item xs>
        #<Link href="/"><Button variant={{checkLoc("")}}>general</Button></Link>
    </Grid>
    <Grid item xs>
        #<Link href="/?=random"><Button>random</Button></Link>
    </Grid>
    <Grid item xs>
        #<Button>devs</Button>
    </Grid>

</Grid>
        </Layout>
    )
}