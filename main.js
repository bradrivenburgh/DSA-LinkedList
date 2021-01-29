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
    console.log(currNode.value, currNode.next.value)
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

// Drivers
let list = main();
console.log(display(list));
console.log(size(list))
console.log(isEmpty(list))
console.log(findPrevious(list, 'Hotdog'))
console.log(findLast(list))