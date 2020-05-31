function getTotalX(a, b) {
  /**
   * declare 3 variables for count, highest of a and lowest of b
   * find the max int of array a
   * find the min int of array b
   * loop starting from the max int of a and ending at the min int of b
   * if any element in the iteration % element of the array a === 0, and...
   * if any element in array b % any element in the iteration === 0, then increase count
   * return count
   */

  let count = 0
  const highestInt = Math.max(...a)
  const lowestInt = Math.min(...b)

  /**
   * Highest and lowest integers can be retrieved like this if they are not declared in ascending order
     const highestInt = a[a.length - 1]
     const lowestInt = b[0]
   */


  for (let i = highestInt; i<=lowestInt; i++) {
    if (a.every(item => i % item === 0)) {
      if (b.every(item => item % i === 0)) {
        count += 1
      }
    }
  }
  return count
}