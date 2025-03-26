export default function paintRequiredForMultipleCoats(
  area: number,
  coveragePerLiter: number,
  coats: number
): number {
  // Input validation
  if ([area, coveragePerLiter, coats].some(isNaN)) {
    throw new Error('All inputs must be valid numbers');
  }
  if ([area, coveragePerLiter, coats].some(v => typeof v !== 'number')) {
    throw new Error('All inputs must be numbers');
  }
  
  // Handle edge cases
  if (area === 0 || coats === 0) return 0;
  if (coveragePerLiter === 0) return Infinity;

  // Calculate with precise decimals
  return (area / coveragePerLiter) * coats;
}