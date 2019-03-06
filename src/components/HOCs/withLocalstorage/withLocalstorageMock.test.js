import React from "react";
import { withLocalStorage } from "./withLocalstorage";
import { mount } from "enzyme";
import * as localstorage from "./localstorage";

jest.mock("./localstorage");

describe("tests for HOC", () => {
  const TestComponent = () => React.createElement("p", null, "test");
  const wrapper = mount(
    React.createElement(withLocalStorage("asd", "ololo")(TestComponent))
  );
  const testComponent = wrapper.find("TestComponent");

  it("function save is called", () => {
    const mockFn = jest.fn();

    localstorage.save.mockImplementation(mockFn);
    testComponent.props().saveData();
    expect(mockFn).toBeCalled();
  });
});
