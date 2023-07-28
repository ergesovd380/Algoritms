const a = [1, 2, 4, 6, 7]
const b = [3, 5, 5]

function toOneArray(a, b) {
  let result = [];
  let i = 0;
  let j = 0;

  while(i < a.length || j < b.length) {
    let firstItem = a[i];
    let secondItem = b[j];

    if(firstItem === undefined) {
      result.push(secondItem)
      j += 1;
      continue
    }

    if(secondItem === undefined) {
      result.push(firstItem)
      i += 1;
      continue
    }

    if(firstItem === secondItem) {
      result.push(firstItem, secondItem);
      i += 1;
      j += 1;

      continue
    };

    if(firstItem < secondItem) {
      result.push(firstItem);
      i += 1;
    };
    
    if(firstItem > secondItem) {
      result.push(secondItem);
      j += 1;
    };
  }
  return result
}

console.log(toOneArray(a, b))
