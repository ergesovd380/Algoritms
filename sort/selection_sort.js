// Сортировка с выбором
const array = [1, 8, 9, 10, 11, 12, 3, 2, 4, 5, 6, 7, 13, 14, 15]
let count = 0

function sortArray(array) {                               // сортировка массива
  for(let i = 0; i < array.length; i++) {                 // проходим через через вес массив
    indexMin = i                                          // indexMin начиная 0 будет расти по длине массива. Потому что i с перва = 0, потом 1, 2, 3 и т.д
    console.log('indexMin: ' + indexMin)
    for(let j = i + 1; j < array.length; j++) {           // новый цикл будет начинаться как indexMin, только + 1 
      // 2 цикл полностью пройдется по остатку массива. Но каждый раз - 1. Например, первый раз он проверить 14 значений, второй раз 13. Потому что он i + 1.
      if(array[j] < array[indexMin]) {                    // если значение второго цикла менше нынешний indexMin. (Первом случае он false, потому что 1 минимальный значение)
        indexMin = j                                      // Второй раз indexMin будет с перва 6 (3), он поменяет 8 с 3, потом опять пройдется, и потом будет 7 (2), потом поменяет 3 с 2
        console.log(indexMin)                             // Второй раз 6, 7
      }
      count += 1                                          // счетчик
    }
    let tmp = array[i];                                   // на переменную прикрепляем значение нынешний i
    array[i] = array[indexMin];                           // нынешний i ровняем уже с изменемным indexMin
    array[indexMin] = tmp                                 // а indexMin ставим на позицию нынешного i
  }
  return array                                            // возврашаем массив
}


// для сортировки пользуются O(0.5*n*n)

const func = sortArray(array)
console.log(func)     // последовательный массив
console.log(array.length) // O(0.5*n*n)
console.log(count)    // 105 иторации
