import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Link from 'next/link';
import InsertS from "../styles/chatStyle.js";

//ボタン用のスタイル
const useStyles = makeStyles(theme => ({
    butCh: {
        border: "none",
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        width: "100%",
        margin: 0,
        padding: "3px",
        paddingLeft: "1ch",
        textAlign: "left",
        fontSize: "18px",
        '&:hover': {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
        }  
    },
  }));

/* 現在のチャンネルをチェックするようだったやつ
function checkLoc(Clink) {
    if ( location.search.indexOf(Clink) != -1 ) {
        return "outlined";

    } else {
        return null;

    }
    console.log("checked with " + Clink);

}*/


function asdf(cl) {
    var list = [];
    console.log(cl.butch);

    var chList= [
        "general",
        "random",
        "devs",
    ];

    for ( const [index, value] of chList.entries() ) {
        //list.push(<p>{chList[i]}</p>);
        list.push(
            <li key={index}>
            <Grid item style={{width: "100%"}}>
            <Link href={"?="+value}><button className={cl.butCh}>
            {value}
            </button></Link>
            </Grid>
            </li>
        )

    }

    return (
        <span>
            {list}
        </span>
    )
}

export default function chatWin() {
    const classes = useStyles();
    return (
        <><InsertS />{asdf(classes)}</>
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