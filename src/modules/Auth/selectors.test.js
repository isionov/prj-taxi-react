import { getLoggedStatus, getErrorStatus } from "./selectors";

describe("tests for selectors", () => {
  it("getLoggedStatus returns true ", () => {
    expect(getLoggedStatus({ loggedIn: { success: true } })).toEqual(true);
  });
  it("getLoggedStatus returns undefined ", () => {
    expect(getLoggedStatus({ loggedIn: { error: true } })).toEqual(undefined);
  });
});
describe("tests for selectors", () => {
  it("getLoggedStatus returns true ", () => {
    expect(getErrorStatus({ loggedIn: { error: true } })).toEqual(true);
  });
  it("getLoggedStatus returns undefined ", () => {
    expect(getErrorStatus({ loggedIn: { succes: true } })).toEqual(undefined);
  });
});
