/**
 *
 * @param {*} n
 * @param {*} k
 * @param {*} ar
 */
function divisibleSumPairs(n, k, ar) {
  let counter = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}

function divisibleSumPairs(n, k, ar) {
  let counter = 0;

  for (let i = 0; i < n; i++) {
    ar.slice(i + 1, n).filter((divisible) => {
      if ((ar[i] + divisible) % k === 0) {
        counter++;
      }
    });
  }
  return counter;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
