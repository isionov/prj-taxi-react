import { createSelector } from "reselect";

export const getInitialState = createSelector(
  [state => state.profileInit],
  profileInit => profileInit
);
