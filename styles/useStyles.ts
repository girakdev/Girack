import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    //チャンネルバーのスタイル
    bar: {
        height: "100%",
        width: "20%",
        maxWidth: "200px",
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "#faeee7",
        borderRight: "solid 1px #000",
    },
    //チャンネルウィンドウのスタイル（右）
    window: {
        height: "96%",
        width: "80%",
        position: "absolute",
        right: 0,
        top: 0,
        padding: 0,
        margin: 0
    }

}));

export default useStyles;
