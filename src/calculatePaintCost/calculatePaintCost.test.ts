import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
    expect(calculatePaintCost(10, -5)).toBe(-50);
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });
  test('should handle decimal values precisely', () => {
    expect(calculatePaintCost(3.5, 2.5)).toBeCloseTo(8.75); // 3.5 * 2.5 = 8.75
    expect(calculatePaintCost(1.25, 4)).toBe(5); // 1.25 * 4 = 5
  });
  test('should handle very large numbers', () => {
    expect(calculatePaintCost(1e6, 2.5)).toBe(2.5e6); // 1,000,000 * 2.5
    expect(calculatePaintCost(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });  
});
