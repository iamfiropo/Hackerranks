function test1() {
  for (let i = 1; i <= 99; ++i) {
    if (i % 21 === 0) {
      console.log("OpenSource");
    } else if (i % 3 === 0) {
      console.log("Open");
    } else if (i % 7 === 0) {
      console.log("Source");
    } else {
      console.log(i);
    }
  }
}

function test3(arr) {
  let sum = 0;

  for (let char of arr) {
    if (typeof char === "number") {
      sum += char;
    }
  }

  return sum;
}
/* test case
let arr = [1,2,'d', 3, '7']
console.log(test3(arr))
*/

function test9() {
  let result = [];
  let i = "A".charCodeAt(0);
  let j = "Z".charCodeAt(0);

  for (; i <= j; i++) {
    char = String.fromCharCode(i);
    result.push(char);
  }

  return result;
}

function test8(n) {
  let regex = /

  if (regex.match(n)) return true;

  return false;
}
