/**
 *
 * @param {*} n
 * @param {*} ar
 *
 * Question: https://www.hackerrank.com/challenges/2d-array
 *
 * Approach: One pass
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function hourglassSum(arr) {
  // Write your code here
  let sumArray = [];
  let row = 0;
  let col = 0;
  let x = 0;

  while (x < 16) {
    if (x === 4 || x === 8 || x === 12) {
      ++row;
      col = 0;
    }
    
    const sum =
      arr[row][col] +
      arr[row][col + 1] +
      arr[row][col + 2] +
      arr[row + 1][col + 1] +
      arr[row + 2][col] +
      arr[row + 2][col + 1] +
      arr[row + 2][col + 2];

    ++x;
    ++col;

    sumArray.push(sum);
  }

  return Math.max(...sumArray);
}
