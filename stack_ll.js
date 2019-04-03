var LinkedList = require('LinkedList');

// function Node(value) {
//   this.data = value;
//   this.next = null;
// }
//
// function LinkedList() {
//   this.head = null;
// }
//
// LinkedList.prototype.removeHead = function() {
//   this.head = this.head.next;
// }
//
// LinkedList.prototype.prependData = function(value) {
//   // add to begining of stack
//   let newNode = new Node(value);
//   newNode.next = this.head;
//   this.head = newNode;
// }
//
// LinkedList.prototype.printLinkedList = function() {
//   let currentNode = this.head;
//   while (currentNode != null) {
//     console.log(`${currentNode.data}`);
//     currentNode = currentNode.next;
//   }
// }

class Stack {
  constructor() {
    this.innerList = LinkedList;
  }

  pop() {
    this.innerList.removeHead()
  }

  push(value) {
    this.innerList.prependData(value);
  }

  isEmpty() {
    if (this.innerList.length == 0) {
      return true;
    }
  }

  peek() {

  }

  print() {
    this.innerList.printLinkedList();
  }
}

myStack = new Stack();
myStack.push(10);
myStack.push(2);
myStack.push(70);
myStack.print();
