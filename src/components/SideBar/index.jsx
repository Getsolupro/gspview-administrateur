import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Dashboard, Person, Language, Theaters, People } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/img/logo.png";

const drawerWidth = "20%";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  logo: {
    width: "113px",
    height: "43px",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  draw: {
    backgroundColor: "#043c6c",
    height: "100%",
  },
  listItem: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#94142c",
    },
  },
  listIcon: {
    color: "#fff",
    "&:hover": {
      color: "#94142c",
    },
  },
}));

const SideBar = (props) => {
  const loginState = useSelector((state) => state.data);
  const classes = useStyles();
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div className={classes.draw}>
      <div className={classes.img}>
        <img src={logo} alt="LOGO" className={classes.logo} />
      </div>
      <Divider />
      <List className={classes.listView}>
      {loginState.profile === "300F" ? (
          <>
            <NavLink to="/dashboard">
              <ListItem button>
                <ListItemIcon className={classes.listIcon}>
                  <Theaters />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary="Liste des films"
                />
              </ListItem>
            </NavLink>
            <NavLink to="/support">
              <ListItem button>
                <ListItemIcon className={classes.listIcon}>
                  <Language />
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary="Support" />
              </ListItem>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/dashboard">
              <ListItem button>
                <ListItemIcon className={classes.listIcon}>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText
                  className={classes.listItem}
                  primary="Liste des fournisseurs"
                />
              </ListItem>
            </NavLink>
            <NavLink to="/support">
              <ListItem button>
                <ListItemIcon className={classes.listIcon}>
                  <Language />
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary="Support" />
              </ListItem>
            </NavLink>
            <NavLink to="/support">
              <ListItem button>
                <ListItemIcon className={classes.listIcon}>
                  <People />
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary="Inscrire fournisseur" />
              </ListItem>
            </NavLink>
          </>
        )}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
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
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
