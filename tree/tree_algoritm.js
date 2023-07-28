/*
  Обхода деревье
                                      .5
    5                       6                       1                     8

    5                     5 5 5                    5  5                   5

5       5                                                                 5 

  Пример с дереьвями . это дерево, а под ним 5, 6, 1, 8 это тоже деревья, только для . они под дереви.
  Скажем что у нас есть такое дерево, надо обойти каждый узел, и посчитать сумму значений, который хранит каждый из этих узлов. В этом примере (75) 
*/ 

const tree = [                                                          // Это дерево который наверху. (v: значение этого дерево, с: дочерный дерево)
  {
    v: 5,
    c: [
      {
        v: 5,
        c: [
          {
            v: 5,
            c: [
              {
                v: 10
              }
            ]
          }
        ]
      },
      {
        v: 6,
        c: [
          {
            v: 15
          }
        ]
      },
      {
        v: 1,
        c: [
          {
            v: 10
          }
        ]
      },
      {
        v: 8,
        c: [
          {
            v: 5,
            c: [
              {
                v:5
              }
            ]
          }
        ]
      }
    ]
  }
]

const recursive = (tree) => {
  let sum = 0;
  tree.forEach(node => {
    sum += node.v;
    if(!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });
  return sum;
}

console.log(recursive(tree));             // 75

const iteral = (tree) => {
  if(!tree.length) {
    return 0;
  }
  let sum = 0;
  let stack = [];
  tree.forEach(node => {stack.push(node)});
  while(stack.length) {
    const node = stack.pop();
    sum += node.v;
    if(node.c) {
      node.c.forEach(child => stack.push(child))
    }
  }
  return sum;
}

console.log(iteral(tree));              // 75
