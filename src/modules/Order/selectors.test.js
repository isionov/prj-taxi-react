import { getAddresses, getCoords } from "./selectors";

describe("test for selectors", () => {
  it("selector should get addresses", () => {
    expect(getAddresses({ order: { addresses: ["adr1", "adr2"] } })).toEqual([
      "adr1",
      "adr2"
    ]);
  });
  it("selector should get coords", () => {
    expect(getCoords({ order: { coords: ["coord1", "coord2"] } })).toEqual([
      "coord1",
      "coord2"
    ]);
  });
});
