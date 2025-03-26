export default function calculateTotalCost(
  paintCost: number,
  laborCost: number
): number {
  // Input validation
  if (typeof paintCost !== 'number' || typeof laborCost !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  if (isNaN(paintCost) || isNaN(laborCost)) {
    throw new Error('Inputs cannot be NaN');
  }

  // Handle all cases (including negatives and decimals)
  return paintCost + laborCost;
}