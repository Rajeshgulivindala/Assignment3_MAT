import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result for normal inputs", () => {
    expect(calculateCanvasSize("10", "100")).toEqual(220);
    expect(calculateCanvasSize("5", "7")).toEqual(24);
  });
  test("handles zero values", () => {
    expect(calculateCanvasSize("0", "10")).toEqual(20);
    expect(calculateCanvasSize("0", "0")).toEqual(0);
  });
  test("handles decimal numbers by truncating", () => {
    expect(calculateCanvasSize("10.5", "20.9")).toEqual(60); // 2*(10+20) = 60
  });
  test("handles negative numbers", () => {
    expect(calculateCanvasSize("-10", "20")).toEqual(20);
    expect(calculateCanvasSize("-5", "-5")).toEqual(-20);
  });
});
