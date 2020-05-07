function miniMaxSum(arr) {

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
  }

  console.log(sum-max, sum-min)

}1132605