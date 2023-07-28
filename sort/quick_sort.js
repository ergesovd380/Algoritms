// Быстрая сортировка
const array = [1, 8, 9, 10, 12, 3, 4, 5, 6, 7, 13, 14, 2, 15, 11];
let count = 0;

const sortArray = (array) => {
  if(array.length <= 1) {                                             // Если длина массива равно или меньше 1-го, тогда надо возвращать сам массив
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);                      // Находим опорный элемент
  let pivot = array[pivotIndex];                                      // Значение опорного элемента
  let less = [];                                                      // Массив для значений меньше опорного
  let greater = [];                                                   // Массив для значений больше опорного

  for(let i=0; i<array.length; i++) {
    count += 1;
    if(i === pivotIndex)                                              // Если i равно опорный элемент тогда пропускаем и продолжаем функцию
      continue;
    if(array[i] < pivot) {                                            // Если значение i меньше чем значение опорного элемента добавляем в массив less
      less.push(array[i]);
    } else {                                                          // Если значение i больше чем значение опорного элемента добавляем в массив greater
      greater.push(array[i]);
    }
  }
  // Рекурсивно вызываем эту же функцию для меньшего и большего массива, при этим добавляя на возвращаемый массив
  return [...sortArray(less), pivot, ...sortArray(greater)];
}

console.log(sortArray(array))     // Сортированный массив
console.log(count)                // 53