import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core"
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

const useStyles = makeStyles((theme) => createStyles({
    '@global': {
        '*::-webkit-scrollbar': {
            height: theme.spacing(1),
            width: theme.spacing(1),
        },
        '*::-webkit-scrollbar-track': {
            display: 'none',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
        },
    },
}));

type Props = {
    Component: any,
    pageProps: any,
};

const MyApp = (props: Props) => {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    useStyles();

    return (
        <React.Fragment>
            <Head>
                <title>My App</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default MyApp;
