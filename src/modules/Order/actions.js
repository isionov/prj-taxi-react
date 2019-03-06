import { createAction } from "redux-actions";

export const ORDER_FETCH_ADDRESS = "ORDER/FETCH_ADDRESS";
export const ORDER_FETCH_COORDS = "ORDER/FETCH_COORDS";
export const ORDER_FETCH_ADDRESS_SUCCESS = "ORDER/FETCH_ADDRESS_SUCCESS";
export const ORDER_FETCH_COORDS_SUCCESS = "ORDER/FETCH_COORDS_SUCCESS";
export const ORDER_FETCH_COORDS_CLEAR = "ORDER/FETCH_COORDS_CLEAR";

export const fetchAddress = createAction(ORDER_FETCH_ADDRESS);
export const fetchCoords = createAction(ORDER_FETCH_COORDS);
export const fetchAddressSuccess = createAction(ORDER_FETCH_ADDRESS_SUCCESS);
export const fetchCoordsSuccess = createAction(ORDER_FETCH_COORDS_SUCCESS);
export const fetchCoordsClear = createAction(ORDER_FETCH_COORDS_CLEAR);
