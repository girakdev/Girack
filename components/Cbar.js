import React from 'react';
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button, Divider, NoSsr } from '@material-ui/core';
import Link from 'next/link';

//ボタン用のスタイル
const BsButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 15,
      textAlign: "left",
      paddingLeft: "5px",
      paddingTop: '2px',
      paddingBottom: '2px',
      marginLeft: 0,
      border: '1px solid rgba(0,0,0,0)',
      borderRadius: "0 2ch 2ch 0",
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
        backgroundColor: '#4cd3c2',
        boxShadow: '2',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#4cd3c2',
        borderColor: '#0a97b0',
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

const SettingButton = withStyles((theme) => ({
  root: {
    width: "100%",
    margin: "3%, 0, 0, 0",
    backgroundColor: null,
    height: "3ch",

    '&:hover': {
      backgroundColor: 'rgba(76, 211, 194, 0.1)',
      borderColor: "#4cd3c2",

    },

  }

}))(Button);

export default function chatWin() {
    return (

<>
<NoSsr> {/* サーバーサイドレンダリングを殺しています */}
  <div style={{margin:"5% 10% 10% 10%"}} id="profile">
      <span>{/*このイメージはサンプルです*/}
          <img style={{width:"25%",height:"auto"}} src="https://image.flaticon.com/icons/svg/3011/3011270.svg"></img>
          <div style={{ marginTop:0, float:"right", width:"75%", textAlign:"center"}}>
            <Button>user</Button>
          </div>
          <SettingButton variant="outlined" disableElevation>SETTING</SettingButton>
      </span>
  </div>
  <Divider />
  <Grid 
  container direction="column"
  justify="flex-start"
  alignItems="flex-start"
  style={{marginTop:"10%"}}
  >
    {draw}{/*チャンネルリストを出力する場所 */}
  </Grid>
</NoSsr>

</> 

    )
}