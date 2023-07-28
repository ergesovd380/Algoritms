// Линейный поиск
const array = [1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 6, 7, 13, 14, 15]   // последовательность не обязательно
let count = 0

function linearSearch(array, item) {
  for(let i=0; i < array.length; i++) {
    count += 1
    if(array[i] === item) {
      return i
    }
  }
  return 'Такого элемента нет в массиве'
}

const func = linearSearch(array, 8)
console.log(func) // 1 место нахождение элемента
console.log(count) // 2 количество иторации
