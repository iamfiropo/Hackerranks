function gradingStudents(grades) {
  /**
   * create a remainder variable
   * use map functional method to iterate over the grading array
   * using a ternary operator, return either the rounded or the unchanged grade
   */

   return grades.map(grade => {
     const remainder = grade % 5
     return grade >= 38 && remainder >= 3 ? grade + 5 - remainder : grade
   })
}