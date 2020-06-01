// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  /**
   * declare bestCurrentScore, worstCurrentScore, bestScore and worstScore and default them to 0
   * loop over the scores array
   * if scores[i] > currentScore:
   *  bestScore += 1
   *  currentScore = scores[i]
   * 
   * else if scores[i] < currentScore:
   *  worstScore += 1
   *  currentScore = scores[i]
   * 
   * then return [bestScore, worstScore]
   */
  
  let bestCurrentScore = scores[0]
  let worstCurrentScore = scores[0]
  let bestScore = 0;
  let worstScore = 0;
  
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > bestCurrentScore) {
      ++bestScore;
      bestCurrentScore = scores[i]
    }
    else if (scores[i] < worstCurrentScore) {
      ++worstScore;
      worstCurrentScore = scores[i];
    }
  }
  return [bestScore, worstScore]
  
  }
  
  breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])