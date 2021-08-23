import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon  from '@material-ui/icons/Home';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          <Button color="inherit" onClick={()=>{props.show()}}>CART({props.cart.length})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
function mapStateToProps(state){
  return {cart:state.cart};
}
export default connect(mapStateToProps)(Header);



