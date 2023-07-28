// как убрать дубликаты из массива (Если внутри массива есть объект, не будет работать)
const arr = [4,1,1,2,2]

const newArr = [... new Set(arr)]
console.log(newArr)
