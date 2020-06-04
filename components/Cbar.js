import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Link from 'next/link';

//ボタン用のスタイル
const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px',
      border: '1px solid rgba(0,0,0,0)',
      lineHeight: 0.6,
      width: "100%",
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
        backgroundColor: '#e6ccff',
        borderColor: '#f7e6ff',
        boxShadow: 'none',
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

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),

    },

}));

//チャンネルリストを出力する
const drawer = (
    <>
    {/*この↓のチャンネルの部分はサーバーより受け取る*/}
    {["general", "random", "devs", "MI"].map((text, index) => (
        <Grid item>
            <Link href={"?="+{text}}>
            <BootstrapButton varient="contained" key={text}>
                <p>{text}</p>
            </BootstrapButton>
            </Link>
        </Grid>
    ))}
    </>
);


export default function chatWin() {
    const classes = useStyles();
    return (
<>
<Grid container direction="column" justify="flex-start" alignItems="flex-start">

{drawer}
</Grid>

</> 
        //<InsertS> => スタイルそのもの
        /*
<>

<Grid
    
    container
    direction="column"
    justify="center"
    alignItems="flex-start"
    spacing={1}
>
    <Grid item style={{width: "100%"}}>
        <Link href="/"><button className={classes.butCh}>general</button></Link>
    </Grid>
    <Grid item style={{width: "100%"}}>
        <Link href="/?=random"><button className={classes.butCh}>random</button></Link>
    </Grid>
    <Grid item>
        <button className={classes.butCh}>devs</button>
    </Grid>

</Grid>
</>*/
    )
}