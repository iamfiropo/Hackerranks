function kangaroo(x1, v1, x2, v2) {
  /**
   * check if jump distance first kangaroo v1 is lesser than v2
   *  if true, return 'NO'
   *  else if location of the first kangaroo and jump distance of the second kangaroo is lesser than the second and first respectively
   */

  if (v2 > v1) {
    return "NO";
  } else if (x1 < x2 && v2 < v1) {
    const xDiff = Math.abs(x1 - x2);
    const vDiff = Math.abs(v1 - v2);
    if (xDiff % vDiff == 0) {
      return "YES";
    } else {
      return "NO";
    }
  }
  return "NO";
}

kangaroo(0, 3, 4, 2);
