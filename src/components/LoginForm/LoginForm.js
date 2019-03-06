import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import {
  getLoggedStatus,
  handleLoginSubmit,
  getErrorStatus
} from "../../modules/Auth";

const styles = () => ({
  wrap: {
    width: "340px",
    height: "300px",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "5px",
    justifyContent: "space-around"
  }
});

const validate = values => {
  const errors = {};
  if (values.loginField !== "test@test.com") {
    errors.loginField = "Неверный логин";
  }
  if (values.passField !== "123123") {
    errors.passField = "Неверный пароль";
  }
  return errors;
};

const renderTextField = props => {
  const {
    input,
    label,
    meta: { touched, error },
    ...custom
  } = props;
  return (
    <TextField
      fullWidth
      label={label}
      placeholder={label}
      helperText={touched && error}
      {...input}
      {...custom}
      error={touched && error && true}
    />
  );
};

const LoginForm = props => {
  const { handleSubmit, handleLoginSubmit, loggedIn, classes } = props;
  const submit = values => {
    handleLoginSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Grid
        container={true}
        spacing={8}
        direction="column"
        wrap="nowrap"
        className={classes.wrap}
      >
        <Grid item>
          <Typography align="center" variant="h5" color="textSecondary">
            Войти
          </Typography>
        </Grid>
        <Grid item>
          <Field
            name="loginField"
            type="text"
            id="login-field"
            required={true}
            component={renderTextField}
            label="Имя пользователя"
          />
        </Grid>
        <Grid item>
          <Field
            name="passField"
            type="password"
            id="pass-field"
            required={true}
            component={renderTextField}
            label="Пароль"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" type="submit">
            {"ВОЙТИ"}
          </Button>
        </Grid>
        {loggedIn ? <Redirect to="/map" /> : null}
      </Grid>
    </form>
  );
};

const mapStateToProps = state => ({
  loggedIn: getLoggedStatus(state),
  errorLog: getErrorStatus(state)
});
const mapDispatchToProps = { handleLoginSubmit };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withStyles(styles)(reduxForm({ form: "LoginFormUnic", validate })(LoginForm))
);
