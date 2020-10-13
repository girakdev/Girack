import React from 'react';
import clsx from 'clsx';
import { Button, createStyles, makeStyles } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ServerContent from './Cbar'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home';
import AddChannel from './AddChannel'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => createStyles({
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    addCannelButton: {
        marginTop: '10px',
        paddingLeft: '20px',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        background: theme.palette.primary.main,
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7),
        background: theme.palette.primary.main,
    },
    drawerFooter: {
        width: '100%',
        margin: 0,
        marginTop: 'auto',
        padding: 0,
        bottom: 0,
    },
}));

/*export type Item = {
    text: string,
};

type Props = {
    items: Item[],
};*/

const SideBar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Drawer
            color='primary'
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <ServerContent />

            <List>
                <Link href="/home" >
                    <ListItem button >
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="ホーム" />
                    </ListItem>
                </Link>

                <div className={classes.addCannelButton}>
                    <ListItemIcon>_/</ListItemIcon>
                チャンネル
                <AddChannel />
                </div>

                {["general", "randam",].map((text, index) => (
                    <Link key={index} href="/[id]" as={"/" + text}>
                        <ListItem button >
                            <ListItemIcon>＃</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}

                {/*{channels.map((channel, index) => (
            <Link key={index} href="/[id]" as={"/" + channel}>
            <ListItem button >
                <ListItemIcon>＃</ListItemIcon>
                <ListItemText primary={channel} />
            </ListItem>
            </Link>
        ))}*/}

                {/*{props.items.map((item) => (
            <ListItem button key={item.text}>
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary={item.text} />
            </ListItem>
        ))}*/}
            </List>


            <List className={clsx(classes.drawerFooter)}>
                <ListItem
                    button
                    key={open ? 'Collapse' : 'Expand'}
                    onClick={open ? handleDrawerClose : handleDrawerOpen}
                >
                    <ListItemIcon>{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}</ListItemIcon>
                    <ListItemText primary='Collapse' />
                </ListItem>
            </List>
        </Drawer >
    );
}

export default SideBar;
