import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../GridContainer";
import CustomInput from "../CustomInput";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardAvatar from "../Card/CardAvatar";
import CardBody from "../Card/CardBody";
import Grid from "@material-ui/core/Grid";
import bootstrap from "bootstrap";
import { blue } from "@material-ui/core/colors";
import { border, margin } from "@mui/system";
import { useSelector } from "react-redux";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  content: {
    minHeight: "100vh",
    margin: "2em",
    marginTop: "3em",
    marginBottom: "3em",
    padding: "2em",
    backgroundColor: "#dadada"
  },
  cardHeaderProfile:{
    backgroundColor:"#A9EAFE",
    border :"1px solid #A9EAFE",
    paddingLeft:"10px",
    color: "#303030",
  },
  cardHeaderPersonnel:{
    backgroundColor:"#A9EAFE",
    border :"1px solid #A9EAFE",
    paddingLeft:"10px",
    color: "#303030",
    marginTop:"5em"
  },
  cardBody:{
    backgroundColor:"#FFFFFF",
    border :"1px solid #FFFFFF",
    padding:"10px",
    color: "#303030",
  },
  titreBodypersonnel:{
    color: "#303030",
    fontWeight:"bold",
    fontSize:"20px"
  }
};

const useStyles = makeStyles(styles);

const MainProfile = () => {
  const classes = useStyles();
  const [attributes, setAttributes] = useState({});
  const [picture, setPicture] = useState("");
  const data = useSelector((state) => state.data);
    console.log("Debut data");
    console.log(data);
    console.log("Fin data");
  return (
    <div className={classes.content}>
      <Grid container>
              <Grid items xs={12} sm={12} md={12}>
                    <div className="card">
                            <div className={classes.cardHeaderProfile}>
                                <h4> Votre profile</h4>
                            </div>
                            <div className={classes.cardBody}>
                                        {

                                        }
                            </div>
                    </div>
              </Grid>
              <Grid items xs={12} sm={12} md={12}>
                    <div className="card">
                            <div className={classes.cardHeaderPersonnel}>
                                <h4> Vos informations personnelles </h4>
                            </div>
                            <div className={classes.cardBody}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={classes.titreBodypersonnel}>Nom  : </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td className={classes.titreBodypersonnel}>Prenom  : </td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td className={classes.titreBodypersonnel}>Date inscription  : </td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                    </div>
              </Grid>
      </Grid>
    </div>
  );
};

export default MainProfile;
