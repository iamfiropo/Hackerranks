/**
 * 
 * @param {*} ar 
 * Create a tallestCandle variable, Use Math.max to find the highest value in the array and assign it to the created variable
 * Create a counter variable
 * Loop through the array and find the number of occurrence of the highest value
 */
function birthdayCakeCandles(ar) {
  const tallestCandle = Math.max(...ar)
  let counter = 0

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === tallestCandle) {
      counter += 1
    }
  }
  return counter;

}

function birthdayCakeCandles(ar) {
  const tallestCandle = Math.max(...ar)

  return ar.filter(candle => candle === tallestCandle).length
}