import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import LoginForm from "../LoginForm";
import Map from "../Map";
import PrivateRoute from "../PrivateRoute";
import ProfileForm from "../ProfileForm";

import { getLoggedStatus } from "../../modules/Auth";
import { loginReset } from "../../modules/Auth";
import { fetchInitialState } from "../../modules/Profile";

const styles = () => ({
  root: {
    height: "100vh"
  },
  wrap: {
    flexGrow: 1,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  appBar: { backgroundColor: "white" },
  title: { flexGrow: 1 },
  btn: { color: "rgba(0, 0, 0, 0.54)" }
});

class App extends Component {
  render() {
    const { classes, loggedIn, loginReset } = this.props;
    const handleClick = () => {
      if (loggedIn) loginReset();
    };

    return (
      <Grid
        className={classes.root}
        container={true}
        spacing={0}
        direction="column"
        wrap="nowrap"
      >
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid container>
              <Typography
                variant="h5"
                color="textSecondary"
                className={classes.title}
              >
                LoftTaxi
              </Typography>
              <Button
                className={classes.btn}
                component={Link}
                to={loggedIn ? "/map" : "/login"}
              >
                Карта
              </Button>
              <Button
                className={classes.btn}
                component={Link}
                to={loggedIn ? "/profile" : "/login"}
              >
                Профиль
              </Button>
              <Button
                className={classes.btn}
                onClick={handleClick}
                component={Link}
                to="/login"
              >
                {loggedIn ? "Выйти" : "Войти"}
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container={true} className={classes.wrap}>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/profile" component={ProfileForm} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: getLoggedStatus(state)
});

export default connect(
  mapStateToProps,
  { loginReset, fetchInitialState }
)(withStyles(styles)(App));
