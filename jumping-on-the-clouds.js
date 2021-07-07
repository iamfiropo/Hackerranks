/**
 * Question: https://www.hackerrank.com/challenges/jumping-on-the-clouds
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function jumpingOnClouds(c) {
  // Write your code here
  let jumps = 0;
  let idx = 0;

  do {
    ++jumps;
    idx = c[idx + 2] === 0 ? idx + 2 : idx + 1;
  } while (idx < c.length - 1);

  return jumps;
}
