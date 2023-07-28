/*
  Связный список
    Это каждый предвидущий элемент, хранит ссылку на следующий элемент списка. Плюс в этом том, что мы можем мгновенно добавлять начало или конец списка элемент.
*/

class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    if(this.size === 0) {                               // Это условие чтобы создать класс Ноде
      this.root = new Node(value);
      this.size += 1;
      return true;
    }
    let node = this.root;                               // Класс прикрепляем к переменной
    while(node.next) {                                  // Пока node.next не пустует (Первый раз это функция не заработает)
      // console.log(node.next)                            // Второй раз { value: 2, next: null }
      node = node.next;                                 // node равняется на node.next, чтобы next имел ссылку к следующему элементу
    }
    let newNode = new Node(value);                      // Первый раз это не заработает
    // console.log(newNode)                                // { value: 2, next: null }
    node.next = newNode;                                // node.next равняется на новый класс, чтобы не терять ссылку
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while(node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result)
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.add(5);
list.add(2);
list.add(3);
list.add(5);
list.add(7);
list.print()