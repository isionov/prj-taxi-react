import { takeEvery, call, put } from "redux-saga/effects";
import { getAddress, getCoords } from "../api";
import {
  fetchAddress,
  fetchAddressSuccess,
  fetchCoords,
  fetchCoordsSuccess
} from "./actions";

export function* fetchAddressWatcher() {
  yield takeEvery(fetchAddress, fetchAddressWorker);
}

export function* fetchAddressWorker(action) {
  try {
    const res = yield call(getAddress);
    yield put(fetchAddressSuccess(res.addresses));
  } catch (error) {}
}

export function* fetchCoordsWatcher() {
  yield takeEvery(fetchCoords, fetchCoordsWorker);
}

export function* fetchCoordsWorker(action) {
  try {
    const res = yield call(getCoords, action.payload);
    yield put(fetchCoordsSuccess(res));
  } catch (error) {}
}
