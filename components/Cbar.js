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
      border: '4px solid rgba(0,0,0,0)',
      borderRadius: "0 10ch 10ch 0",
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

//チャンネルリストを出力する
const draw = (
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
)


export default function chatWin() {
    return (
<>
<Grid 
 container direction="column"
 justify="flex-start"
 alignItems="flex-start">
     {draw}
</Grid>

</> 
        //<InsertS> => スタイルそのもの

    )
}