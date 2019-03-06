import { takeEvery, call, put } from "redux-saga/effects";
import { auth } from "../api";
import { loginSuccess, loginFailure, handleLoginSubmit } from "./actions";

export function* authWatcher() {
  yield takeEvery(handleLoginSubmit, authWorker);
}

export function* authWorker(action) {
  const { loginField, passField } = action.payload;
  try {
    const res = yield call(auth, loginField, passField);
    yield put(loginSuccess(res));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
