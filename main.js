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

  return SLL;

}

console.log(main());