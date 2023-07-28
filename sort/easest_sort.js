// самый легкий вариант для того чтобы сортировать массив
function highAndLow(nums){
  let numbers = nums.split(' ');
  let sorted = numbers.sort(function (a, b) {
    return Number(a) - Number(b);
  });
  // return sorted.map(string => +string)
  // return sorted.map(num => parseInt(num))                          // это одно и то же
  return sorted[sorted.length - 1] + " " + sorted[0]
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
