import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Link from 'next/link';

//ボタン用のスタイル
const BsButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 18,
      paddingTop: '3px',
      paddingBottom: '3px',
      marginLeft: 0,
      border: '1px solid rgba(0,0,0,0)',
      BorderRadiusTopright: "10ch",
      BorderRadiusBottomRight: "10ch",
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
        backgroundColor: '#e6f7ff',
        borderColor: '#e6f7ff',
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
        <Grid item style={{width:"100%", margin:0}} key={text}>
            <Link href={"?=" + text}>
            <BsButton>
                <p>{text}</p>
            </BsButton>
            </Link>
        </Grid>
    ))}
    </>
);


export default function chatWin() {
    const classes = useStyles();
    return (
<>
<Grid 
 container direction="column"
 justify="flex-start"
 alignItems="flex-start">
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