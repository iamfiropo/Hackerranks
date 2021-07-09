/**
 * Question: https://www.hackerrank.com/challenges/counting-valleys
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function countingValleys(steps, path) {
  // Write your code here
  let level = 0;
  let valley = 0;

  for (let i = 0; i < steps; ++i) {
    if (path[i] === "U") {
      ++level;

      if (level === 0) ++valley;
    } else {
      --level;
    }
  }

  return valley;
}
