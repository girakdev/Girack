import { createStyles, List, makeStyles } from "@material-ui/core"
import Sidebar from '../components/SideBar';


const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
    },
}));


const Blog = () => {
    //通信するためのSocket
    //const socket = io();
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Sidebar />
            <h1>ここに通知欄が入る</h1>
        </div>
    );

}

export default Blog;