import { capitalize } from "../../src/utils/capitalize";

describe("capitalize helper", () => {
  it("should capitalize the first letter", () => {
    expect(capitalize("heLLO")).toBe("Hello");
    expect(capitalize("HELLO")).toBe("Hello");
  });

  it("should return empty string when the input is empty", () => {
    expect(capitalize("")).toBe("");
  });
});
