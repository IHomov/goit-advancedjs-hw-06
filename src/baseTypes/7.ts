/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: Weekend): boolean{
  return day === Weekend.Saturday|| day === Weekend.Sunday

}

isWeekend(Weekend.Monday);