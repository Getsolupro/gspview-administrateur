import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../context";
import { green } from "@material-ui/core/colors";
import axios from "axios";
import { signIn } from "../../redux/actions";
import {
  Navigate,
  Route
} from 'react-router-dom';
import { useNavigate } from "react-router";
import Login from "../../pages/login";

const useStyles = makeStyles({
  formContainer: {
    border: "1px solid #043c6c",
    borderRadius: "1em",
    padding: "2em",
    paddingTop: "2em",
    paddingBottom: "2em",
    marginTop: "3em",
    marginBottom: "3em",
    width: "300px",
  },
  title: {
    color: "#043c6c",
    fontWeight: "normal",
    textAlign: "center",
  },
  input: {
    width: "100%",
    marginTop: "1em",
    marginBottom: "1em",
    color: "#043c6c",
    "&::placeholder": {
      color: "#94142c",
    },
  },
  button: {
    width: "100%",
    color: "#fff",
    backgroundColor: "#043c6c",
    "&:hover": {
      backgroundColor: "#94142c",
    },
  },
  errorText: {
    color: "#fff",
    textAlign: "center",
    padding: "0em",
    padding: "0.4em",
    backgroundColor: "#94142c",
    borderRadius: "10px",
    height: "3em",
  },
});

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const { signIn } = useContext(AuthContext);
  const dispatch=useDispatch();
  let navigate = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPassChange = (e) => {
    setPass(e.target.value);
  };

  const { isAuthenticated, setIsAuthenticated}=useContext(AuthContext);
  let user=useSelector(state=>state.data);
  console.log("Debut user");
  console.log(user);
  console.log("Fin user");
  if(user.status==401){
    setError("L'e-mail que vous avez entré est incorrect! ");
  }
  else if(user.loggedIn){
     navigate("/");
  }

  const seConnecter =() => {

    if (!validator.isEmail(email)) {
      setError("L'e-mail que vous avez entré est incorrect! ");
      return console.log(error);
    }

        let credentials={
          email:email,
          password:password
        }
        dispatch(signIn(credentials));
      
        navigate("/");
      
        
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>Connectez-vous à votre compte</h2>
      
      <form noValidate autoComplete="off">
        
        {error ? (
            
               <p className={classes.errorText}>{error}</p>
           
        ) : null}
        <TextField
          id="outlined-error-helper-text"
          label="Adresse e-mail"
          variant="outlined"
          className={classes.input}
          onChange={(e) => onEmailChange(e)}
        />

        <TextField
          id="outlined-error-helper-text"
          label="Mot de passe"
          variant="outlined"
          type= "password"
          className={classes.input}
          onChange={(e) => onPassChange(e)}
          InputProps
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  //onClick={handleClickShowPassword}
                  //onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        
        <Button
          onClick={() => seConnecter()}
          className={classes.button}
          variant="contained"
        >
          Se connecter
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
