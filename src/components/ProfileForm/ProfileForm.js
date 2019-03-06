import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import NumberFormat from "react-number-format";

import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { withLocalStorage } from "../HOCs/withLocalstorage";

import { isNumeric } from "../../modules/api.js";
import { getLoggedStatus } from "../../modules/Auth";

const styles = () => ({
  wrap: {
    width: "960px",
    height: "360px",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "5px"
  }
});

const validate = values => {
  const errors = {};
  if (
    values.numberCardField &&
    values.numberCardField.split(" ").join("").length !== 16
  ) {
    errors.numberCardField = "В номере карты 16 цифр";
  }
  if (values.cvvField && !isNumeric(values.cvvField)) {
    errors.cvvField = "CVV может содержать только цифры";
  } else if (values.cvvField && values.cvvField.length !== 3) {
    errors.cvvField = "CVV состоит из 3 цифр";
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
      label={label}
      placeholder={label}
      helperText={touched && error}
      {...input}
      {...custom}
      error={touched && error}
      fullWidth
    />
  );
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange(values.value);
      }}
      format="#### #### #### ####"
    />
  );
}

class ProfileForm extends Component {
  render() {
    const { handleSubmit, classes, saveData } = this.props;

    const submit = values => {
      saveData(values);
    };

    return (
      <form onSubmit={handleSubmit(submit)}>
        <Grid container className={classes.wrap} spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Профиль
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Field
              name="nameField"
              type="text"
              id="name-field"
              required={true}
              component={renderTextField}
              label="Имя владельца"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="dateField"
              type="date"
              id="date-field"
              required={true}
              InputLabelProps={{
                shrink: true
              }}
              component={renderTextField}
              label="Дата окончания действия"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="numberCardField"
              type="text"
              id="numberCard-field"
              required={true}
              component={renderTextField}
              label="Номер карты"
              InputProps={{ inputComponent: NumberFormatCustom }}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="cvvField"
              type="text"
              id="cvv-field"
              required={true}
              component={renderTextField}
              label="CVV"
            />
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" type="submit">
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: getLoggedStatus(state)
});

const mapDispatchToProps = {};

export default withLocalStorage("profileData", null)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    withStyles(styles)(
      reduxForm({
        form: "ProfileFormUnic",
        enableReinitialize: true,
        keepDirtyOnReinitialize: false,
        validate
      })(ProfileForm)
    )
  )
);
