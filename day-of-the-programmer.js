/**
 * check if year is lesser than 1918
 *  check if year%4 === 0
 *    print 12.09.year
 *  else:
 *    print 13.09.year
 * else
 *  check if (year%400 === 0) || (year%4 === 0 && (year%100 !== 0))
 *    print 12.09.year
 *  else:
 *    print 13.09.year
 */
function dayOfProgrammer(year) {
  if (year === 1918) {
    return '26.09.' + year
  }
  else if (year < 1918 && year % 4 === 0 || (year % 400 === 0) || (year % 4 === 0 && (year % 100 !== 0))) {
    return '12.09.' + year
  }
  return '13.09.' + year
}

dayOfProgrammer(2016)