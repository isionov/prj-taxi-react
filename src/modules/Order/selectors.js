import { createSelector } from "reselect";
import path from "ramda/src/path";

// export const getAddresses = createSelector(
//   [state => path(["order", "addresses"], state)],
//   addresses => addresses
// );
export const getAddresses = createSelector(
  [state => state.order.addresses],
  addresses => addresses
);
// export const getCoords = createSelector(
//   [state => path(["order", "coords"], state)],
//   coords => coords
// );
export const getCoords = createSelector(
  [state => state.order.coords],
  coords => coords
);
