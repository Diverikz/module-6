// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function nums(n) {
  let check = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      alert("not a simple number");
      check = false;

      break;
    }
  }
  if (check) alert("simple number");
}
let n = prompt("Input number under 1000");
if (n > 1000) {
  alert("wrong!");
} else if (n < 2) {
  alert("not a simple number");
} else {
  nums(n);
}
