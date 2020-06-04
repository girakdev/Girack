import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%"
  },
  drawer: {
    width: "100%"
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: "100%"
    },
    backgroundColor: "#EEE"
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {},
  content: {
    flexGrow: 1,
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {["general", "random", "devs", "MI"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* ここにコメント一番下の要素が入る*/}
        <Drawer
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
    </>
  );
}

export default ResponsiveDrawer;
/* もともとHiddenのすぐ上にあった要素
<Hidden implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
*/