import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  topContent: {
    padding: "2em",
    margin: "2em",
    marginTop: "3em",
    marginBottom: "3em",
    backgroundColor: "#dadada",
    borderRadius: ".5em",
  },
  button: {
    color: "white",
    backgroundColor: "#ecc324",
    marginTop: "1em",
    "&:hover": {
      backgroundColor: "#94142c",
    },
  },
  lien: {
    textDecoration: "none",
    color: "white",
  },
  title: {
    color: "#043c6c",
  },
});

const DashBoardInfos = () => {
  const loginState = useSelector((state) => state.data);
  const classes = useStyles();

  return (
    <div className={classes.topContent}>
      {loginState.profile === "300F" ? (
        <>
          <Typography variant="h3" gutterBottom className={classes.title}>
            Bienvenue sur le panel fournisseur!
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Cette plate-forme vous permettra de gérer vos films plus facilement.
          </Typography>
          <Button variant="contained" className={classes.button}>
            <Link className={classes.lien} to="/profile">
              Voir votre profil
            </Link>
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h3" gutterBottom className={classes.title}>
            Bienvenue sur le panel d'administration de GSPview!
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            Cette plate-forme vous permettra de gérer les données plus
            facilement.
          </Typography>
          <Button variant="contained" className={classes.button}>
            <Link className={classes.lien} to="/profile">
              Voir votre profil
            </Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default DashBoardInfos;
