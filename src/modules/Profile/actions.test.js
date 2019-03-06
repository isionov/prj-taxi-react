import { fetchInitialState, PROFILE_FETCH_STATE } from "./actions";

describe("action has propper type", () => {
  it("type  is PROFILE_FETCH_STATE", () => {
    expect(fetchInitialState()).toEqual({ type: PROFILE_FETCH_STATE });
  });
});
