import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize - Area Calculation", () => {
  // Basic functionality
  test("calculates area for positive integers", () => {
    expect(calculateCanvasSize("10", "20")).toBe(200);
    expect(calculateCanvasSize("3", "7")).toBe(21);
  });
  
});