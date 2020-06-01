// pages/index.js
import Layout from '../components/MyLayout.js';
import Cbar from '../components/Cbar.js';
import Link from 'next/link';
import chatW from "../components/chatW.js";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container, Grid } from '@material-ui/core';
import io from 'socket.io-client';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  takasa: {
    height: 500
  },
  forGrid: {
    width: "100%",
    flexGrow: 1,
  },
}));

export default function Blog() {
  //通信するためのSocket
  const socket = io();
  const classes= useStyles();

  socket.on("now", data => {
    console.log(data.message);

  });

  return (
<Container fluid xs="false">
  <Grid
    className={ classes.forGrid }
    container
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    spacing={1}
    flex
  >

    <Grid item xs={3}>
      <div style={{height:"100%"}}>
        <Cbar fluid />
      </div>
    </Grid>

    <Grid item xs={9} className={classes.takasa}>
      <div style={{height:"100%", border:"solid 1px #DDD"}}>
        <chatW style={{height:"100%", border:"solid 1px #DDD"}} overrides />
        <TextField></TextField>
      </div>
    </Grid>

  </Grid>
</Container>
  )
}