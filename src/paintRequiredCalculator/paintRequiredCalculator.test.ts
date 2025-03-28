import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5);
  });
  // Decimal precision
  test("handles fractional values precisely", () => {
    expect(paintRequiredCalculator(75.5, 10)).toBeCloseTo(7.55);
    expect(paintRequiredCalculator(100, 3.33)).toBeCloseTo(30.03, 2);
  });
  test("returns Infinity when coverage is 0", () => {
    expect(paintRequiredCalculator(50, 0)).toBe(Infinity);
  });

  test("returns 0 when area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toBe(0);
  });
});
