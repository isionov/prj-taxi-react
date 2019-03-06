import { loginSuccess, loginFailure, loginReset } from "./actions";
import { loggedIn } from "./reducers";

describe("reducer Auth", () => {
  it("action loginSuccess adds payload", () => {
    const state = loggedIn(undefined, loginSuccess("succesPayload"));
    expect(state).toEqual("succesPayload");
  });
});
describe("reducer Auth", () => {
  it("action loginFailure adds payload", () => {
    const state = loggedIn(undefined, loginFailure("failurePayload"));
    expect(state).toEqual("failurePayload");
  });
});
describe("reducer Auth", () => {
  it("action reset", () => {
    const state = loggedIn(undefined, loginReset());
    expect(state).toEqual({ succes: false, error: "" });
  });
});
