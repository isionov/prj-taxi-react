import React from "react";
import { withLocalStorage } from "./withLocalstorage";
import { mount } from "enzyme";

describe("tests for HOC", () => {
  const TestComponent = () => React.createElement("p", null, "test");
  const wrapper = mount(
    React.createElement(withLocalStorage("asd", "ololo")(TestComponent))
  );
  const testComponent = wrapper.find("TestComponent");
  const propsKey = Object.keys(testComponent.props());

  it("HOC fills with proppper props", () => {
    expect(propsKey).toContain("saveData");
    expect(propsKey).toContain("initialValues");
  });

  it("saveData and initialValues function correctly", () => {
    testComponent.props().saveData("hi all");
    wrapper.update();
    expect(wrapper.find("TestComponent").props().initialValues).toEqual(
      "hi all"
    );
  });
});
