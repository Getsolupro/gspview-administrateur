import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import validator from "validator";

import { AuthContext } from "../../context";

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
  error: {
    width: "100%",
    backgroundColor: "#94142c",
    height: "3em",
    borderRadius: "10px",
  },
  errorText: {
    color: "#fff",
    textAlign: "center",
    paddingTop: "0.8em",
  },
});

const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const { signIn } = useContext(AuthContext);
  //const history = useHistory();

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>Connectez-vous à votre compte</h2>
      
      <form noValidate autoComplete="off">
        
        {error ? (
            <div className={classes.error}>
            <p className={classes.errorText}>{error}</p>
            </div>
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
