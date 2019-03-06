import { createSelector } from "reselect";
import path from "ramda/src/path";

export const getLoggedStatus = createSelector(
  [state => state.loggedIn],
  loggedIn => {
    return path(["success"], loggedIn);
  }
);
export const getErrorStatus = createSelector(
  [state => state.loggedIn],
  loggedIn => {
    return path(["error"], loggedIn);
  }
);
