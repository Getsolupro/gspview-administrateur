import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  links: {
    display: "flex",
    flexDirection: "row",
  },
  footerLinks: {
    color: "#043c6c",
    textDecoration: "none",
    marginLeft: 10,
    "&:hover": {
      color: "#94142c",
      textDecoration: "underline",
    },
  },
  text: {
    color: "#043c6c",
  },
  externalLink: {
    color: "#94142c",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const LoginFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.links}>
        <Link
          to="/privacy-policy"
          className={classes.footerLinks}
          target="_blank"
          rel="noopener noreferrer"
        >
          Politique de confidentialité
        </Link>
        <Link
          to="/usage-terms"
          className={classes.footerLinks}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conditions d'utilisation
        </Link>
      </div>
      <div>
        <p className={classes.text}>
          Conçu et opéré par
          <a
            className={classes.externalLink}
            href="https://getsolupro.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GetSOLUPRO SARL
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginFooter;
