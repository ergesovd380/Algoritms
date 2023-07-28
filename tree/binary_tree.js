/*
    БИНАРНОЕ ДЕРЕВО ПОИСКА
                5
    3                       6

  1   5                   5   9

Бинарное дерево, это дерево который строится оссобым способом. Если значение под дерево, меньше чем значение дерево, тогда он уходит в левый угол, если больше то правый.
*/

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if(!this.root) {                                      // Это условие чтобы создать класс ДЕРЕВО
      this.root = new TreeNode(value);
    } else {
      let node = this.root;                               // Если уже есть класс прикрепляем к переменной
      let newNode = new TreeNode(value)                   // И создаем новый класс, чтобы потом использовать его
      while(node) {                                       // Пока класс не опустится
        if(value > node.value) {                          // Первый раз это условие не будет работать, потому что, node.value = null
          if(!node.right) {
            break;
          }
          node = node.right;
        } else {
          if(!node.left) {
            break;
          }
          node = node.left;
        }
      }
      if(value > node.value) {
        node.right = newNode;
        // console.log(node.right)
      } else {
        node.left = newNode;
        // console.log(node.left)
      }
    }
  }

  print(root = this.root) {
    if(!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(1)
tree.print()