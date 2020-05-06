function plusMinus(arr) {
  let totalCount = (arr || []).length;
   let { posNum, negNum, zeroNum } = (arr || []).reduce((target, item) => {
       !item
           ? target['zeroNum']++
           :
           (item > 0
               ? target['posNum']++
               : target['negNum']++
           );

       return target;
   }, { zeroNum: 0, posNum: 0, negNum: 0 });

   console.log(`${posNum / totalCount}\n${negNum / totalCount}\n${zeroNum / totalCount}`);
}

plusMinus([-4, 3, -9, 0, 4, 1])

function plusMinus(arr) {
  // create a variable to store the array length
  // create 3 variables i.e positiveCount, negativeCount, zeroCount
  // using forEach loop, set condition using Math.sign()
  // return the 3 variables created in step one with each variable divided by ...
  // inputed array length

  const arrLength = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arrLength; i++) {
      !Math.sign(arr[i]) ? zeroCount += 1
      :
      (Math.sign(arr[i]) === 1 ? positiveCount += 1 : negativeCount += 1)  
    }

  positiveCount = (positiveCount/arrLength).toFixed(6)
  negativeCount = (negativeCount/arrLength).toFixed(6)
  zeroCount = (zeroCount/arrLength).toFixed(6)

  console.log(`${positiveCount}\n${negativeCount}\n${zeroCount}`);
}