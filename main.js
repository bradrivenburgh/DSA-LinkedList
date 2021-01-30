const LinkedList = require('./LinkedList');

function main() {
  const SLL = new LinkedList;

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('Husker');
  SLL.insertBefore('INSERTBEFORE', 'Boomer');
  SLL.insertAfter('INSERTAFTER', 'Tauhida');
  SLL.insertAt('INSERTAT', 6); // 0 indexed list
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 2);
  SLL.remove('Tauhida');

  return SLL;
}

function display(list) {
  let string = JSON.stringify(list);
  return string;
}

function size(list) {
  return list.length; 
}

function isEmpty(list) {
  if (list.head === null) {
    return true;
  }
  return false;
}

function findPrevious(list, value = 'Hotdog') {
  let currNode = list.head;

  while ((currNode.next !== null) && (currNode.next.value !== value)) {
    currNode = currNode.next;
  }

  return currNode;
}

function findLast(list) {
  let currNode = list.head;

  while ((currNode.next !== null)) {
    currNode = currNode.next;
  }

  return currNode;
}

function reverseLinkedList(list) {
  let prevNode = null;
  let currNode = list.head;
  let nextNode = null;

  while (currNode.next !== null) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  list.head = prevNode;
   
  return list;
}

function recursiveReverse(list, currNode = list.head, prevNode = null, nextNode = null) {
  if (!currNode.next) {
    list.head = currNode;
    currNode.next = prevNode;
    return;
  }

  nextNode = currNode.next;
  currNode.next = prevNode;
  recursiveReverse(list, nextNode, currNode, list.head)
  console.log(list)
}

function thirdFromEnd(list) {
  let prevNode = null;
  let currNode = list.head;
  let nextNode = list.head;

  if (!list.head || !list.head.next || !list.head.next.next) {
    return;
  }

  while (nextNode.next !== null) {
    prevNode = currNode;
    currNode = currNode.next;
    nextNode = currNode.next;
  }
   
  return prevNode;
}

function middleOfList(list) {
  let halfSpeed = list.head;
  let fullSpeed = list.head;

  if (list.head === null) {
    return;
  }

  while (fullSpeed.next !== null) {
    halfSpeed = halfSpeed.next;
    fullSpeed = fullSpeed.next;
    if (fullSpeed.next) {
      fullSpeed = fullSpeed.next;
    }
  }

  return halfSpeed;
}

// Drivers
let list = main();
// console.log(display(list));
// console.log(size(list))
// console.log(isEmpty(list))
// console.log(findPrevious(list, 'Hotdog'))
// console.log(findLast(list))
// console.log(reverseLinkedList(list));
// console.log(recursiveReverse(list))
// console.log(thirdFromEnd(list))
// console.log(middleOfList(list))

/*
Mystery Program
What does it do?
* current.next while loop goes through list once
* inner while loop compares each node with other nodes in the list, 
deleting duplicates.
* O(n^k) 
*/

function cycleList() {
  const list = new LinkedList;
  list.insertFirst('One');
  list.insertLast('Two');
  list.insertLast('Three');
  list.find('Three').next = list.head;
  return list;
}

function detectCycleList(list) {
  if (list.head === null) {
    return;
  }

  let halfSpeed = list.head;
  let fullSpeed = list.head;

  while (fullSpeed.next !== null) {
    halfSpeed = halfSpeed.next;
    fullSpeed = fullSpeed.next;
    if (fullSpeed.next) {
      fullSpeed = fullSpeed.next;
    }

    if (halfSpeed === fullSpeed) {
      return true;
    }
  }

  return false;
}

const circularList = cycleList();
//console.log(circularList)
// console.log(detectCycleList(circularList));

function unorderedList() {
  const list = new LinkedList;
  list.insertFirst(1);
  list.insertLast(3);
  list.insertLast(2);
  list.insertFirst(4)
  return list;
}

const unsortedList = unorderedList();


// Ask Robert

// function sortList(list) {
//   let sorted, nextNode;
//   let currNode = list.head;

//   while (currNode != null) {
//     nextNode = currNode.next;
//     sorted = 
//   }
// }

console.log(unsortedList)