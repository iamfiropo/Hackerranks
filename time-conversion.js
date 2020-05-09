function timeConversion(s) {
  /*
   * Write your code here.
   * Using slice array method on the s time input string, remove "AM"/"PM", split the result and assign it to a variable
   * Using a ternary operator, write the following condition:
   *    if AM is in s time input string
   *      if hr i.e time[0] === '12'
   *        time[0] = '00'
   *      else:
   *        time[0]
   *    else:
   *      if hr i.e time[0] === '12'
   *        time[0] = '12'
   *      else:
   *        time[0] = Number(time[0] + 12)
   *
   * return hr i.e time[0], converting the array back to string using join array method
   */

  const time = s.slice(0, 8).split(":");

  time[0] =
    s.indexOf("AM") !== -1
      ? time[0] === "12"
        ? "00"
        : time[0]
      : time[0] === "12"
      ? "12"
      : Number(time[0]) + 12;
  return time.join(":");
}

timeConversion("07:05:45PM");
