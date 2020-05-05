function diagonalDifference(arr) {
  let diagonalOne = 0
  let diagonalTwo = 0

  for (let i = 0; i < arr.length; i++) {
      diagonalOne += arr[i][i]
      diagonalTwo += arr[arr.length - 1 - i][i]
  }
  return Math.abs(diagonalOne - diagonalTwo)
}