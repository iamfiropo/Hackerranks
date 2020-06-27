/**
 *
 * @param {array} arr - [1, 4, 4, 4, 5, 3]
 * declare an empty object variable to hold the the typeNumbers of each bird
 * declare a counter variable maxCount to hold the most common bird
 * declare an empty array highestFrequentBird to hold the list of highest frequent bird
 *
 * using for-of loop, iterate over the array of birds, find the occurence of each bird and find the maximum counted bird
 * using for-in loop, iterate over the array of birds, find all the items that's equal to the maximum counted bird and push it to the highestFrequentBird array
 * return the least value of the highestFrequentBird array
 */
function migratoryBirds(arr) {
  let typeNumbers = {};
  let maxCount = 0;
  let highestFrequentBird = [];

  /**
   * Using the traditional for loop
   */
  // for (let i = 0; i < arr.length; i++) {
  //   if (!typeNumbers[arr[i]]) {
  //     typeNumbers[arr[i]] = 1
  //   } else {
  //     typeNumbers[arr[i]]++
  //   }

  //   if (typeNumbers[arr[i]] > max) {
  //     maxCount = typeNumbers[arr[i]]
  //   }
  // }

  for (let char of arr) {
    if (!typeNumbers[char]) {
      typeNumbers[char] = 1;
    } else {
      typeNumbers[char]++;
    }

    if (typeNumbers[char] > maxCount) {
      maxCount = typeNumbers[char];
    }
  }

  for (let char in arr) {
    if (typeNumbers[char] === maxCount) {
      highestFrequentBird.push(char);
    }
  }
  return Math.min(...highestFrequentBird);
}

/**
 *
 * @param {*} arr
 * second approach, short but scalable...it's very slow
 */
function migratoryBirds(arr) {
  let occurence = 0;
  let counter = 1;
  let type = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    occurence = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
    if (occurence > counter) {
      counter = occurence;
      type = arr[i];
    }
  }
  return type;
}
