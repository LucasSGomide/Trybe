// Declarar variáveis

let percentage = -30;
let grade = 0;

// Software that get a grade  in percentage input then turns into A B C D E F:

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else if (percentage >= 50) {
  grade = "E";
} else if (percentage < 50) {
  grade = "F";
} else if (percentage > 100 || percentage < 0) {
    grade = "Error <grade between 0 and 100>";
} else  {
  grade = "Error wrong input";
}

console.log(grade)