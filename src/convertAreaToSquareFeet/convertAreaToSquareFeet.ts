export default function convertAreaToSquareFeet(area: number): number {
  // Input validation
  if (typeof area !== 'number') {
    throw new Error('Input must be a number');
  }
  if (isNaN(area)) {
    throw new Error('Input cannot be NaN');
  }

  // Handle conversion
  const conversionFactor = 10.7639;
  return area * conversionFactor;
}