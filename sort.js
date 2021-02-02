const LinkedList = require('./LinkedList');

const unsortedList = new LinkedList();
// unsortedList.insertFirst(1);
// unsortedList.insertLast(3);
// unsortedList.insertLast(2);
// unsortedList.insertFirst(4)

const max = 10;
for(let i = 0; i < max; i++){
  unsortedList.insertFirst(Math.floor(Math.random() * 1000));
}

// 4, 1, 3, 2

function display(list) {
  let currNode = list.head;

  while (currNode) {
    console.log(currNode.value)
    currNode = currNode.next;
  }
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

/**
 * Assuming list is valid.
 */
function sort(list) {
  let nextNode = list.head.next;
  let lastVal = list.head.value;
  let nextVal;
  let iter = 0;
  
  while (nextNode) {
    nextVal = nextNode.value;

    if (nextVal < lastVal) {
      list.remove(nextVal); 
      nextNode = list.insertFirst(nextVal); // next node is first and set head to first as well and changes node's next to previous first
    }
    
    lastVal = nextVal;
    nextNode = nextNode.next;

    iter++;
  }

  console.log('iter', iter);

  return list;
}

// Solves simplest scenario of one element. [1]
// Solves two elements [2,1]
// Solves three elements [3,2,1]

display(unsortedList);
display(sort(unsortedList));