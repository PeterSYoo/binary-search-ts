export function find(haystack: Array<number>, needle: number): number {
  let start: number = 0;
  let end: number = haystack.length - 1;

  while (start <= end) {
    let middle: number = Math.floor((start + end) / 2);

    if (haystack[middle] === needle) {
      return middle;
    }
    if (haystack[middle] < needle) {
      start = middle + 1;
    }
    if (haystack[middle] > needle) {
      end = middle - 1;
    }
  }
  throw new Error('Value not in array');
}
