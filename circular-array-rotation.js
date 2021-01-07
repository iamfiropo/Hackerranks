/**
 * declare lastIndex variable and assign the last index of the array to it
 * declare an empty rotatedArray variable;
 */

function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
    const lastIndex = a.pop();
    a.unshift(lastIndex);
  }

  queries.forEach((query) => console.log(a[query]));
}

circularArrayRotation([1, 2, 3], 2, [0, 1, 2]);
