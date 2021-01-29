const _Node = require('./_Node');

class LinkedList {
  constructor() {
    // value of the first item in the linked list
    // head is the first "next"
    this.head = null;
  }

  insertFirst(item) {
    // Create a new instance (via new keyword) of _Node
    // with the value (item) and memory address (next/head)
    // as arguments.  Head / next point to the ENTIRE node,
    // both the value and the memory address
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head = null) {
      this.insertFirst(item, this.head);
    }
    else {
      // Create a temp node and keep assigning it next value
      // of each node until we find the next value that points 
      // to null (the end of the list)
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // Create a new _Node with a value and set the next to null 
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Check if the list is empty
    if (!this.head) {
      return null;
    }
    // Start at the first node
    let currNode = this.head;

    // Look for the item we want
    while (currNode.value !== item) {
      // Escape hatch: if the end of list and not found, break
      if (currNode.next === null) {
        return null;
      }
      // Normal operation: assign currNode to the next node
      else {
        currNode = currNode.next;
      }
    }
    // Found it; return the found node / value
    return currNode;
  }

  remove(item) {
    // If list is empty return null
    if (this.head === null) {
      return null;
    }
    // If node to remove is head, assign head to next node in list
    // and return
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // If not at head
    let currNode = this.head;
    let prevNode = this.head;
    // As long as we're not at the end of the list, compare item to node value
    while ((currNode !== null) && (currNode.value !== item)) {
      // Save previous node
      prevNode = currNode;
      // Move on to next node
      currNode = currNode.next;
    } // End while loop

    // If not found
    if (currNode === null) {
      console.log('Item not found')
      return null;
    }
    // If found, remove currNode by cutting it out of list
    prevNode.next = currNode.next;

  }
}