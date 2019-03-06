import { fetchInitialState } from "./actions";
import { handleActions } from "redux-actions";

export const profileInit = handleActions(
  {
    [fetchInitialState]: (state, action) => action.payload
  },
  null
);
