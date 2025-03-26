export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
): number {
  // Input validation
  if (typeof area !== 'number' || typeof coveragePerLiter !== 'number') {
    throw new Error('Both inputs must be numbers');
  }

  // Handle edge cases
  if (area === 0) return 0;
  if (coveragePerLiter === 0) return Infinity;

  // Calculate with precise decimals
  return area / coveragePerLiter;
}