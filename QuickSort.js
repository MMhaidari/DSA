function qs(arr, lo, hi) {

  if (lo >= hi) return;

  if (lo < hi) {
    const p = partition(arr, lo, hi);
    qs(arr, lo, p - 1);
    qs(arr, p + 1, hi);
  }

}

function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] < pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  idx++;
  [arr[idx], arr[hi]] = [pivot, arr[idx]];

  return idx;
}

function quickSort(arr) {
  qs(arr, 0, arr.length - 1)
  return arr;
}

console.log(quickSort([8, 4, 7, 6, 15, 10, 2, 5, 3, 1, 9]))