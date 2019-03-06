import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { withLocalStorage } from "../HOCs/withLocalstorage";

import {
  fetchAddress,
  fetchCoords,
  fetchCoordsClear
} from "../../modules/Order";
import { getAddresses, getCoords } from "../../modules/Order";

const styles = () => ({
  root: {
    position: "absolute",
    backgroundColor: "white",
    top: "25%",
    left: "5%"
  },
  wrap: {
    width: "400px",
    height: "300px",
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "5px",
    justifyContent: "space-around"
  },
  text: { fontSize: "14px", color: "light-grey" }
});

export const getOptions = (options, key) => {
  const res = [];
  options.forEach(function(elem) {
    if (!key || elem !== key.value) res.push({ value: elem, label: elem });
  });

  return res;
};

class OrderForm extends Component {
  state = {
    from: null,
    to: null,
    path: false,
    id: null
  };

  handleChangeFrom = from => {
    this.setState({ ...this.state, from });
  };
  handleChangeTo = to => {
    this.setState({ ...this.state, to });
  };

  handleClick = e => {
    const { from, to, path } = this.state;
    const { fetchCoords, coords, removePath, fetchCoordsClear } = this.props;

    if (coords.length === 0) {
      fetchCoords({ first: from.value, second: to.value });
    } else if (coords.length > 0 && path) {
      removePath();
      fetchCoordsClear();
      this.setState({ from: null, to: null, path: false });
    }
  };

  componentDidMount() {
    const { fetchAddress } = this.props;
    fetchAddress();
  }

  componentDidUpdate() {
    const { addPath, coords } = this.props;
    const { path } = this.state;
    if (coords.length > 0 && !path) {
      addPath(coords);
      this.setState({ ...this.state, path: true });
    }
  }

  render() {
    const { classes, addresses, initialValues } = this.props;
    const { from, to, path } = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <Grid
          className={classes.wrap}
          container
          spacing={8}
          direction="column"
          wrap="nowrap"
        >
          <Grid item>
            {initialValues ? (
              <Typography align="left" variant="h5" color="textSecondary">
                {path ? "Заказ размещен" : "Вызвать такси"}
              </Typography>
            ) : (
              <Typography align="left" variant="h5" color="textSecondary">
                {"Заполните платежные данные"}
              </Typography>
            )}
          </Grid>
          {initialValues ? (
            <Grid container item spacing={32} direction="column" wrap="nowrap">
              {path ? null : (
                <Grid item>
                  <Select
                    value={from}
                    onChange={this.handleChangeFrom}
                    options={getOptions(addresses, to)}
                    placeholder="Введите адрес отправления"
                    isClearable
                  />
                </Grid>
              )}

              {path ? (
                <Grid item>
                  <Typography className={classes.text}>
                    {"Такси приедет приблизительно через 10 минут"}
                  </Typography>
                </Grid>
              ) : (
                <Grid item>
                  <Select
                    value={to}
                    onChange={this.handleChangeTo}
                    options={getOptions(addresses, from)}
                    placeholder="Введите адрес прибытия"
                    isClearable
                    isSearchable
                  />
                </Grid>
              )}
            </Grid>
          ) : (
            <Grid item>
              <Typography className={classes.text}>
                {"Укажите информацию о банковской карте, чтобы сделать заказ."}
              </Typography>
            </Grid>
          )}

          <Grid item>
            {initialValues ? (
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleClick}
                disabled={from && to ? false : true}
              >
                {path ? "Сделать новый заказ" : "Заказать такси"}
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to={"/profile"}
              >
                {"Перейти в профиль"}
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  addresses: getAddresses(state),
  coords: getCoords(state)
});

const mapDispatchToProps = { fetchAddress, fetchCoords, fetchCoordsClear };

export default withLocalStorage("profileData", null)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(OrderForm))
);
