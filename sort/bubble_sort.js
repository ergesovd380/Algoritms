// Позырьковая сортировка
const array = [1, 8, 9, 10, 12, 3, 4, 5, 6, 7, 13, 14, 2, 15, 11]
let count = 0

function sortArray(array) {                                               // сортировка массива меняя местами по одному
  for(let i = 0; i < array.length; i++) {                                 // проходим через через вес массив
    console.log('Каждая иторация ' + i)
    for(let j = 0; j < array.length; j++) {                               // Каждом итораций он проходить вес массив один раз и будет менять местами
      if(array[j + 1] < array[j]) {                                       // Проходим через вес массив 1 раз и находим значение 
        console.log(`array[j + 1] ${array[j + 1]}, array[j] ${array[j]}`)
        let tmp = array[j];                                               // минимальную позиция прикрепляем на переменное
        array[j] = array[j + 1];                                          // меняем местами с соседним
        array[j + 1] = tmp                                                // соседную позицию ставим вместо минимального
      }
      count += 1                                                          // счетчик
    }
  }
  return array
}

// для сортировки пользуются O(n*n)

const func = sortArray(array)
console.log(func)     // последовательный массив
console.log(array.length) // O(n*n)
console.log(count)    // 225 иторации