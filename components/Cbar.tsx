import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button, Divider, NoSsr, createStyles } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '../src/theme';

const useStyle = makeStyles((theme) => createStyles({
    root: {},
    serverName: {
        paddingLeft: '10px',
        paddingTop: '9px',
        paddingBottom: '9px',
        fontSize: '20px',
    },

}))

const chatWin = () => {
    const classes = useStyle();
    const router = useRouter();
    const channelID = router.asPath;
    return (
        <div className={classes.root}>
            <div className={classes.serverName}>
                <span >serverName</span>
            </div>
            <Divider />
        </div>

    );
}

export default chatWin;