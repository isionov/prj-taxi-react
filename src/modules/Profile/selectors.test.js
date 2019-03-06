import { getInitialState } from "./selectors";

describe("selector takes info properly", () => {
  it("selector takes profileInit", () => {
    expect(getInitialState({ profileInit: "init" })).toEqual("init");
  });
  it("selector takes undefined", () => {
    expect(getInitialState({ other: "init" })).toEqual(undefined);
  });
});
