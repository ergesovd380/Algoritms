// Бинарный поиск
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]   // последовательность обязательно 
let count = 0

function binarySearch(array, item) {
  let position = -1;
  let found = false;
  let start = 0;
  let end = array.length;
  let middle;
  while(found === false && start <= end) {              // while это значит, если внутри скопки true значит переходит вниз, если false нижние коды не будут работать
    middle = Math.floor((start + end) / 2);
    count += 1
    if(array[middle] === item) {
      found = true
      position = middle
      return position;
    }
    if(array[middle] > item) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

const func = binarySearch(array, 2)
console.log(func) // 1 место нахождение элемента
console.log(count) // 3 количество иторации


/*
  Бинарный поиск рекурсивном способом
*/
const arrayRek = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]   // последовательность обязательно 
let countRek = 0

function binaryRekSearch(array, item, start, end) {
  let middleRek = Math.floor((start + end) / 2)
  countRek += 1
  if(item === array[middleRek]) {
    return middleRek;
  }
  if(item < array[middleRek]) {
    return binaryRekSearch(array, item, start, middleRek -1);
  } else {
    return binaryRekSearch(array, item, middleRek + 1, end);
  }
}

const funcRek = binaryRekSearch(arrayRek, 2, 0, arrayRek.length)
console.log(funcRek) // 1 место нахождение элемента
console.log(countRek) // 3 количество иторации
