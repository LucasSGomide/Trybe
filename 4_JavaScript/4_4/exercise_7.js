// Declarar variáveis

let percentage = -30;


// Software that get a grade in percentage input then turns into A B C D E F:

function gradeConverter(percentage) {
  let grade = 0;
  if (percentage >= 90) {
    return grade = "A";
  } else if (percentage >= 80) {
    return grade = "B";
  } else if (percentage >= 70) {
    return grade = "C";
  } else if (percentage >= 60) {
    return grade = "D";
  } else if (percentage >= 50) {
    return grade = "E";
  } else if (percentage < 50) {
    return grade = "F";
  } else if (percentage > 100 || percentage < 0) {
      return grade = "Error <grade between 0 and 100>";
  } else  {
    return grade = "Error wrong input";
  }
}

console.log(gradeConverter(percentage))