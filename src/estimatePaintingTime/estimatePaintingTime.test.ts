import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  test('should return Infinity for painting speed of 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(estimatePaintingTime(-100, 10)).toBe(-10);
    expect(estimatePaintingTime(100, -10)).toBe(-10);
    expect(estimatePaintingTime(-100, -10)).toBe(10);
  });
  test('should handle decimal values precisely', () => {
    expect(estimatePaintingTime(75.5, 10)).toBeCloseTo(7.55);
    expect(estimatePaintingTime(100, 7.5)).toBeCloseTo(13.333, 3);
  });
  test('should handle very large numbers', () => {
    expect(estimatePaintingTime(1e6, 1e3)).toBe(1e3);
    expect(estimatePaintingTime(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER);
  });
  test('should return NaN for invalid inputs', () => {
    expect(estimatePaintingTime(NaN, 10)).toBeNaN();
    expect(estimatePaintingTime(100, NaN)).toBeNaN();
  });
});

