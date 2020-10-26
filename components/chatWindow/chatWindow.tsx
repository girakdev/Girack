import React from 'react';
import ReactDOM from 'react-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Paper, Button, Badge, Avatar } from '@material-ui/core';
import { useRouter } from 'next/router';
import theme from '../../src/theme';
import HomeIcon from '@material-ui/icons/Home';


import PostNote from './PostStyle'
import axios from 'axios';
import { get } from 'http';





const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: '100%',
        height: '100vh',
        position: 'relative',

    },
    channelText: {
        margin: '0px',
    },
    cw: {
        width: "80%",
        height: "70%",
        position: "relative"
    },
    chatHead: {
        marginTop: "10px",
        marginLeft: "20px",
        marginButtom: "10px",
        fontSize: "13px",
    },
    topicText: {
        paddingLeft: '10px',
        fontSize: "15px",
        paddingButtom: "20px",
    },
    chatWL: {
        width: "100%",
        height: "85%",
        paddingLeft: "2%",
        overflow: "auto",
    },
    /*消去予定--------------------------------------------------------------*/
    postText: {
        width: '100%',
        display: 'flex',
    },
    userPostIcon: {
        padding: '20px',
        paddingTop: '10px',
        paddingRight: '6px',
    },
    userPostname: {
        fontSize: '17px',
    },
    postTime: {
        fontSize: '10px',
        paddingLeft: '10px',
    },
    chatStyle: {
        fontSize: '15px',
        width: "100%",
        padding: "20px",
        paddingLeft: "0px",
        paddingTop: "5px",
        paddingBottom: "5px",
        display: 'flex',
    },
    /*ーーーーーーーーーーーーーーーーーーー--------------------ーーー*/
    bottomPosition: {
        width: '100%',
        position: 'absolute',
        bottom: '20px',
    },
    chatInputStyle: {
        marginLeft: "20px",

    },
}));

const chatWindow = () => {
    const classes = useStyles();
    const router = useRouter();
    const channelID = router.query.id;
    const topicText = "testtest"


    /* postの処理 */
    const [posts, setPost] = React.useState([]);
    const [tmpPost, setTmpPost] = React.useState("");

    const addPost = () => {
        if (tmpPost === "") {
            return;
        }

        setPost([...posts, tmpPost]);
        localStorage.setItem('posts', JSON.stringify([...posts, tmpPost]));
        setTmpPost("");

        /*API Post*/
        const args = {
            channel: channelID,
            text: tmpPost,
        }

        axios.post("http://localhost:3001/v1/message", args)
        /*.then(function (response) {
            console.log(response.data)
        })*/
        getText();
    };

    /*これは一時的なものなので消去予定*/
    const now = new Date();
    const mon = now.getMonth() + 1; //１を足すこと
    const day = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const s = mon + "/" + day + " " + hour + ":" + min;
    /*------------------*/

    // ref を作成しスクロールさせたい場所にある Element にセット
    const ref = React.createRef<HTMLDivElement>()
    const scrollToBottomOfList = React.useCallback(() => {
        ref!.current!.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
    }, [ref])

    /*get処理まだできてません*/
    const getText = () => {
        /*-- get 処理--*/
        axios.get('http://localhost:3001/v1/message', {
            params: {
                // ここにクエリパラメータを指定する
                channel: router.query.id,
            }
        }).then(function (response) {
            console.log(response.data);
        })
        /*-end- */
    }
    /*------end-----*/

    React.useEffect(() => {
        scrollToBottomOfList()
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.chatHead}>
                <title style={{ margin: 0 }}>#{router.query.id}</title>
                <h2 className={classes.channelText}>#{channelID}</h2>
                <div className={classes.topicText}>topic:{topicText}</div>
            </div>

            <Divider />
            <div className={classes.chatWL}>



                {posts.map((post, index) => (
                    <div key={(index)}>

                        <div className={classes.postText}>
                            <div className={classes.userPostIcon}>
                                <Avatar alt="Remy Sharp" src="" />
                            </div>
                            <div>
                                <div className={classes.userPostname} >user1
                                <span className={classes.postTime}>{s}</span>
                                </div>
                                <div className={classes.chatStyle}>{post}</div>
                            </div>
                        </div>

                    </div>
                ))}
                <div ref={ref} />
            </div>

            <div className={classes.bottomPosition}>
                <div className={classes.chatInputStyle}>
                    <span style={{ float: "left", marginRight: "3px", width: "100%" }}>
                        <TextField style={{ width: "90%", float: "left" }} label="メッセージ" variant="outlined"
                            value={tmpPost} onChange={e => setTmpPost(e.target.value)}
                            onKeyPress={e => {
                                if (e.key == 'Enter') {
                                    addPost();
                                    e.preventDefault();
                                    scrollToBottomOfList()
                                    getText();
                                }
                            }

                            } />
                        {/*<Button variant="contained" color="primary" onClick={addPost}>送信</Button>*/}
                    </span>
                </div>
            </div>
        </div >
    );

}

export default chatWindow;

