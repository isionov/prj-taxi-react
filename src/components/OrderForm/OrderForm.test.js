import { getOptions } from "./OrderForm";

describe("test for excluding search", () => {
  const options = [1, 2, 3, 4];
  it("method should return array without given elem", () => {
    expect(getOptions(options, { value: 3, label: 3 })).toEqual([
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 4, label: 4 }
    ]);
  });
  it("method should return initial array, key = 'text'", () => {
    expect(getOptions(options, "text")).toEqual([
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 }
    ]);
  });
  it("method should return initial array, key = false", () => {
    expect(getOptions(options, false)).toEqual([
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 }
    ]);
  });
  it("method should return initial array, key = undefined", () => {
    expect(getOptions(options, undefined)).toEqual([
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 }
    ]);
  });
});
