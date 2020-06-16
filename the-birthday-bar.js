/**
 * 
 * @param {*} s 
 * @param {*} d 
 * @param {*} m 
 * create counter variable
 * create summation function to sum up the values
 * iterate over s array
 * use slice array method to the contigent length of array to be summed
 * check if each sum === d, increment counter
 * return counter
 * 
 * 
 */
function birthday(s, d, m) {
  let counter = 0;
  let summation = (a, c) => a + c;
  for (let i = 0; i < s.length; i++) {
    let temp = s.slice(i, m + i);
    if (temp.reduce(summation) === d) {
      counter++;
    }
  }
  return counter;
}
birthday([1, 2, 1, 3, 2], 3, 2);
