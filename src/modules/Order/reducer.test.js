import {
  fetchAddressSuccess,
  fetchCoordsSuccess,
  fetchCoordsClear
} from "./actions";
import { order } from "./reducers";

describe("test for reducer", () => {
  it("state initiates right", () => {
    const state = order(undefined, { type: "@@INIT" });
    expect(state).toEqual({ addresses: [], coords: [] });
  });
  it("state gets array of addresses", () => {
    const state = order(undefined, fetchAddressSuccess(["adr1", "adr2"]));
    expect(state).toEqual({ addresses: ["adr1", "adr2"], coords: [] });
  });
  it("state gets array of coords", () => {
    const state = order(undefined, fetchCoordsSuccess(["coord1", "coord2"]));
    expect(state).toEqual({ addresses: [], coords: ["coord1", "coord2"] });
  });
  it("state is cleared correctly", () => {
    const state = order(undefined, fetchCoordsClear());
    expect(state).toEqual({ addresses: [], coords: [] });
  });
});
