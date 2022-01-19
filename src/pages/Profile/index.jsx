import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import MainHeader from '../../components/Header/mainHeader';
import MainFooter from '../../components/Footer/mainFooter';
import MainProfile from '../../components/Profile';
import SideBar from '../../components/SideBar'; 

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  rightContent: {
    width: '80%'
  }
});  

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideBar />
      <div className={classes.rightContent}>
        <MainHeader routeName="Mon profil"/>
        <MainProfile />
        <MainFooter />
      </div>
    </div>
  );
}

export default Profile;