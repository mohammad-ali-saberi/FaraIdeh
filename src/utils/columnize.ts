/**
 * Split a flat array into N columns in a round-robin fashion.
 * Useful for masonry / staggered grids.
 *
 * @example
 * columnize([1,2,3,4,5], 3) // => [[1,4],[2,5],[3]]
 */
export function columnize<T>(items: readonly T[], cols = 3): T[][] {
  const safeCols = Number.isFinite(cols) && cols > 0 ? Math.floor(cols) : 1;

  const buckets: T[][] = Array.from({ length: safeCols }, () => []);
  for (let i = 0; i < items.length; i++) {
    buckets[i % safeCols].push(items[i] as T);
  }
  return buckets;
}
