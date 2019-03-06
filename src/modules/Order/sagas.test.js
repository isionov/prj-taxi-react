import { fetchAddressWorker, fetchCoordsWorker } from "./sagas";

import { takeEvery, call, put } from "redux-saga/effects";
import { getAddress, getCoords } from "../api";
import {
  fetchAddress,
  fetchAddressSuccess,
  fetchCoords,
  fetchCoordsSuccess
} from "./actions";

describe("fetchAddressWorker", () => {
  const addressWorker = fetchAddressWorker(fetchAddress());
  it("fetchAddressWorker calls getAddress", () => {
    expect(addressWorker.next().value).toEqual(call(getAddress));
  });

  it("fetchAddressWorker puts resp.addresses", () => {
    expect(addressWorker.next({ addresses: "resp" }).value).toEqual(
      put(fetchAddressSuccess("resp"))
    );
  });
});

describe("fetchCoordsWorker", () => {
  const coordsWorker = fetchCoordsWorker(
    fetchCoords({ first: "Пулково (LED)", second: "Шаверма на Невском" })
  );
  it("", () => {
    expect(coordsWorker.next().value).toEqual(
      call(getCoords, { first: "Пулково (LED)", second: "Шаверма на Невском" })
    );
  });

  it("", () => {
    expect(coordsWorker.next("resp").value).toEqual(
      put(fetchCoordsSuccess("resp"))
    );
  });
});
