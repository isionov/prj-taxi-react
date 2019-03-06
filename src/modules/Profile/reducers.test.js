import { profileInit } from "./reducers";
import { fetchInitialState } from "./actions";

describe("tests for reducer profileInit", () => {
  it("reducer initiate state correctly", () => {
    expect(profileInit(undefined, { type: "@@INIT" })).toEqual(null);
  });

  it("reducer put payload correctly", () => {
    expect(profileInit(null, fetchInitialState("payload"))).toEqual("payload");
  });
});
