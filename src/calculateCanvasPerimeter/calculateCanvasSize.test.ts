import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result for normal inputs", () => {
    expect(calculateCanvasSize("10", "100")).toEqual(220);
    expect(calculateCanvasSize("5", "7")).toEqual(24);
  });
  
});
