import { authWatcher, authWorker } from "./sagas";
import { takeEvery, call, put } from "redux-saga/effects";
import { auth } from "../api";
import { loginSuccess, loginFailure, handleLoginSubmit } from "./actions";

describe("testing saga", () => {
  const watcher = authWatcher();

  it("takes handleLoginSubmit action", () => {
    expect(watcher.next().value).toEqual(
      takeEvery(handleLoginSubmit, authWorker)
    );
  });

  const action = {
    type: "AUTH/HANDLE_LOGIN_SUBMIT",
    payload: { loginField: "test@test.com", passField: "123123" }
  };
  const worker = authWorker(action);

  it("calls auth function", async () => {
    expect(worker.next().value).toEqual(call(auth, "test@test.com", "123123"));
  });

  it("put response", () => {
    expect(worker.next("response").value).toEqual(
      put(loginSuccess("response"))
    );
  });

  it("put error", () => {
    expect(worker.throw(new Error("i am error")).value).toEqual(
      put(loginFailure(new Error("i am error")))
    );
  });
});
