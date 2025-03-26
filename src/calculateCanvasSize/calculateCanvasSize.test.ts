import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize - Area Calculation", () => {
  // Basic functionality
  test("calculates area for positive integers", () => {
    expect(calculateCanvasSize("10", "20")).toBe(200);
    expect(calculateCanvasSize("3", "7")).toBe(21);
  });
  // Edge cases
  test("handles zero values correctly", () => {
    expect(calculateCanvasSize("0", "15")).toBe(0);
    expect(calculateCanvasSize("10", "0")).toBe(0);
    expect(calculateCanvasSize("0", "0")).toBe(0);
  });
  
});