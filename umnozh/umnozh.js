/*
Создание таблицы умножения д.т1я всех элементов массива. Например,
если массив состоит из элементов [2, 3, 7, 8, 10], сначала каждый элемент
умножается на 2, затем каждый элемент умножается на 3, затем
на 7 и т. д.
*/

const arr = [2, 3, 7, 8, 10];

const func = (arr) => {
  let res;
  let item;

  if(arr.length < 1) {
    return arr;
  }

  for(let i=0; i < arr.length; i++) {
    item = arr[i]

    if(!res) {
      res = arr.map(element => {
        return element *= item;
      })
    } else {
      res = res.map(element => {
        return element *= item;
      })
    }
  }

  return res;
}

console.log(func(arr));