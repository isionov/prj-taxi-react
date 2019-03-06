import { fork } from "redux-saga/effects";
import { authWatcher } from "./Auth";
import { fetchAddressWatcher, fetchCoordsWatcher } from "./Order";

function* rootSaga() {
  yield fork(authWatcher);
  yield fork(fetchAddressWatcher);
  yield fork(fetchCoordsWatcher);
}

export default rootSaga;
