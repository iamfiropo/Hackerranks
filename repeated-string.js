/**
 * Question: https://www.hackerrank.com/challenges/repeated-string
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function repeatedString(s, n) {
  let strLength = s.length;
  let result = 0;

  let quotient = Math.floor(n / strLength);
  let remainder = n % strLength;

  let formula = quotient * getLetterCount(s, strLength);

  result = remainder === 0 ? formula : formula + getLetterCount(s, remainder);

  return result;
}

function getLetterCount(s, length) {
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (s.charAt(i) === "a") ++count;
  }

  return count;
}
