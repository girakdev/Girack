import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button, Divider, NoSsr, createStyles } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';



const chatWin = () => {
    //URLのパス取得用
    const router = useRouter();
    const channelID = router.asPath;
    return (
        <>
            <div style={{ margin: "5% 10% 10% 10%" }} id="profile">
                <span>{/*このイメージはサンプルです*/}
                    <img style={{ width: "25%", height: "auto" }} src="https://image.flaticon.com/icons/svg/3011/3011270.svg"></img>
                    <div style={{ marginTop: 0, float: "right", width: "75%", textAlign: "center" }}>
                        <Button>user</Button>
                    </div>
                </span>
            </div>
            <Divider />
        </>

    );
}

export default chatWin;