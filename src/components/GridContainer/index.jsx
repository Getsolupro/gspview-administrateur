import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = {
  grid: {
    padding: "20px",
  },
};

const useStyles = makeStyles(styles);

const GridContainer = (props) => {
  const classes = useStyles();
  const { children, ...rest } = props;

  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
};

export default GridContainer;
