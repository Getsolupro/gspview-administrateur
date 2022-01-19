import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import DashBoardInfos from "./info";
//import DashBoardList from "./lists";
//import DashBoardListMovies from "./listMovies";

const useStyles = makeStyles({
  content: {
    minHeight: "100vh",
  },
});

const MainDashBoard = () => {
  const profile = useSelector((state) => state.profile);
  const classes = useStyles();

  console.log(profile);

  return (
    <div className={classes.content}>
      <DashBoardInfos />
    </div>
  );
};

export default MainDashBoard;