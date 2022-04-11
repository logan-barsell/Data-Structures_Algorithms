// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
    // this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
    // return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    // if(!this.head) {
    //   return null;
    // }
    // let node = this.head;
    // while(node) {
    //   if(!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    
    if(!this.head){
      return;
    }
    if(!this.head.next) {
      this.head = null;
      return;
    }
    this.getAt(this.size() - 2).next = null;
    // let previous = this.head;
    // let node = this.head.next;
    // while(node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    if(!this.head) {
      this.head = node;
      return;
    }
    this.getLast().next = node;
  }

  getAt(n) {
    let node = this.head;
    let counter = 0;
    while(node) {
      if(counter === n) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(n) {
    if(!this.head) {
      return;
    }
    if(n === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(n - 1);
    if(!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;

    // let counter = 1;
    // let previous = this.head;
    // let node = this.head.next;
    // while(node) {
    //   if(counter === n) {
    //     return previous.next = node.next ? node.next : null;
    //   }
    //   previous = node;
    //   node = node.next;
    //   counter++;
    // }

  }

  insertAt(data, n) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    if(n === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(n - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node; 
  }


  forEach(fn) {
    let node = this.head;
    let index = 0;
    while(node) {
      fn(node, index);
      node = node.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
