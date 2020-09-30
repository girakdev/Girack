import React from 'react';
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button, Divider, NoSsr } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';


const SettingButton = withStyles((theme) => ({
    root: {
        width: "100%",
        margin: "3%, 0, 0, 0",
        backgroundColor: null,
        height: "3ch",

        '&:hover': {
            backgroundColor: 'rgba(76, 211, 194, 0.4)',
            borderColor: "#4cd3c2",

        },

    }

}))(Button);

const chatWin = () => {
    //URLのパス取得用
    const router = useRouter();
    const channelID = router.asPath;
    return (
        <>
            <NoSsr> {/* サーバーサイドレンダリングを殺しています */}
                <div style={{ margin: "5% 10% 10% 10%" }} id="profile">
                    <span>{/*このイメージはサンプルです*/}
                        <img style={{ width: "25%", height: "auto" }} src="https://image.flaticon.com/icons/svg/3011/3011270.svg"></img>
                        <div style={{ marginTop: 0, float: "right", width: "75%", textAlign: "center" }}>
                            <Button>user</Button>
                        </div>
                    </span>
                </div>
                <Divider />
                <Grid
                    container direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    style={{ marginTop: "10%" }}
                >
                </Grid>
            </NoSsr>

        </>

    );
}

export default chatWin;