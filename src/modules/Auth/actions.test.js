import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_RESET,
  AUTH_HANDLE_LOGIN_SUBMIT
} from "./actions";

import {
  loginSuccess,
  loginFailure,
  loginReset,
  handleLoginSubmit
} from "./actions";

describe("Action creator", () => {
  it("Action creator should return proper action", () => {
    expect(loginSuccess("customPayload")).toEqual({
      type: AUTH_LOGIN_SUCCESS,
      payload: "customPayload"
    });
  });
});
describe("Action creator", () => {
  it("Action creator should return proper action", () => {
    expect(loginFailure("customPayload")).toEqual({
      type: AUTH_LOGIN_FAILURE,
      payload: "customPayload"
    });
  });
});
describe("Action creator", () => {
  it("Action creator should return proper action", () => {
    expect(loginReset("customPayload")).toEqual({
      type: AUTH_LOGIN_RESET,
      payload: "customPayload"
    });
  });
});
describe("Action creator", () => {
  it("Action creator should return proper action", () => {
    expect(handleLoginSubmit("customPayload")).toEqual({
      type: AUTH_HANDLE_LOGIN_SUBMIT,
      payload: "customPayload"
    });
  });
});
