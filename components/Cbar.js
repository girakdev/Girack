import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/MyLayout.js';
import { Grid, Button } from '@material-ui/core';

const btStyle = {
    width: "100%",
    backgroundColor: "gray",
    border: "solid #DDD 2px",
    borderRadius: "10ch",
}

const btStyles = makeStyles((theme) => ({
    but: {
      width: "100%"

    },

}));

export default function chatWin() {
    //const cls = btStyles();
    return (
        <Layout>
<Grid
    
    container
    direction="column"
    justify="center"
    alignItems="flex-start"
    spacing={1}
>
    <Grid item xs>
        <Button size="large">general</Button>
    </Grid>
    <Grid item xs>
        <Button>random</Button>
    </Grid>
    <Grid item xs>
        <Button>devs</Button>
    </Grid>

</Grid>
        </Layout>
    )
}