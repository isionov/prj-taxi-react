import {
  ORDER_FETCH_ADDRESS,
  ORDER_FETCH_COORDS,
  ORDER_FETCH_ADDRESS_SUCCESS,
  ORDER_FETCH_COORDS_SUCCESS,
  ORDER_FETCH_COORDS_CLEAR
} from "./actions";

import {
  fetchAddress,
  fetchCoords,
  fetchAddressSuccess,
  fetchCoordsSuccess,
  fetchCoordsClear
} from "./actions";

describe("Action creator", () => {
  it("Action creator should return proper action", () => {
    expect(fetchAddress("Custom payload")).toEqual({
      type: ORDER_FETCH_ADDRESS,
      payload: "Custom payload"
    });
  });
  it("Action creator should return proper action", () => {
    expect(fetchCoords("Custom payload")).toEqual({
      type: ORDER_FETCH_COORDS,
      payload: "Custom payload"
    });
  });
  it("Action creator should return proper action", () => {
    expect(fetchAddressSuccess("Custom payload")).toEqual({
      type: ORDER_FETCH_ADDRESS_SUCCESS,
      payload: "Custom payload"
    });
  });
  it("Action creator should return proper action", () => {
    expect(fetchCoordsSuccess("Custom payload")).toEqual({
      type: ORDER_FETCH_COORDS_SUCCESS,
      payload: "Custom payload"
    });
  });
  it("Action creator should return proper action", () => {
    expect(fetchCoordsClear("Custom payload")).toEqual({
      type: ORDER_FETCH_COORDS_CLEAR,
      payload: "Custom payload"
    });
  });
});
