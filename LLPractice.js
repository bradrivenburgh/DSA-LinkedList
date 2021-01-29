const _Node = require('./_Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item, this.head)
    } 
    else {
      let currNode = this.head;
      // While the next node is not the end of the list
      while (currNode.next !== null) {
        currNode = currNode.next;
      } 
      currNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Check if list empty
    if (this.head === null) {
      return null;
    }

    let currNode = this.head;    
    // Go through list one-by-one
    while(currNode.value !== item) {
      if (currNode === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    // Check if list empty
    if (this.head === null) {
      return null;
    }

    // If item is at head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    // Go through list one by one
    let prevNode = this.head;
    let currNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    
    // If end of list and not found
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    
    // If found, cut currNode out of list by skipping it
    prevNode.next = currNode.next;
  }

}

module.exports = LinkedList;