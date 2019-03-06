import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RootRouter from "./RootRouter";
import "typeface-roboto";
import { mount } from "enzyme";

import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../../modules/rootReducer";
import saga from "../../modules/rootSaga";
import createSagaMiddleware from "redux-saga";

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
  Map: () => ({})
}));

describe("Root is completele mounted", () => {
  it("renders without crashing", () => {
    const sagaMiddleWare = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      compose(applyMiddleware(sagaMiddleWare))
    );
    sagaMiddleWare.run(saga);

    const wrapper = mount(
      <BrowserRouter debug>
        <Provider store={store}>
          <RootRouter />
        </Provider>
      </BrowserRouter>
    );
  });
});
