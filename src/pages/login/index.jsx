import React from 'react'; 
import {makeStyles} from "@material-ui/core/styles";
import {Redirect} from "react-router-dom"
import logo from '../../assets/img/logo.png';

import LoginHeader from '../../components/Header/loginHeader';
import LoginForm from '../../components/LoginForm/loginForm';
import LoginFooter from '../../components/Footer/loginFooter';
import { url } from '../../api';

const useStyles = makeStyles({
    login: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        minHeight:'100vh'
    },
    image: {
        width: '225px',
        height: '85px'
    },
    middle: {
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        marginTop:'3em'
    }
});


const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.login}>
           <LoginHeader />
           <div className={classes.middle}>
                <img src={logo} alt="LOGO" className={classes.image} />
                <LoginForm />
            </div>
            <LoginFooter/>
        </div>
    );
}

export default Login;