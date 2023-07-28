//   Кеширования
const cashFunc = (fn) => {
  const cash= {};

  return function(n) {
    if(cash[n]) {
      console.log('Взято из кеша ' + cash[n]);
      return cash[n];
    }
    let result = fn(n);
    cash[n] = result;
    console.log('Функция сгенерировал ' + result);
    return result;
  }
}

const factorial = (num) => {
  let result = 1;
  while (num !== 1) {
    result *= num;
    num -= 1;
  }
  return result;
}

const cashFactorialFunc = cashFunc(factorial);
console.log(cashFactorialFunc(5));
console.log(cashFactorialFunc(3));
console.log(cashFactorialFunc(5));