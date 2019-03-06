import {
  fetchAddressSuccess,
  fetchCoordsSuccess,
  fetchCoordsClear
} from "./actions";
import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

const addresses = handleActions(
  {
    [fetchAddressSuccess]: (state, action) => action.payload
  },
  []
);
const coords = handleActions(
  {
    [fetchCoordsSuccess]: (state, action) => action.payload,
    [fetchCoordsClear]: (state, action) => []
  },
  []
);

export const order = combineReducers({ addresses, coords });
