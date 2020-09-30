import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';

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

export type Item = {
  text: string,
};

type Props = {
  items: Item[],
};

const SideBar = (props: Props) => {
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
      <List>
        {props.items.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem button key='Add'>
          <ListItemIcon><AddIcon /></ListItemIcon>
          <ListItemText primary='Add' />
        </ListItem>
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
    </Drawer>
  );
}

export default SideBar;
