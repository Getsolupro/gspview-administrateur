import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

//import MainHeader from "../../components/Header/mainHeader";
//import MainFooter from "../../components/Footer/mainFooter";
//import MainDashBoard from "../../components/Dashboard";
//import SideBar from "../../components/SideBar";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  rightContent: {
    width: "80%",
  },
});

const DashBoard = () => {
  const loginState = useSelector((state) => state.auth);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      DashBoard
    </div>
  );
};

export default DashBoard;
