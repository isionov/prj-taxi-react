import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import App from "../App";

export default class RootRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    );
  }
}
