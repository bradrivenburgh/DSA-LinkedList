const _Node = require('./_Node');

class LinkedList {
  constructor() {
    // 'head' indicates beginning of list / 1st node
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        //Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  insertBefore(item, key) {
    //If empty, insert
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    // If key is the first node
    if (this.head.value === key) {
      this.insertFirst(item);
      return;
    }

    // Find node with key
    let currNode  = this.head;
    let previousNode = this.head;
    let newNode;
    
    while((currNode !== null) && (currNode.value !== key)) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    
    if (currNode === null) { 
      console.log(`Item '${key}' not found`);
      return;
    }
    // Point the newNode to Node with key
    newNode = new _Node(item, currNode)
    // Point the previousNode to the newNode between it and currNode
    previousNode.next = newNode;
  }

  insertAfter(item, key) {
    //If empty, insert
    if (this.head === null) {
      this.insertFirst(item);
      return;
    }

    // Find the node
    const nodeToFind = this.find(key);

    // If not found
    if (!nodeToFind) {
      console.log(`Item '${key}' not found`);
      return;
    }

    // If last node
    if (nodeToFind.next === null) {
      nodeToFind.next = new _Node(item, null)
      return;
    }

    // Point the newNode to node following nodeToFind
    let newNode = new _Node(item, nodeToFind.next)
   
    // Point nodeToFind to newNode
    nodeToFind.next = newNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next
    // node head.
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode  = this.head;
    // Keep track of the previous node
    let previousNode = this.head;
    
    while((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    
    if (currNode === null) { 
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;