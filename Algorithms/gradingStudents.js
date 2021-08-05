const nearestFiveMultiple = (number) => {
  let n = Math.ceil(number / 5);
  return n * 5;
};

/*function gradingStudents(grades) {
  let finalGrades = 0;
  let nearestFive = nearestFiveMultiple(grades);
  Math.abs(grades - nearestFive) < 3
    ? (finalGrades = nearestFive)
    : grades < 40
    ? (finalGrades = grades)
    : (finalGrades = grades);
  console.log(finalGrades);
  return finalGrades;
}
*/
function gradingStudents(grades) {
  let finalGrades = 0;
  let nearestFive = nearestFiveMultiple(grades);
  if (Math.abs(grades - nearestFive) < 3 && grades > 40) {
    finalGrades = nearestFive;
  } else {
    finalGrades = grades;
  }
  return finalGrades;
}

let testGrade0 = 73;
let testGrade1 = 75;
let testGrade2 = 67;
let testGrade3 = 40;
let testGrade4 = 33;
gradingStudents(testGrade0);
gradingStudents(testGrade1);
gradingStudents(testGrade2);
gradingStudents(testGrade3);
gradingStudents(testGrade4);
