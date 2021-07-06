/**
 *
 * @param {*} n
 * @param {*} ar
 *
 * Question: https://www.hackerrank.com/challenges/sock-merchant
 *
 * Approach: Hash Table
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function sockMerchant(n, ar) {
  let count = 0;
  let pairedSeen = new Map();

  for (let num of ar) {
    if (pairedSeen.has(num)) {
      ++count;
      pairedSeen.delete(num);
    } else {
      pairedSeen.set(num);
    }
  }

  return count;
}

function sockMerchant(n, ar) {
  // Write your code here

  let count = 0;
  let map = {};

  for (let i = 0; i < ar.length; i++) {
    if (!(ar[i] in map)) {
      map[ar[i]] = true;
    } else {
      delete map[ar[i]];
      ++count;
    }
  }

  return count;
}
