import React, { useCallback, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Container,
  Divider,
  Drawer,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

import Card from "../src/components/Card";
import AppBar from "../src/components/Appbar";
import DrawerContent from "../src/components/Drawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: 900,
      padding: theme.spacing(3),
    },
    grid: {
      flexGrow: 1,
      padding: theme.spacing(3),
      paddingTop: 90,
    },

    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: theme.drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerPaper: {
      width: theme.drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Main() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((p) => !p);
  }, []);

  const container =
    global !== undefined ? () => window.document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar onDrawer={handleDrawerToggle}></AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerContent></DrawerContent>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerContent></DrawerContent>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.grid}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} justify="center">
            {Array.from({ length: 18 }).map((_, index) => (
              <Grid item xs key={index}>
                <Card></Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
