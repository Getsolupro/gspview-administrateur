import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import minLogo from "../../assets/img/logo.png";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#f0f0f0",
    height: "64px",
  },
  minLogo: {
    height: "32px",
    width: "85px",
  },
  headerlink: {
    color: "#043c6c",
    textDecoration: "none",
    marginLeft: 20,
    marginTop: 10,
    "&:hover": {
      color: "#94142c",
      textDecoration: "underline",
    },
  },
});

const LoginHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
      <img src={minLogo} alt="LOGO" className={classes.minLogo} />
        <Link
          to="/help"
          className={classes.headerlink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Devenir fournisseur
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default LoginHeader;
