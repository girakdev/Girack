import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button, Divider, NoSsr, createStyles, Avatar } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '../src/theme';
import HomeIcon from '@material-ui/icons/Home';



const useStyle = makeStyles((theme) => createStyles({
    root: {},
    serverNameStyle: {
        display: 'flex',
        width: '100%',
        margin: '0',
        paddingLeft: '10px',
        paddingTop: '9px',
        paddingBottom: '9px',
        fontSize: '20px',
    },
    server: {
        paddingLeft: '5px',
        paddingTop: '5px',
    },
}))



/*要調整*/
const chatWin = () => {
    const classes = useStyle();
    const router = useRouter();
    const serverName = "TESTSERVER";
    const channelID = router.asPath;

    return (
        <div className={classes.root}>
            <div className={classes.serverNameStyle}>
                <div>
                    <Avatar alt="Remy Sharp" src="https://nos3.arkjp.net/?url=https%3A%2F%2Fimg.pawoo.net%2Faccounts%2Favatars%2F000%2F787%2F070%2Foriginal%2F17496375cdc.gif&thumbnail=1" />
                </div>
                <div className={classes.server}>
                    {serverName}
                </div>
            </div>
            <Divider />
        </div >

    );
}

export default chatWin;