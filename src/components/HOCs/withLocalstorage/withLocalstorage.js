import React, { Component } from "react";
import { load, save } from "./localstorage.js";

export const withLocalStorage = (keyLs, initValue) => WrappedComponent => {
  return class Wrapper extends Component {
    loadLocalstorage = () => load(keyLs) || initValue;
    saveData = data => {
      save(keyLs, data);
      // this.forceUpdate();
      this.setState({ ...this.state });
    };

    render() {
      const { ...rest } = this.props;

      return (
        <WrappedComponent
          {...rest}
          initialValues={this.loadLocalstorage()}
          saveData={this.saveData}
        />
      );
    }
  };
};
