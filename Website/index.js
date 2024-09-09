let testScores = 88;
let grade;

switch (true) {
  case testScores >= 90:
    grade = "A";
    break;

  case testScores >= 70:
    grade = "B";
    break;

  case testScores >= 60:
    grade = "C";
    break;

  case testScores >= 45:
    grade = "D";
    break;

  case testScores < 45:
    grade = "F";
    break;
}

console.log(grade);
