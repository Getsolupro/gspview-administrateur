import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import MainHeader from "../../components/Header/mainHeader";
import MainFooter from "../../components/Footer/mainFooter";
import MainDashBoard from "../../components/Dashboard";
import SideBar from "../../components/SideBar";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  rightContent: {
    width: "80%",
  },
});

const DashBoard = () => {
  const loginState = useSelector((state) => state.data);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.rightContent}>
        {loginState.profile === "300F" ? (
          <MainHeader routeName="Tableau de bord fournisseur" />
            ) : (
          <MainHeader routeName="Tableau de bord administration" />
        )}
        <MainDashBoard />
        <MainFooter />
      </div>
    </div>
  );
};

export default DashBoard;
