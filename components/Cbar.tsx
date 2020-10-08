import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button, Divider, NoSsr, createStyles } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '../src/theme';
import HomeIcon from '@material-ui/icons/Home';

const useStyle = makeStyles((theme) => createStyles({
    root: {},
    serverName: {
        paddingLeft: '10px',
        paddingTop: '9px',
        paddingBottom: '9px',
        fontSize: '20px',
    },

}))



/*要調整*/
const chatWin = () => {
    const classes = useStyle();
    const router = useRouter();
    const channelID = router.asPath;
    return (
        <div className={classes.root}>
            <div className={classes.serverName}>
                <div><HomeIcon />
                    <span >   serverName</span>
                </div>
            </div>
            <Divider />
        </div>

    );
}

export default chatWin;