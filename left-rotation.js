/**
 *
 * @param {*} a
 * @param {*} d
 * Question: https://www.hackerrank.com/challenges/array-left-rotation/problem
 */
function rotLeft(a, d) {
  d %= a.length;

  while (d) {
    a.push(a.shift());
    d--;
  }

  return a;
}
