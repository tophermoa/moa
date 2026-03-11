export function divideArray<T>(array: T[]) {
  const mid = Math.ceil(array.length / 2); // first half gets the extra one if odd
  const first = array.slice(0, mid);
  const second = array.slice(mid);
  return [first, second];
}
