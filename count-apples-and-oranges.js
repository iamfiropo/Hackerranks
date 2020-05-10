function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(apples.filter(apple => s - a <= apple && apple <= t - a).length);
  console.log(oranges.filter(orange => s - b <= orange && orange <= t - b).length);
}

countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])