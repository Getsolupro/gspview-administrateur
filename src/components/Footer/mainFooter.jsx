import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor:'transparent',
    color: '#043c6c',
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  page: {
    marginLeft: '5px'
  },
  a: {
    textDecoration: "none",
    backgroundColor: "transparent",
    color:'#94142c',
    '&:hover': {
        textDecoration:'underline'
    }
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  block: {
    color: "#043c6c",
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: "12px",
    '&:hover': {
        color:'#94142c'
    },
    padding:'15px'
  }
}));

const MainFooter = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/about-us" className={classes.block}>
                A propos
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/contact-us" className={classes.block}>
                Contactez-nous
              </Link>
            </ListItem>
          </List>    
          <div className={classes.grow} />
          <span>
            &copy; {1900 + new Date().getYear()}{" "} Conçu et opéré par 
            <span className={classes.page}>
              <a href="https://getsolupro.com" target="_blank" rel="noreferrer" className={classes.a}>
                GetSOLUPRO SARL
              </a>
            </span>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainFooter;